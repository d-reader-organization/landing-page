import React from 'react'
import { Box, BoxProps, Typography, Hidden } from '@mui/material'
import ArtistIcon from 'public/assets/vector-icons/artist-icon.svg'
import Link from 'next/link'
import clsx from 'clsx'

interface Props extends BoxProps {
	animate: boolean
	observationRef?: BoxProps['ref']
}

const CreatorSection: React.FC<Props> = ({ animate = false, observationRef, className, ...props }) => {
	return (
		<Box
			component='section'
			id='creators-section'
			className={clsx(className, animate ? 'visible' : '')}
			ref={observationRef}
			{...props}
		>
			<ArtistIcon className='icon--artist' />
			<Typography component='h1' variant='h2' className='title'>
				You&apos;re a creator?
				<br />
				<Hidden smUp>Reach out to us!</Hidden>
				<Hidden smDown>Come reach out to us.</Hidden>
			</Typography>
			<Typography className='text'>
				All-in-one app removing obstacles from digital collectibles for indie creators, publishers, brands, and
				projects.
			</Typography>
			<Link href='mailto:admin@dreader.io' rel='noreferrer' target='_blank' className='link'>
				Schedule a call 🤙
			</Link>
		</Box>
	)
}

export default CreatorSection
