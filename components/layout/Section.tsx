import React, { useRef } from 'react'
import { ContainerProps, Typography, Container, Grid, Box, Fade, Hidden } from '@mui/material'
import Image, { ImageProps } from 'next/image'
import clsx from 'clsx'

interface Props extends ContainerProps {
	title: string
	text: string
	icon: React.ReactNode
	reverse?: boolean
	animate: boolean
	src: ImageProps['src']
	backgroundImage?: React.ReactNode
	observationRef: ContainerProps['ref']
}

const Section: React.FC<Props> = ({
	title,
	className,
	text,
	icon,
	reverse = false,
	animate = false,
	observationRef,
	src,
	backgroundImage,
	...props
}) => {
	const containerRef = useRef(null)

	return (
		<Container maxWidth='lg' component='section' className={clsx('section', className)} ref={observationRef} {...props}>
			<Grid
				container
				spacing={2}
				ref={containerRef}
				flexDirection={{ xs: 'column-reverse', md: reverse ? 'row-reverse' : 'row' }}
			>
				<Grid item xs={12} md={6} position='relative' textAlign={{ xs: 'center', md: reverse ? 'left' : 'right' }}>
					<Fade in={animate} timeout={2000}>
						<div>
							<div className='section-image-wrapper'>
								<Image src={src} alt='' sizes='(max-width: 900px) 100vw,60vw' className='section-image' />
								{backgroundImage}
							</div>
							<Hidden mdUp>
								<Box className='section-content'>
									<Typography mt={2} className='section-text'>
										{text}
									</Typography>
								</Box>
							</Hidden>
						</div>
					</Fade>
				</Grid>
				<Grid item xs={12} md={6} className='section-content-wrapper'>
					<Fade in={animate} timeout={2000}>
						<Box className='section-content'>
							{icon}
							<Typography component='h1' variant='h3' className='section-title'>
								{title}
							</Typography>
							<Hidden mdDown>
								<Typography className='section-text'>{text}</Typography>
							</Hidden>
						</Box>
					</Fade>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Section
