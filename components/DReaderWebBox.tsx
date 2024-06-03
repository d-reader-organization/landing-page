import React from 'react'
import YellowLogoIcon from 'public/assets/vector-icons/logo-full-yellow-icon.svg'
import BunWebAppIcon from 'public/assets/vector-icons/bun-web-app-icon.svg'
import BunWebAppForMobileIcon from 'public/assets/vector-icons/bun-web-app-mobile-icon.svg'
import { Box } from '@mui/material'
import { Chip } from './Chip'
import DReaderScreens from 'public/assets/dreader-screens.png'
import { CommonWebBox } from './CommonWebBox'
import { DREADER_WEB_LINK, DREADER_DEMO_LINK } from 'constants/links'
import Link from 'next/link'

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
				<Link className='links--web-box-title' href={DREADER_WEB_LINK} target='_blank'>
					<YellowLogoIcon />
					<Box display='flex' gap={1}>
						<Chip backgroundColor='white' text='WEB APP' />
						{/* <Chip backgroundColor='light-yellow' text='BETA' /> */}
					</Box>
				</Link>
			}
		/>
	)
}
