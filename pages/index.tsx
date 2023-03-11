import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import NewsletterSection from 'components/NewsletterSection'
import CreatorSection from 'components/CreatorSection'
import Navigation from 'components/layout/Navigation'
import Footer from 'components/layout/Footer'
import Main from 'components/layout/Main'
import { useOnScreen } from 'hooks'

const Home: NextPage = () => {
	const [animateCreatorSection, creatorSectionRef] = useOnScreen()
	const [animateNewsletterSection, newsletterSectionRef] = useOnScreen()

	return (
		<Box className='content'>
			<Navigation />

			<Main className='main'>
				<NewsletterSection animate={animateNewsletterSection} observationRef={newsletterSectionRef} />
				<CreatorSection animate={animateCreatorSection} observationRef={creatorSectionRef} />
			</Main>

			<Footer animate={animateCreatorSection} />
		</Box>
	)
}

export default Home
