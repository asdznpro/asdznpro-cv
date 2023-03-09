import React, { useEffect } from 'react'

import { Header } from '../components/Header'
import { OverlayButton } from '../components/Buttons/OverlayButton'
import { Footer } from '../components/Footer'
import { SectionStack } from '../components/SectionStack'
import { Section } from '../components/SectionStack/Section'
import { Title } from '../components/SectionStack/Section/Title'

function NotFound() {
	useEffect(() => {
		document.title = 'Страница не найдена // Curriculum Vitae'
	}, [])

	return (
		<>
			<Header />
			<OverlayButton />

			<main className='pageTemplate-content'>
				<SectionStack>
					<Section backgroundColor='white'>
						<Title>
							<h1>NotFound</h1>
						</Title>
					</Section>
				</SectionStack>
				<Footer />
			</main>
		</>
	)
}

export default NotFound
