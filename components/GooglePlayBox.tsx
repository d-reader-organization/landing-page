import React from 'react'
import { TitleWithButton } from './TitleWithButton'
import { MobileBottomSection } from './MobileBottomSection'
import GooglePlayIcon from 'public/assets/vector-icons/google-play-icon.svg'
import GooglePlayText from 'public/assets/vector-icons/google-play-text.svg'
import GooglePlayHeroImage from 'public/assets/google-play-hero.png'
import Image from 'next/image'
import Link from 'next/link'

export const GooglePlayBox: React.FC = () => {
	return (
		<Link href='https://play.google.com/store/apps/details?id=io.app.dreader' className='links--mobile-box' target='_blank'>
			<TitleWithButton buttonBackgroundColor='light-blue' buttonText='BETA' title='Android app' />
			<MobileBottomSection left={<GooglePlayIcon />} right={<GooglePlayText />} />
			<Image src={GooglePlayHeroImage} alt='google-play-hero' className='hero' />
		</Link>
	)
}
