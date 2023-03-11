import React from 'react'
import { Box, BoxProps, Typography, Hidden, Slide } from '@mui/material'
import HeroImage1 from 'public/assets/hero-1.png'
import HeroImage2 from 'public/assets/hero-2.png'
import HeroImage3 from 'public/assets/hero-3.png'
import HeroImage4 from 'public/assets/hero-4.png'
import HeroImage5 from 'public/assets/hero-5.png'
import Image from 'next/image'
import clsx from 'clsx'

interface Props extends BoxProps {
	animate: boolean
	observationRef: BoxProps['ref']
}

const HeroSection: React.FC<Props> = ({ animate = false, observationRef, ...props }) => {
	return (
		<Box id='hero' component='section' {...props}>
			<Typography component='h1' variant='h2' className='title'>
				Hop into the future
				<br />
				of comic industry!
			</Typography>
			<Hidden mdDown>
				<Typography className='text'>
					Discover, trade, collect, and read digital comics.
					<br />
					<a className='text--underline text--important' href='#newsletter'>
						Join the waitlist
					</a>
					&nbsp;for early access!
				</Typography>
			</Hidden>
			<Box className='hero-image-wrapper'>
				<Box
					position='absolute'
					zIndex={-100}
					top={0}
					left={0}
					right={0}
					bottom={0}
					margin='auto'
					width='100%'
					height={{
						xs: `calc(100% - ${100}px)`,
						sm: `calc(100% - ${120}px)`,
						md: `calc(100% - ${320}px)`,
						lg: `calc(100% - ${320}px)`,
					}}
					ref={observationRef}
				/>

				<div className={clsx('hero-gradient', animate ? 'visible' : '')} />
				<Slide in={animate} direction='up' timeout={{ enter: 1800 }}>
					<Image src={HeroImage1} alt='' sizes='(max-width: 900px) 100vw' className='hero-image hero-image--1' />
				</Slide>
				<Slide in={animate} direction='up' timeout={{ enter: 2500 }}>
					<Image src={HeroImage2} alt='' sizes='(max-width: 900px) 100vw' className='hero-image hero-image--2' />
				</Slide>
				<Slide in={animate} direction='up' timeout={{ enter: 1700 }}>
					<Image src={HeroImage3} alt='' sizes='(max-width: 900px) 100vw' className='hero-image hero-image--3' />
				</Slide>
				<Slide in={animate} direction='up' timeout={{ enter: 2100 }}>
					<Image src={HeroImage4} alt='' sizes='(max-width: 900px) 100vw' className='hero-image hero-image--4' />
				</Slide>
				<Slide in={animate} direction='up' timeout={{ enter: 2500 }}>
					<Image src={HeroImage5} alt='' sizes='(max-width: 900px) 100vw' className='hero-image hero-image--5' />
				</Slide>
			</Box>
			<Hidden mdUp>
				<Typography className='text'>
					All-in-one app removing obstacles from digital collectibles for indie creators, publishers, brands, and
					projects.
				</Typography>
			</Hidden>
		</Box>
	)
}

export default HeroSection
