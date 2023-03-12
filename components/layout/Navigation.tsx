import React from 'react'
import { ToolbarProps, Toolbar, Box } from '@mui/material'
import LogoIcon from 'public/assets/vector-icons/logo-icon.svg'
import WalletIcon from 'public/assets/vector-icons/wallet-icon.svg'
import { useWallet } from '@solana/wallet-adapter-react'
import dynamic from 'next/dynamic'
import http from 'api/http'

const WalletButtonDynamic = dynamic(async () => (await import('@open-sauce/solomon')).WalletButton, { ssr: false })

const Navigation: React.FC<ToolbarProps> = (props) => {
	const { connected } = useWallet()

	return (
		<Toolbar component='nav' className='navigation' {...props}>
			<a aria-label='homepage' href='https://www.dreader.io' rel='noreferrer' target='_blank' className='logo-wrapper'>
				<LogoIcon className='logo' />
			</a>

			<Box className='navigation-items'>
				<WalletButtonDynamic http={http} className='wallet-button' aria-label='connect wallet'>
					<WalletIcon />
					<span className='text'>{connected ? 'Connected 🫡' : 'Connect Wallet'}</span>
				</WalletButtonDynamic>
			</Box>
		</Toolbar>
	)
}

export default Navigation
