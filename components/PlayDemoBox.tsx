import React from 'react'
import PlayIcon from 'public/assets/vector-icons/play-icon.svg'
import { Button } from '@mui/material'
import Image from 'next/image'

interface Props {
	image: string
	url: string
}

export const PlayDemoBox: React.FC<Props> = ({ image, url }) => {
	return (
		<Button
			className='play-demo-content'
			onClick={(event) => {
				event.preventDefault()
				window.open(url, '_blank')
			}}
			title={url}
		>
			<Image className='play-demo-bg' src={image} alt={`play-demo - ${image}`} width={500} height={500} />
			<div className='play-demo-box'>
				<PlayIcon />
				<span>PLAY DEMO</span>
			</div>
		</Button>
	)
}
