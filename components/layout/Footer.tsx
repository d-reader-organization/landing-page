import React from 'react'
import { Box, BoxProps, Button, Typography } from '@mui/material'
import TwitterIcon from 'public/assets/vector-icons/twitter-icon.svg'
import DiscordIcon from 'public/assets/vector-icons/discord-icon.svg'
import GitbookIcon from 'public/assets/vector-icons/gitbook-icon.svg'
import GithubIcon from 'public/assets/vector-icons/github-icon.svg'
import logoImage from 'public/assets/logo.png'
import Image from 'next/image'
import clsx from 'clsx'

interface Props extends BoxProps {
	animate: boolean
}

const Footer: React.FC<Props> = ({ animate = false, ...props }) => {
	return (
		<Box component='footer' className={clsx('footer', animate ? 'visible' : '')} {...props}>
			<Box className='footer-content'>
				<Typography className='footer-title' variant='h5' component='p'>
					Join the digital comics revolution!
				</Typography>
				<Box className='footer-navigation'>
					<Box className='footer-icons'>
						<Button href='https://twitter.com/dReaderApp' rel='noreferrer' target='_blank'>
							<TwitterIcon />
							<Typography>Twitter</Typography>
						</Button>
						<Button href='https://discord.gg/BfCqPu63ZX' rel='noreferrer' target='_blank'>
							<DiscordIcon />
							<Typography>Discord</Typography>
						</Button>
						<Button href='https://docs.dreader.io' rel='noreferrer' target='_blank'>
							<GitbookIcon />
							<Typography>Gitbook</Typography>
						</Button>
						<Button href='https://github.com/d-reader-organization' rel='noreferrer' target='_blank'>
							<GithubIcon />
							<Typography>Github</Typography>
						</Button>
					</Box>
					<Box className='copyright'>
						<Image className='logo' src={logoImage} width={96} height={96} alt='dReader' />
						<Typography variant='body2'>{`© dReader / ${new Date().getFullYear()}`}</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Footer
