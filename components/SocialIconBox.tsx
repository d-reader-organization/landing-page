import Box from '@mui/material/Box'
import Link from 'next/link'
import React from 'react'

export const SocialIconBox: React.FC<{ href: string } & React.PropsWithChildren> = ({ children, href }) => {
	return (
		<Link href={href} rel='noreferrer' target='_blank'>
			<Box display='flex' alignItems='center' padding={2} borderRadius='8px' bgcolor='#15171c' minHeight='56px'>
				{children}
			</Box>
		</Link>
	)
}
