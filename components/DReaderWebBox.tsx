import React from 'react'
import YellowLogoIcon from 'public/assets/vector-icons/logo-full-yellow-icon.svg'
import BunWebAppIcon from 'public/assets/vector-icons/bun-web-app-icon.svg'
import BunWebAppForMobileIcon from 'public/assets/vector-icons/bun-web-app-mobile-icon.svg'
import { Box } from '@mui/material'
import { Chip } from './Chip'
import DReaderScreens from 'public/assets/dreader-screens.png'
import { CommonWebBox } from './CommonWebBox'

export const DReaderWebBox: React.FC = () => {
	return (
		<CommonWebBox
			actionButtonUrl='https://www.dreader.app'
			demoBackgroundImage={DReaderScreens.src}
			demoLink='https://youtu.be/HmRRaq2JaDo'
			descriptionText='Platform for discovering, reading, trading & collecting digital comics.'
			mobileSvgComponent={<BunWebAppForMobileIcon />}
			svgComponent={<BunWebAppIcon />}
			title={
				<Box display='flex' alignItems='center' gap={2} mb={1.5}>
					<YellowLogoIcon />
					<Box display='flex' gap={1}>
						<Chip backgroundColor='white' text='WEB APP' />
						<Chip backgroundColor='light-yellow' text='BETA' />
					</Box>
				</Box>
			}
		/>
	)
}
