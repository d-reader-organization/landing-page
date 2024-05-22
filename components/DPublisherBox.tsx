import React from 'react'
import { CommonWebBox } from './CommonWebBox'
import DPublisherScreens from 'public/assets/dpublisher-screens.png'
import DPublisherAppIcon from 'public/assets/vector-icons/bun-dpublisher-icon.svg'
import DPublisherAppForMobileIcon from 'public/assets/vector-icons/bun-dpublisher-mobile-icon.svg'
import Box from '@mui/material/Box'
import DPublisherLogoIcon from 'public/assets/vector-icons/d-publisher-logo-icon.svg'
import { Chip } from './Chip'

export const DPublisherBox: React.FC = () => {
	return (
		<CommonWebBox
			actionButtonColor='green'
			actionButtonUrl='https://dpublisher.app'
			demoBackgroundImage={DPublisherScreens.src}
			demoLink='https://youtu.be/7MOtVZCmkJw'
			descriptionText='Platform for self-publishing digital comics on dReader.'
			mobileSvgComponent={<DPublisherAppForMobileIcon />}
			svgComponent={<DPublisherAppIcon />}
			title={
				<Box display='flex' alignItems='center' gap={2} mb={1.5}>
					<DPublisherLogoIcon />
					<Chip backgroundColor='light-green' text='BETA' />
				</Box>
			}
		/>
	)
}
