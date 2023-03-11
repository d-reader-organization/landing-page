import React from 'react'
import { Box, BoxProps, Typography, Hidden } from '@mui/material'
import bunBunImage from 'public/assets/bun-bun.png'
import NewsletterForm from './NewsletterForm'
import Image from 'next/image'
import clsx from 'clsx'

interface Props extends BoxProps {
	animate: boolean
	observationRef?: BoxProps['ref']
}

const NewsletterSection: React.FC<Props> = ({ animate = false, observationRef, className, ...props }) => {
	return (
		<Box
			id='newsletter'
			component='section'
			className={clsx(className, animate ? 'visible' : '')}
			ref={observationRef}
			{...props}
		>
			<Box className='newsletter-content'>
				<Box className='form-wrapper'>
					<Typography className='text'>
						<Hidden smUp>
							Subscribe for <span className='text--underline'>alpha!</span>
						</Hidden>
						<Hidden smDown mdUp>
							Subscribe as an <span className='text--underline'>early adopter!</span>
						</Hidden>
						<Hidden mdDown>
							Subscribe as an <span className='text--underline'>early adopter</span> & apply
							<br />
							for&nbsp;
							<span className='text--important'>free Comic NFT</span> drops!
						</Hidden>
					</Typography>
					<NewsletterForm />
				</Box>
				<Image src={bunBunImage} alt='' width={250} height={450} className='bun-bun' />
			</Box>
		</Box>
	)
}

export default NewsletterSection
