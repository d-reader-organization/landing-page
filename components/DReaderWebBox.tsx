import React from 'react'
import YellowLogoIcon from 'public/assets/vector-icons/logo-full-yellow-icon.svg'
import BunWebAppIcon from 'public/assets/vector-icons/bun-web-app-icon.svg'
import BunWebAppForMobileIcon from 'public/assets/vector-icons/bun-web-app-mobile-icon.svg'
import { Box } from '@mui/material'
import { Chip } from './Chip'
import DReaderScreens from 'public/assets/dreader-screens.png'
import { CommonWebBox } from './CommonWebBox'
import { DREADER_WEB_LINK, DREADER_DEMO_LINK } from 'constants/links'

export const DReaderWebBox: React.FC = () => {
	return (
		<CommonWebBox
			actionButtonUrl={DREADER_WEB_LINK}
			demoBackgroundImage={DReaderScreens.src}
			demoLink={DREADER_DEMO_LINK}
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
