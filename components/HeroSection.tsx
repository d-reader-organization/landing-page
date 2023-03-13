import React from 'react'
import { Box, BoxProps, Typography, Hidden, Slide, Fade } from '@mui/material'
import ComingSoonImage from 'public/assets/coming-soon.png'
import HeroImage1 from 'public/assets/hero-1.png'
import HeroImage2 from 'public/assets/hero-2.png'
import HeroImage3 from 'public/assets/hero-3.png'
import HeroImage4 from 'public/assets/hero-4.png'
import HeroImage5 from 'public/assets/hero-5.png'
import { useToggle } from 'hooks'
import Image from 'next/image'
import clsx from 'clsx'

interface Props extends BoxProps {
	animate: boolean
	observationRef: BoxProps['ref']
}

// God forgive me for this ugly component
const HeroSection: React.FC<Props> = ({ animate = false, observationRef, ...props }) => {
	const [floatImage1, toggleFloat1] = useToggle()
	const [floatImage2, toggleFloat2] = useToggle()
	const [floatImage4, toggleFloat4] = useToggle()
	const [floatImage5, toggleFloat5] = useToggle()

	return (
		<Box id='hero' component='section' {...props}>
			<Typography component='h1' variant='h2' className='title'>
				Hop into the future
				<br />
				of the comics industry!
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
				<Slide in={animate} direction='up' timeout={{ enter: 1800 }} onEntered={toggleFloat1}>
					<Image
						priority
						src={HeroImage1}
						alt=''
						height={124}
						width={133}
						className={clsx('hero-image', 'hero-image--1', floatImage1 ? 'hero-image--1_animate' : '')}
					/>
				</Slide>
				<Slide in={animate} direction='up' timeout={{ enter: 2500 }} onEntered={toggleFloat2}>
					<Image
						// priority
						src={HeroImage2}
						alt=''
						height={361}
						width={381}
						className={clsx('hero-image', 'hero-image--2', floatImage2 ? 'hero-image--2_animate' : '')}
					/>
				</Slide>
				<Slide in={animate} direction='up' timeout={{ enter: 1700 }}>
					<Image
						// priority
						src={HeroImage3}
						alt=''
						height={889}
						width={482}
						className={clsx('hero-image', 'hero-image--3')}
					/>
				</Slide>
				<Slide in={animate} direction='up' timeout={{ enter: 2100 }} onEntered={toggleFloat4}>
					<Image
						priority
						src={HeroImage4}
						alt=''
						height={290}
						width={398}
						className={clsx('hero-image', 'hero-image--4', floatImage4 ? 'hero-image--4_animate' : '')}
					/>
				</Slide>
				<Slide in={animate} direction='up' timeout={{ enter: 2500 }} onEntered={toggleFloat5}>
					<Image
						priority
						src={HeroImage5}
						alt=''
						height={390}
						width={311}
						className={clsx('hero-image', 'hero-image--5', floatImage5 ? 'hero-image--5_animate' : '')}
					/>
				</Slide>
			</Box>
			<Hidden mdUp>
				<Typography className='text'>
					Discover, trade, collect, and read digital comics.&nbsp;
					<a className='text--underline text--important' href='#newsletter'>
						Join the waitlist
					</a>
					&nbsp;for early access!
				</Typography>
			</Hidden>
			<Fade in={animate} timeout={{ enter: 3000 }}>
				<Image src={ComingSoonImage} alt='' height={246} width={854} className='image--coming-soon' />
			</Fade>
		</Box>
	)
}

export default HeroSection
