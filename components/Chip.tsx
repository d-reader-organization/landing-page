import React from 'react'
import clsx from 'clsx'

interface Props {
	backgroundColor?: 'light-blue' | 'light-yellow' | 'light-green' | 'light-blue' | 'white'
	text: string
}

export const Chip: React.FC<Props> = ({ backgroundColor = 'white', text }) => {
	return (
		<button
			className={clsx('button-chip', {
				'button-chip--background-color-white': backgroundColor === 'white',
				'button-chip--background-color-light-blue': backgroundColor === 'light-blue',
				'button-chip--background-color-light-yellow': backgroundColor === 'light-yellow',
				'button-chip--background-color-light-green': backgroundColor === 'light-green',
			})}
		>
			{text}
		</button>
	)
}
