import React from 'react'
import PlayIcon from 'public/assets/vector-icons/play-icon.svg'
import { Box, Theme, useMediaQuery } from '@mui/material'
import { Button } from './Button'
import { PlayDemoBox } from './PlayDemoBox'
import Link from 'next/link'

interface Props {
	actionButtonColor?: 'yellow' | 'green' | 'grey' | 'blue'
	actionButtonUrl: string
	demoBackgroundImage: string
	demoLink: string
	descriptionText: string
	buttonText?: string
	hidePlayIcon?: boolean
	mobileSvgComponent?: React.ReactNode
	svgComponent?: React.ReactNode
	title: React.ReactNode
}

export const CommonWebBox: React.FC<Props> = ({
	actionButtonColor = 'yellow',
	actionButtonUrl,
	demoBackgroundImage,
	demoLink,
	descriptionText,
	buttonText = 'PLAY DEMO',
	mobileSvgComponent,
	svgComponent,
	hidePlayIcon = false,
	title,
}) => {
	const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

	return isMobile ? (
		<Link href={actionButtonUrl} className='links--web-box' target='_blank'>
			{title}
			{mobileSvgComponent}
			<Box mb={4} />
			<span className='description-text'>{descriptionText}</span>
			<Box mb={3} />
			<Box display='flex' flexDirection='column' gap={1.5} width='100%'>
				<Button backgroundColor={actionButtonColor} href={actionButtonUrl} text='LAUNCH APP' />
				<Button backgroundColor='grey' onClick={() => window.open(demoLink, '_blank')}>
					<Box display='flex' alignItems='center' gap={1} width="220px">
						{!hidePlayIcon && <PlayIcon />}
						{buttonText}
					</Box>
				</Button>
			</Box>
		</Link>
	) : (
		<Link href={actionButtonUrl} className='links--web-box' target='_blank'>
			<Box display='flex' flexDirection='column' justifyContent='space-between'>
				{title}
				<span className='description-text'>{descriptionText}</span>
			</Box>

			<PlayDemoBox image={demoBackgroundImage} url={demoLink} buttonText={buttonText} hidePlayIcon={hidePlayIcon} />
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
		</Link>
	)
}
