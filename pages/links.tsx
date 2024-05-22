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

const Links: NextPage = () => {
	return (
		<div className='links'>
			<Box margin='0 auto' padding='4rem 0 2rem 0' maxWidth={180} mb={[0, 8]}>
				<a
					aria-label='homepage'
					href='https://www.dreader.io'
					rel='noreferrer'
					target='_blank'
					className='logo-wrapper'
				>
					<LogoIcon className='logo' />
				</a>
			</Box>
			<Main className='main'>
				<Box display='flex' flexDirection='column' gap={4} maxWidth='md' width='100%' mx='auto' p={2}>
					<Box display='flex' flexDirection={['column', 'row']} gap={4}>
						<GooglePlayBox />
						<AppleStoreBox />
					</Box>
					<DReaderWebBox />
					<DPublisherBox />
					<Box display='flex' flexDirection='column' alignItems='center' gap={3} mt={4}>
						<BunInTheHoleIcon />
						<Typography component='span' fontSize={['14px', '18px']}>
							Follow the white rabbit.
						</Typography>
					</Box>

					<Box display='flex' justifyContent='center' gap={[2, 4]} mb={8} px={[1, 2]}>
						<SocialIconBox href='https://twitter.com/dReaderApp'>
							<TwitterIcon />
						</SocialIconBox>
						<SocialIconBox href='https://discord.gg/rrZsRvC9mh'>
							<DiscordIcon />
						</SocialIconBox>
						<SocialIconBox href='https://www.tensor.trade/creator/dreader'>
							<TensorIcon />
						</SocialIconBox>
						<SocialIconBox href='https://github.com/d-reader-organization'>
							<GithubIcon />
						</SocialIconBox>
						<SocialIconBox href='https://www.instagram.com/d_reader_app'>
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
