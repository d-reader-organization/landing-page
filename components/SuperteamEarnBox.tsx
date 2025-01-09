import React from 'react'
import { CommonWebBox } from './CommonWebBox'
import SuperteamEarnScreen from 'public/assets/superteamearn-screens.png'
import SuperteamLogoIcon from 'public/assets/vector-icons/superteam-logo-icon.svg'
import { Chip } from './Chip'
import { DREADER_EARN_LINK } from 'constants/links'
import Box from '@mui/material/Box'

export const SuperteamEarnBox: React.FC = () => {
	return (
		<CommonWebBox
			actionButtonColor='blue'
			actionButtonUrl={DREADER_EARN_LINK}
			demoBackgroundImage={SuperteamEarnScreen.src}
			demoLink={DREADER_EARN_LINK}
			buttonText='APPLY NOW'
			descriptionText='Explore currently available art gigs on Superteam Earn!'
			title={
				<Box display='flex' alignItems='center' gap={2} mb={1.5}>
					<SuperteamLogoIcon style={{ maxHeight: '40px' }} />
					<Chip backgroundColor='light-blue' text='GIGS' />
				</Box>
			}
		/>
	)
}
