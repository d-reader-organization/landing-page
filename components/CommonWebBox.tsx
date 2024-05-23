import React from 'react'
import PlayIcon from 'public/assets/vector-icons/play-icon.svg'
import { Box, Theme, useMediaQuery } from '@mui/material'
import { Button } from './Button'
import { PlayDemoBox } from './PlayDemoBox'
import Link from 'next/link'

interface Props {
	actionButtonColor?: 'yellow' | 'green' | 'grey'
	actionButtonUrl: string
	demoBackgroundImage: string
	demoLink: string
	descriptionText: string
	mobileSvgComponent: React.ReactNode
	svgComponent: React.ReactNode
	title: React.ReactNode
}

export const CommonWebBox: React.FC<Props> = ({
	actionButtonColor = 'yellow',
	actionButtonUrl,
	demoBackgroundImage,
	demoLink,
	descriptionText,
	mobileSvgComponent,
	svgComponent,
	title,
}) => {
	const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

	const clickableTitle = (
		<Link className='text--decoration-none' href={actionButtonUrl} target='_blank'>
			{title}
		</Link>
	)

	return isMobile ? (
		<div className='links--web-box'>
			{clickableTitle}
			{mobileSvgComponent}
			<Box mb={4} />
			<span className='description-text'>{descriptionText}</span>
			<Box mb={3} />
			<Box display='flex' flexDirection='column' gap={1.5} width='100%'>
				<Button asLink backgroundColor={actionButtonColor} href={actionButtonUrl} text='LAUNCH APP' />
				<Button asLink backgroundColor='grey' href={demoLink}>
					<Box display='flex' alignItems='center' gap={1}>
						<PlayIcon />
						PLAY DEMO
					</Box>
				</Button>
			</Box>
		</div>
	) : (
		<div className='links--web-box'>
			<Box display='flex' flexDirection='column' justifyContent='space-between'>
				{clickableTitle}
				<span className='description-text'>{descriptionText}</span>
			</Box>

			<PlayDemoBox image={demoBackgroundImage} link={demoLink} />
			<div
				style={{
					display: 'flex',
					position: 'absolute',
					right: '50%',
					bottom: 0,
					transform: 'translate(54%, 0%)',
				}}
			>
				{svgComponent}
			</div>
		</div>
	)
}