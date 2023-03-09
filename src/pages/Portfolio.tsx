import React, { useEffect } from 'react'

import { Header } from '../components/Header'
import { OverlayButton } from '../components/Buttons/OverlayButton'
import { Footer } from '../components/Footer'
import { SectionStack } from '../components/SectionStack'
import { Section } from '../components/SectionStack/Section'
import { Title } from '../components/SectionStack/Section/Title'

function Portfolio() {
	useEffect(() => {
		document.title = 'Портфолио // Curriculum Vitae'
	}, [])

	return (
		<>
			<Header />
			<OverlayButton />

			<main className='pageTemplate-content'>
				<SectionStack>
					<Section backgroundColor='blue'>
						<Title className='text-white'>
							<h1>Portfolio</h1>
						</Title>
					</Section>
				</SectionStack>
				<Footer />
			</main>
		</>
	)
}

export default Portfolio
