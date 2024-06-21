import React from 'react'
import PlayIcon from 'public/assets/vector-icons/play-icon.svg'
import { Button } from '@mui/material'

interface Props {
	image: string
	url: string
}

export const PlayDemoBox: React.FC<Props> = ({ image, url }) => {
	return (
		<Button className='play-demo-content' onClick={() => window.open(url, '_blank')} title={url}>
			<img className='play-demo-bg' src={image} alt={`play-demo - ${image}`} />
			<div className='play-demo-box'>
				<PlayIcon />
				<span>PLAY DEMO</span>
			</div>
		</Button>
	)
}
