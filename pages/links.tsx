import type { NextPage } from 'next'
import Main from 'components/layout/Main'
import { Box, Typography } from '@mui/material'
import LogoIcon from 'public/assets/vector-icons/logo-icon.svg'
import BunInTheHoleIcon from 'public/assets/vector-icons/bun-in-the-hole-icon.svg'
import TwitterIcon from 'public/assets/vector-icons/twitter-icon.svg'
import DiscordIcon from 'public/assets/vector-icons/discord-icon.svg'
import TensorIcon from 'public/assets/vector-icons/tensor-icon.svg'
import GithubIcon from 'public/assets/vector-icons/github-icon.svg'
import InstagramIcon from 'public/assets/vector-icons/instagram-icon.svg'
import React from 'react'
import { GooglePlayBox } from 'components/GooglePlayBox'
import { AppleStoreBox } from 'components/AppleStoreBox'
import { DReaderWebBox } from 'components/DReaderWebBox'
import { DPublisherBox } from 'components/DPublisherBox'
import { SocialIconBox } from 'components/SocialIconBox'
import { Footer } from 'components/layout/Footer'
import { TensorBox } from 'components/TensorBox'
import { DISCORD_LINK, GITHUB_LINK, HOME_LINK, INSTAGRAM_LINK, TENSOR_LINK, TWITTER_LINK } from 'constants/links'

const Links: NextPage = () => {
	return (
		<div className='links'>
			<Box margin='0 auto' padding='4rem 0 2rem 0' maxWidth={180} mb={[0, 8]}>
				<a aria-label='homepage' href={HOME_LINK} rel='noreferrer' target='_blank' className='logo-wrapper'>
					<LogoIcon className='logo' />
				</a>
			</Box>
			<Main className='main'>
				<Box display='flex' flexDirection='column' gap={4} maxWidth='1040px' width='100%' mx='auto' p={2}>
					<Box display='flex' flexDirection={['column', 'row']} gap={4}>
						<GooglePlayBox />
						<AppleStoreBox />
					</Box>
					<DReaderWebBox />
					<DPublisherBox />
					<TensorBox />
					<Box display='flex' flexDirection='column' alignItems='center' gap={3} mt={4}>
						<BunInTheHoleIcon />
						<Typography component='span' fontSize={['14px', '18px']}>
							Follow the white rabbit.
						</Typography>
					</Box>

					<Box display='flex' justifyContent='center' gap={[2, 4]} mb={8} px={[1, 2]}>
						<SocialIconBox href={TWITTER_LINK}>
							<TwitterIcon />
						</SocialIconBox>
						<SocialIconBox href={DISCORD_LINK}>
							<DiscordIcon />
						</SocialIconBox>
						<SocialIconBox href={TENSOR_LINK}>
							<TensorIcon />
						</SocialIconBox>
						<SocialIconBox href={GITHUB_LINK}>
							<GithubIcon />
						</SocialIconBox>
						<SocialIconBox href={INSTAGRAM_LINK}>
							<InstagramIcon />
						</SocialIconBox>
					</Box>
				</Box>
			</Main>
			<Footer />
		</div>
	)
}

export default Links
