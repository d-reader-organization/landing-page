import React from 'react'
import PlayIcon from 'public/assets/vector-icons/play-icon.svg'

import Link from 'next/link'

interface Props {
	image: string
	link: string
}

export const PlayDemoBox: React.FC<Props> = ({ image, link }) => {
	return (
		<Link className='play-demo-content' href={link} target='_blank'>
			<img className='play-demo-bg' src={image} alt={`play-demo - ${image}`} />
			<div className='play-demo-box'>
				<PlayIcon />
				<span>PLAY DEMO</span>
			</div>
		</Link>
	)
}
