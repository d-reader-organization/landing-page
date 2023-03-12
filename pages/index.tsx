import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import ChatSigningIcon from 'public/assets/vector-icons/chat-signing-icon.svg'
import DiamondIcon from 'public/assets/vector-icons/diamond-icon.svg'
import FundraisingImage from 'public/assets/fundraising.png'
import FundraisingModalImage from 'public/assets/fundraising-modal.png'
import ConditionsImage from 'public/assets/conditions.png'
import ChatImage from 'public/assets/chat.png'
import PigIcon from 'public/assets/vector-icons/pig-icon.svg'
import NewsletterSection from 'components/NewsletterSection'
import CreatorSection from 'components/CreatorSection'
import Navigation from 'components/layout/Navigation'
import HeroSection from 'components/HeroSection'
import Section from 'components/layout/Section'
import Footer from 'components/layout/Footer'
import Main from 'components/layout/Main'
import { useOnScreen } from 'hooks'
import Image from 'next/image'

const Home: NextPage = () => {
	const [animateHero, heroSectionRef] = useOnScreen()
	const [animateAudience, audienceSectionRef] = useOnScreen()
	const [animateFundraising, fundraisingSectionRef] = useOnScreen()
	const [animateCollecting, collectingSectionRef] = useOnScreen()
	const [animateCreators, creatorSectionRef] = useOnScreen()
	const [animateNewsletter, newsletterSectionRef] = useOnScreen()

	return (
		<Box className='content'>
			<Navigation />

			<Main className='main'>
				<HeroSection animate={animateHero} observationRef={heroSectionRef} />
				<Section
					id='audience'
					icon={<ChatSigningIcon />}
					title='Engage with your audience'
					text='Sign your copies and engage with fans in real-time, creating an immersive experience that will make them come back for more.					'
					animate={animateAudience}
					observationRef={audienceSectionRef}
					src={ChatImage}
					backgroundImage={
						<Image
							src='/assets/vector-icons/chat-background-icon.svg'
							alt=''
							sizes='80vw'
							width={1125}
							height={1270}
							className='background background--circle'
						/>
					}
				/>
				<Section
					id='fundraising'
					icon={<PigIcon />}
					title='Fund your future projects & ideas'
					text="Turn your creative dreams into reality with dReader's crowdfunding feature. Connect with your audience and raise funds for your next big project."
					animate={animateFundraising}
					observationRef={fundraisingSectionRef}
					src={FundraisingImage}
					backgroundImage={
						<Image
							src={FundraisingModalImage}
							alt=''
							sizes='50vw'
							width={407}
							height={331}
							className='background background--fundraising'
						/>
					}
					reverse
				/>
				<Section
					id='collecting'
					icon={<DiamondIcon />}
					title='Collect & store rare comics'
					text="Keep your comics in mint condition or see them change as you dive into the story. With the ability to get your comics signed by creators, you'll have a truly unique collecting experience!"
					animate={animateCollecting}
					observationRef={collectingSectionRef}
					src={ConditionsImage}
				/>
				<NewsletterSection animate={animateNewsletter} observationRef={newsletterSectionRef} />
				<CreatorSection animate={animateCreators} observationRef={creatorSectionRef} />
			</Main>

			<Footer animate={animateCreators} />
		</Box>
	)
}

export default Home
