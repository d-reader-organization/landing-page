import React from 'react'
import { TitleWithButton } from './TitleWithButton'
import { MobileBottomSection } from './MobileBottomSection'
import GooglePlayIcon from 'public/assets/vector-icons/google-play-icon.svg'
import GooglePlayText from 'public/assets/vector-icons/google-play-text.svg'
import DarkBun from 'public/assets/darkbun-flipped.png'
import Image from 'next/image'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles/createTheme'

export const GooglePlayBox: React.FC = () => {
	const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
	return (
		<Link
			href='https://play.google.com/store/apps/details?id=io.app.dreader'
			className='links--mobile-box'
			target='_blank'
		>
			<TitleWithButton buttonBackgroundColor='light-blue' buttonText='BETA' title='Android app' />
			<MobileBottomSection left={<GooglePlayIcon />} right={<GooglePlayText />} />
			<Image
				src={DarkBun}
				alt='newbun'
				className='hero'
				width={isMobile ? 108 : 191}
				height={isMobile ? 156 : 276}
				quality={100}
			/>
		</Link>
	)
}
