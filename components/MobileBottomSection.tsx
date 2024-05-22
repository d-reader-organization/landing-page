import { Box } from '@mui/material'
import React from 'react'

interface Props {
	left: React.ReactNode
	right: React.ReactNode
	css?: React.CSSProperties
}

export const MobileBottomSection: React.FC<Props> = ({ left, right, css }) => {
	return (
		<Box display='flex' gap={1} style={css}>
			{left}
			{right}
		</Box>
	)
}
