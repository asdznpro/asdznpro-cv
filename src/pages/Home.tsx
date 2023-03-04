import React, { useEffect } from 'react'

import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { OverlayButton } from '../components/OverlayButton'
import { Footer } from '../components/Footer'
import { Section } from '../components/Section'
import { Title } from '../components/Section/Title'

function Home() {
	useEffect(() => {
		document.title = 'Андрей Сухушин // Curriculum Vitae'
	}, [])

	return (
		<>
			<main className='pageTemplate-content'>
				<Header />
				<OverlayButton />

				<div className='sectionStack'>
					<Section backgroundColor='white'>
						<Title>
							<h1>Buttons</h1>
							<div className='button-wrapper'>
								<Button text='Primary' state='primary' link='/portfolio' />
								<Button text='Secondary' state='secondary' disabled />
								<Button text='Black' state='black' />
								<Button text='White' state='white' />
							</div>
							<div className='button-wrapper'>
								<Button text='Primary' state='primary' className='rounded' />
								<Button
									text='Secondary'
									state='secondary'
									className='rounded'
									disabled
								/>
								<Button
									text='Black'
									state='black'
									className='rounded'
									disabled
								/>
								<Button text='White' state='white' className='rounded' />
							</div>
						</Title>
					</Section>
					<Section backgroundColor='white'>
						<Title>
							<h1>Андрей сухушин</h1>
							<h3>
								Но глубокий уровень погружения требует определения и уточнения
								системы массового участия. Однозначно, некоторые особенности
								внутренней политики объединены в целые кластеры себе подобных.
							</h3>
							<h3>
								Но глубокий уровень погружения требует определения и уточнения
								системы массового участия. Однозначно, некоторые особенности
								внутренней политики объединены в целые кластеры себе подобных.
							</h3>
							<h3>
								Но глубокий уровень погружения требует определения и уточнения
								системы массового участия. Однозначно, некоторые особенности
								внутренней политики объединены в целые кластеры себе подобных.
							</h3>
						</Title>
					</Section>
					<Section backgroundColor='white'>
						<Title>
							<h1>Опыт работы</h1>
							<h3>
								Но глубокий уровень погружения требует определения и уточнения
								системы массового участия. Однозначно, некоторые особенности
								внутренней политики объединены в целые кластеры себе подобных.
							</h3>
						</Title>
					</Section>
					<Section backgroundColor='blue'>
						<Title className='text-white'>
							<h1>Портфолио</h1>
						</Title>
					</Section>
					<Section backgroundColor='white'>
						<Title>
							<h1>Профессиональные навыки</h1>
						</Title>
					</Section>
					<Section backgroundColor='white'>
						<Title>
							<h1>Образование</h1>
							<h3>
								Но глубокий уровень погружения требует определения и уточнения
								системы массового участия. Однозначно, некоторые особенности
								внутренней политики объединены в целые кластеры себе подобных.
							</h3>
						</Title>
					</Section>
					<Section>
						<Title>
							<h1>Контакты</h1>
						</Title>
					</Section>
				</div>

				<Footer />
			</main>
		</>
	)
}

export default Home
