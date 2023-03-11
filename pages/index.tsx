import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import ChatSigningIcon from 'public/assets/vector-icons/chat-signing-icon.svg'
import DiamondIcon from 'public/assets/vector-icons/diamond-icon.svg'
import FundraisingImage from 'public/assets/fundraising.png'
import ConditionsImage from 'public/assets/conditions.png'
import ChatImage from 'public/assets/chat.png'
import PigIcon from 'public/assets/vector-icons/pig-icon.svg'
import NewsletterSection from 'components/NewsletterSection'
import CreatorSection from 'components/CreatorSection'
import Navigation from 'components/layout/Navigation'
import Section from 'components/layout/Section'
import Footer from 'components/layout/Footer'
import Main from 'components/layout/Main'
import { useOnScreen } from 'hooks'
import HeroSection from 'components/HeroSection'

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
					text='Sign your copies and engage with fans in real-time, creating an immersive experience that will make them come for more.					'
					animate={animateAudience}
					observationRef={audienceSectionRef}
					src={ChatImage}
				/>
				<Section
					id='fundraising'
					icon={<PigIcon />}
					title='Fund your future projects & ideas'
					text="Turn your creative dreams into reality with dReader's crowdfunding feature. Connect with your audience and raise funds for your next big project."
					animate={animateFundraising}
					observationRef={fundraisingSectionRef}
					src={FundraisingImage}
					reverse
				/>
				<Section
					id='collecting'
					icon={<DiamondIcon />}
					title='Rarity and comic conditions'
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
