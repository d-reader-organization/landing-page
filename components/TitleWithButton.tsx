import React from 'react'
import { Chip } from './Chip'

interface Props {
	buttonBackgroundColor?: 'light-blue' | 'light-yellow' | 'light-green' | 'white'
	buttonText?: string
	title: string
}

export const TitleWithButton: React.FC<Props> = ({ buttonBackgroundColor, buttonText, title }) => {
	return (
		<div className='title-with-button'>
			<span className='title'>{title}</span>
			{buttonText && <Chip backgroundColor={buttonBackgroundColor} text={buttonText} />}
		</div>
	)
}
