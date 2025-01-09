import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	asLink?: boolean
	backgroundColor?: 'yellow' | 'green' | 'grey' | 'blue'
	href?: string
	text?: string
}

export const Button: React.FC<Props> = ({
	asLink = false,
	backgroundColor = 'yellow',
	children,
	href,
	text,
	...props
}) => {
	return asLink ? (
		<Link
			href={href ?? ''}
			className={clsx('button', {
				'button--background-color-yellow ': backgroundColor === 'yellow',
				'button--background-color-green ': backgroundColor === 'green',
				'button--background-color-grey ': backgroundColor === 'grey',
				'button--background-color-blue ': backgroundColor === 'blue',
			})}
			target='_blank'
		>
			{text}
			{children}
		</Link>
	) : (
		<button
			className={clsx('button', {
				'button--background-color-yellow ': backgroundColor === 'yellow',
				'button--background-color-green ': backgroundColor === 'green',
				'button--background-color-grey ': backgroundColor === 'grey',
				'button--background-color-blue ': backgroundColor === 'blue',
			})}
			{...props}
		>
			{text}
			{children}
		</button>
	)
}
