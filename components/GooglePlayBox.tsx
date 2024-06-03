import React from 'react'
import { TitleWithButton } from './TitleWithButton'
import { MobileBottomSection } from './MobileBottomSection'
import GooglePlayIcon from 'public/assets/vector-icons/google-play-icon.svg'
import GooglePlayText from 'public/assets/vector-icons/google-play-text.svg'
import DarkBun from 'public/assets/darthbun.png'
import Image from 'next/image'
import Link from 'next/link'
import { GOOGLE_PLAY_LINK } from 'constants/links'

export const GooglePlayBox: React.FC = () => {
	return (
		<Link href={GOOGLE_PLAY_LINK} className='links--mobile-box' target='_blank'>
			<TitleWithButton buttonBackgroundColor='light-blue' title='Android app' />
			<MobileBottomSection left={<GooglePlayIcon />} right={<GooglePlayText />} />
			<Image src={DarkBun} alt='darkbun' className='hero hero--darkbun' width={191} height={319} quality={100} />
		</Link>
	)
}
