import React, { useEffect } from 'react'

import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'

function Home() {
	useEffect(() => {
		document.title = 'Андрей Сухушин // Curriculum Vitae'
	}, [])

	return (
		<>
			<main className='pageTemplate-content'>
				<Header />

				<div className='sectionStack-root'>
					<section className='section-root pageTemplate-container'>
						<div className='section-inner'>
							<div className='title-root'>
								<h1>Портфолио</h1>
								<h3>
									Но глубокий уровень погружения требует определения и уточнения
									системы массового участия. Однозначно, некоторые особенности
									внутренней политики объединены в целые кластеры себе подобных.
								</h3>
							</div>
						</div>
					</section>

					{/* <section className='section-root pageTemplate-container'>
						<h1 className='text-orange'>Портфолио</h1>
						<h1 className='text-l-orange'>Портфолио</h1>
						<h1 className='text-yellow'>Портфолио</h1>
						<h1 className='text-l-green'>Портфолио</h1>
						<h1 className='text-green'>Портфолио</h1>
						<h1 className='text-cyan'>Портфолио</h1>
						<h1 className='text-blue'>Портфолио</h1>
						<h1 className='text-violet'>Портфолио</h1>
						<h1 className='text-purple'>Портфолио</h1>
						<h1 className='text-pink'>Портфолио</h1>
						<h1>Header H1</h1>
						<h2>Header H2</h2>
						<h3>
							Но глубокий уровень погружения требует определения и уточнения
							системы массового участия. Однозначно, некоторые особенности
							внутренней политики объединены в целые кластеры себе подобных.
						</h3>
						<h3 className='text-dark'>Header H3</h3>
						<h4>Header H4</h4>
						<h5>Header H5</h5>
						<h6>Header H6</h6>
					</section> */}
				</div>

				<Footer />
			</main>
		</>
	)
}

export default Home
