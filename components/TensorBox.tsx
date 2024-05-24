import React from 'react'
import TensorIcon from 'public/assets/vector-icons/tensor-icon.svg'
import TensorBgImage from 'public/assets/tensor.png'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export const TensorBox: React.FC = () => {
	return (
		<Link
			href='https://www.tensor.trade/creator/dreader'
			className='tensor-box text--decoration-none'
			target='_blank'
			rel='noreferrer'
		>
			<Box
				display='flex'
				alignItems='center'
				gap={1}
				paddingX={[1, 2]}
				paddingY={[2, 3]}
				position='relative'
				zIndex={2}
			>
				<Typography component='span' fontSize={[16, 24]} fontWeight={700} lineHeight='120%' color='white'>
					Trade on Tensor
				</Typography>
				<TensorIcon />
			</Box>
			<div className='tensor-gradient' />
			<Image src={TensorBgImage} alt='tensor-bg-image' className='tensor-bg-image' fill />
		</Link>
	)
}
