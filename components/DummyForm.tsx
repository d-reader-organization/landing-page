import { Button, TextField, CircularProgress } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { SubscribeRequest, useNewsletter } from 'api/newsletter'
import { useAuth } from '@open-sauce/solomon'
import * as yup from 'yup'

const validationSchema: yup.Schema<SubscribeRequest[]> = yup
	.array()
	.of(
		yup.object({
			email: yup.string().email('invalid email format').required('email is required'),
			file: yup.string().required('required'),
		})
	)
	.required()

// const validationSchema: yup.Schema<SubscribeRequest[]> = yup.object().shape({
// 	covers: yup
// 		.array()
// 		.of(
// 			yup.object({
// 				email: yup.string().email('invalid email format').required('email is required'),
// 				file: yup.string().required('required'),
// 			})
// 		)
// 		.required(),
// })

const initialValues: SubscribeRequest[] = [
	{
		email: '',
		file: undefined,
	},
	{
		email: '',
		file: undefined,
	},
]

const DummyForm: React.FC = () => {
	const { mutateAsync: subscribe, isLoading } = useNewsletter()
	const auth = useAuth()

	return (
		<Formik
			initialValues={initialValues}
			// validationSchema={validationSchema}
			onSubmit={async (values) => {
				const formData = new FormData()
				formData.append('email[0]', values[0].email)
				formData.append('email[1]', values[1].email)
				if (values[0].file) {
					formData.append('file[0]', values[0].file)
				}
				if (values[1].file) {
					formData.append('file[1]', values[1].file)
				}
				console.log('values: ', formData)
				if (isLoading) return
				try {
					await subscribe(formData)
				} catch {}
			}}
		>
			{({ setFieldValue }) => (
				<Form noValidate id='newsletter-form' className='newsletter-form' encType='multipart/form-data'>
					<Field
						id='[0].email'
						name='[0].email'
						autoComplete='[0].email'
						margin='normal'
						variant='outlined'
						size='small'
						type='text'
						as={TextField}
					/>

					<input
						id='[0].file'
						name='[0].file'
						type='file'
						defaultValue={undefined}
						onChange={(event) => {
							if (event.currentTarget.files !== null) {
								setFieldValue('[0].file', event.currentTarget.files[0])
							}
						}}
					/>

					<br />
					<br />

					<Field
						id='[1].email'
						name='[1].email'
						autoComplete='[1].email'
						margin='normal'
						variant='outlined'
						size='small'
						type='text'
						as={TextField}
					/>

					<input
						id='[1].file'
						name='[1].file'
						type='file'
						defaultValue={undefined}
						onChange={(event) => {
							if (event.currentTarget.files !== null) {
								setFieldValue('[1].file', event.currentTarget.files[0])
							}
						}}
					/>

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
				</Form>
			)}
		</Formik>
	)
}

export default DummyForm
