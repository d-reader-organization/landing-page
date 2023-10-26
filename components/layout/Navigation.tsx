import React from 'react'
import { ToolbarProps, Toolbar } from '@mui/material'
import LogoIcon from 'public/assets/vector-icons/logo-icon.svg'

const Navigation: React.FC<ToolbarProps> = (props) => {
	return (
		<Toolbar component='nav' className='navigation' {...props}>
			<a aria-label='homepage' href='https://www.dreader.io' className='logo-wrapper'>
				<LogoIcon className='logo' />
			</a>
		</Toolbar>
	)
}

export default Navigation
