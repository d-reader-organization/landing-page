import React from 'react'
import { TitleWithButton } from './TitleWithButton'
import { MobileBottomSection } from './MobileBottomSection'
import AppleStoreIcon from 'public/assets/vector-icons/apple-store-icon.svg'
import AppleStoreText from 'public/assets/vector-icons/apple-store-text.svg'
import AppleStoreHeroImage from 'public/assets/apple-store-hero.png'
import Image from 'next/image'

export const AppleStoreBox: React.FC = () => {
	return (
		<div className='links--mobile-box'>
			<TitleWithButton buttonText='SOON' title='iOS app' buttonBackgroundColor='white' />
			<MobileBottomSection left={<AppleStoreIcon />} right={<AppleStoreText />} css={{ opacity: '.5' }} />
			<Image src={AppleStoreHeroImage} alt='google-play-hero' className='hero' />
		</div>
	)
}
