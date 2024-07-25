import React from 'react'
import { TitleWithButton } from './TitleWithButton'
import { MobileBottomSection } from './MobileBottomSection'
import AppleStoreIcon from 'public/assets/vector-icons/apple-store-icon.svg'
import AppleStoreText from 'public/assets/vector-icons/apple-store-text.svg'
import Hellbun from 'public/assets/hellbun.png'
import Image from 'next/image'

export const AppleStoreBox: React.FC = () => {
	return (
		<div className='links--mobile-box'>
			<TitleWithButton buttonText='SOON' title='iOS app' buttonBackgroundColor='white' />
			<MobileBottomSection left={<AppleStoreIcon />} right={<AppleStoreText />} css={{ opacity: '.4' }} />
			<Image
				src={Hellbun}
				alt='hellbun'
				className='hero hero--hellbun'
				width={262}
				height={278}
				quality={100}
				priority
			/>
		</div>
	)
}
