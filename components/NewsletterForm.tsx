import { Button, Checkbox, Dialog, StandardTextFieldProps, TextField, CircularProgress, Hidden } from '@mui/material'
import { Formik, Form, FieldAttributes, FormikTouched, FormikErrors, Field } from 'formik'
import WalletIcon from 'public/assets/vector-icons/wallet-icon.svg'
import { SubscribeRequest, useNewsletter } from 'api/newsletter'
import { useWallet } from '@solana/wallet-adapter-react'
import TextImportant from 'components/TextImportant'
import { useAuth } from '@open-sauce/solomon'
import dynamic from 'next/dynamic'
import { useToggle } from 'hooks'
import http from 'api/http'
import * as yup from 'yup'

const WalletButtonDynamic = dynamic(async () => (await import('@open-sauce/solomon')).WalletButton, { ssr: false })

const validationSchema: yup.Schema<SubscribeRequest> = yup.object({
	email: yup.string().email('invalid email format').required('email is required'),
	wantsFreeNFTs: yup.boolean().required('required'),
	wantsDevelopmentProgressNews: yup.boolean().required('required'),
	wantsPlatformContentNews: yup.boolean().required('required'),
})

const initialValues: SubscribeRequest = {
	email: '',
	wantsFreeNFTs: false,
	wantsDevelopmentProgressNews: true,
	wantsPlatformContentNews: false,
}

const NewsletterForm: React.FC = () => {
	const [subscriptionDetailsOpen, toggleSubscriptionDetails, closeSubscriptionDetails] = useToggle()
	const { mutateAsync: subscribe, isLoading } = useNewsletter()
	const { connected } = useWallet()
	const auth = useAuth()

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={async (values) => {
				if (isLoading) return
				try {
					await subscribe(values)
					closeSubscriptionDetails()
				} catch {}
			}}
		>
			{({ errors, touched, setFieldTouched, validateForm }) => (
				<Form noValidate id='newsletter-form' className='newsletter-form'>
					<FormField
						property='email'
						label='e-mail'
						type='email'
						className='newsletter-email-input'
						errors={errors}
						touched={touched}
						required
					/>

					{auth.isAuthenticated ? (
						<Button
							type='button'
							variant='contained'
							className='button--subscribe'
							disabled={!auth.isAuthenticated || isLoading}
							onClick={async () => {
								setFieldTouched('email', true)
								validateForm().then((err: FormikErrors<SubscribeRequest>) => {
									if (!!err.email) return
									toggleSubscriptionDetails()
								})
							}}
						>
							<Hidden smDown>Subscribe</Hidden>
							<Hidden smUp>Sub</Hidden>
						</Button>
					) : (
						<WalletButtonDynamic http={http} className='wallet-button button--subscribe' aria-label='connect wallet'>
							<WalletIcon />
							<span className='text'>{connected ? 'Connected 🫡' : 'Connect'}</span>
						</WalletButtonDynamic>
					)}

					<Dialog
						style={{ backdropFilter: 'blur(4px)' }}
						open={subscriptionDetailsOpen}
						onClose={toggleSubscriptionDetails}
						PaperProps={{ className: 'newsletter-details-dialog' }}
					>
						<label className='newsletter-checkbox-label'>
							<FormCheckboxField
								property='wantsDevelopmentProgressNews'
								className='newsletter-checkbox'
								errors={errors}
								touched={touched}
							/>
							<span>
								I want to receive latest news about the <TextImportant>project development</TextImportant>
								<br />
								<em>milestones, roadmap updates, grants...</em>
							</span>
						</label>
						<label className='newsletter-checkbox-label'>
							<FormCheckboxField
								property='wantsPlatformContentNews'
								className='newsletter-checkbox'
								errors={errors}
								touched={touched}
							/>
							<span>
								I want to receive alpha news on <TextImportant>platform content</TextImportant>
								<br />
								<em>new artists, comics, collaborations...</em>
							</span>
						</label>
						<label className='newsletter-checkbox-label'>
							<FormCheckboxField
								property='wantsFreeNFTs'
								className='newsletter-checkbox'
								errors={errors}
								touched={touched}
							/>
							<span>
								I want to participate in <TextImportant>free NFT drops</TextImportant>
							</span>
						</label>
						<Button
							type='submit'
							variant='contained'
							fullWidth
							className='button--request-access'
							disabled={!auth.isAuthenticated}
							form='newsletter-form'
						>
							{isLoading ? <CircularProgress className='newsletter-loading' /> : 'Confirm'}
						</Button>
					</Dialog>
				</Form>
			)}
		</Formik>
	)
}

type FormFieldProps<T> = Omit<
	FieldAttributes<StandardTextFieldProps> & {
		property: keyof T
		touched: FormikTouched<T>
		errors: FormikErrors<T>
	},
	'name'
>

const FormField: React.FC<FormFieldProps<Pick<SubscribeRequest, 'email'>>> = ({
	property,
	touched,
	errors,
	...props
}) => {
	return (
		<Field
			id={property}
			name={property}
			autoComplete={property}
			margin='normal'
			variant='outlined'
			size='small'
			error={touched[property] && Boolean(errors[property])}
			helperText={touched[property] && errors[property]}
			as={TextField}
			{...props}
		/>
	)
}

const FormCheckboxField: React.FC<FormFieldProps<Omit<SubscribeRequest, 'email'>>> = ({
	property,
	touched,
	errors,
	...props
}) => {
	return (
		<Field
			type='checkbox'
			id={property}
			name={property}
			error={touched[property] && Boolean(errors[property])}
			as={Checkbox}
			{...props}
		/>
	)
}

export default NewsletterForm
