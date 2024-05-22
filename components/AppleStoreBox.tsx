import React from 'react'
import { TitleWithButton } from './TitleWithButton'
import { MobileBottomSection } from './MobileBottomSection'
import AppleStoreIcon from 'public/assets/vector-icons/apple-store-icon.svg'
import AppleStoreText from 'public/assets/vector-icons/apple-store-text.svg'
import DarkBunImage from 'public/assets/dark-bun-desktop.png'
import DarkBunImageMobile from 'public/assets/dark-bun-mobile.png'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles/createTheme'

export const AppleStoreBox: React.FC = () => {
	const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
	return (
		<div className='links--mobile-box'>
			<TitleWithButton buttonText='SOON' title='iOS app' buttonBackgroundColor='white' />
			<MobileBottomSection left={<AppleStoreIcon />} right={<AppleStoreText />} css={{ opacity: '.5' }} />
			<Image
				src={isMobile ? DarkBunImageMobile : DarkBunImage}
				alt='dark-bun'
				className='hero'
				style={{ right: isMobile ? 20 : 0 }}
			/>
		</div>
	)
}
