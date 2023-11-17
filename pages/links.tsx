import type { NextPage } from 'next'
import Main from 'components/layout/Main'
import { Box, Button, Container, Divider, Typography } from '@mui/material'
import LogoIcon from 'public/assets/vector-icons/logo-icon.svg'
import logoShieldIcon from 'public/assets/logo-shield.png'
import TwitterIcon from 'public/assets/vector-icons/twitter-icon.svg'
import DiscordIcon from 'public/assets/vector-icons/discord-icon.svg'
import GooglePlayIcon from 'public/assets/vector-icons/google-play-icon.svg'
import GithubIcon from 'public/assets/vector-icons/github-icon.svg'
import { OndemandVideo, Mail } from '@mui/icons-material'
import React from 'react'

const Links: NextPage = () => {
	return (
		<div className='links'>
			<Box margin='0 auto' padding='4rem 0 1rem 0' maxWidth={180}>
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
				<Container maxWidth='xs' className='link-tree-list'>
					<Button
						className='link-tree-button link-tree-button--secondary'
						fullWidth
						href='https://www.dreader.app'
						rel='noreferrer'
						target='_blank'
					>
						<img
							className='logo'
							src={logoShieldIcon.src}
							alt=''
							width='20'
							height='20'
							style={{ marginRight: '0.5rem' }}
						/>
						<Typography component='span'>Web app 🚧</Typography>
					</Button>
					<Button
						className='link-tree-button'
						fullWidth
						href='https://play.google.com/store/apps/details?id=io.app.dreader'
						rel='noreferrer'
						target='_blank'
					>
						<GooglePlayIcon />
						<Typography component='span'>Google Play</Typography>
					</Button>
					<Divider style={{ color: 'white', border: '1px solid rgba(255, 255, 255, 0.6)' }} />

					<Button
						className='link-tree-button'
						fullWidth
						href='https://drive.google.com/file/d/1tNLGROtNE-DLLqwad7qvpn8vKHhm9QNY/view?usp=sharing'
						rel='noreferrer'
						target='_blank'
					>
						<OndemandVideo />
						<Typography component='span'>Main pitch video</Typography>
					</Button>

					<Box display='flex'>
						<Button
							className='link-tree-button'
							fullWidth
							href='https://youtu.be/HmRRaq2JaDo'
							rel='noreferrer'
							target='_blank'
							style={{ marginRight: '1rem' }}
						>
							<OndemandVideo />
							<Typography component='span'>dReader</Typography>
						</Button>
						<Button
							className='link-tree-button link-tree-button--tertiary'
							fullWidth
							href='https://youtu.be/7MOtVZCmkJw'
							rel='noreferrer'
							target='_blank'
						>
							<OndemandVideo />
							<Typography component='span'>dPublisher</Typography>
						</Button>
					</Box>
					<Divider style={{ color: 'white', border: '1px solid rgba(255, 255, 255, 0.6)' }} />

					<Box display='flex'>
						<Button
							className='link-tree-button link-tree-button--secondary'
							fullWidth
							href='https://twitter.com/dReaderApp'
							rel='noreferrer'
							target='_blank'
							style={{ marginRight: '1rem' }}
						>
							<TwitterIcon />
							<Typography component='span'>Twitter</Typography>
						</Button>
						<Button
							className='link-tree-button link-tree-button--secondary'
							fullWidth
							href='https://discord.gg/rrZsRvC9mh'
							rel='noreferrer'
							target='_blank'
						>
							<DiscordIcon />
							<Typography component='span'>Discord</Typography>
						</Button>
					</Box>
					<Box display='flex'>
						<Button
							className='link-tree-button link-tree-button--secondary'
							fullWidth
							href='https://github.com/d-reader-organization'
							rel='noreferrer'
							target='_blank'
							style={{ marginRight: '1rem' }}
						>
							<GithubIcon />
							<Typography component='span'>GitHub</Typography>
						</Button>
						<Button
							className='link-tree-button link-tree-button--secondary'
							fullWidth
							href='mailto:office@dreader.io'
							rel='noreferrer'
							target='_blank'
						>
							<Mail />
							<Typography component='span'>Contact</Typography>
						</Button>
					</Box>
				</Container>
			</Main>
		</div>
	)
}

export default Links
