import React from 'react'
import { TitleWithButton } from './TitleWithButton'
import { MobileBottomSection } from './MobileBottomSection'
import AppleStoreIcon from 'public/assets/vector-icons/apple-store-icon.svg'
import AppleStoreText from 'public/assets/vector-icons/apple-store-text.svg'
import Hellbun from 'public/assets/hellbun.png'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles/createTheme'

export const AppleStoreBox: React.FC = () => {
	const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
	return (
		<div className='links--mobile-box'>
			<TitleWithButton buttonText='SOON' title='iOS app' buttonBackgroundColor='white' />
			<MobileBottomSection left={<AppleStoreIcon />} right={<AppleStoreText />} css={{ opacity: '.4' }} />
			<Image
				src={Hellbun}
				alt='newbun'
				className='hero'
				width={isMobile ? 114 : 226}
				height={isMobile ? 140 : 276}
				style={{ right: isMobile ? undefined : 8 }}
				quality={100}
			/>
		</div>
	)
}
