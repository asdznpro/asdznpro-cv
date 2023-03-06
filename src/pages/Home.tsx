import React, { useEffect } from 'react'

import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { OverlayButton } from '../components/OverlayButton'
import { Footer } from '../components/Footer'
import { SectionStack } from '../components/SectionStack'
import { Section } from '../components/SectionStack/Section'
import { Title } from '../components/SectionStack/Section/Title'
import { ContactList } from '../components/ContactList'
import { ContactItem } from '../components/ContactList/ContactItem'

import { IconLogoTpuColor } from '../components/Icons/IconLogoTpuColor'
import { IconLogoMgtv } from '../components/Icons/IconLogoMgtv'
import { IconLogoEml } from '../components/Icons/IconLogoEml'
import { IconLogoWarface } from '../components/Icons/IconLogoWarface'
import { IconLogoMybonus } from '../components/Icons/IconLogoMybonus'
import { IconLogoNsa } from '../components/Icons/IconLogoNsa'
import { IconLogoTatneft } from '../components/Icons/IconLogoTatneft'
import { IconLogoReact } from '../components/Icons/IconLogoReact'
import { IconLogoReactColor } from '../components/Icons/IconLogoReactColor'
import { IconLogoFigma } from '../components/Icons/IconLogoFigma'
import { IconLogoGit } from '../components/Icons/IconLogoGit'
import { IconLogoCinema } from '../components/Icons/IconLogoCinema'
import { IconLogoIllustrator } from '../components/Icons/IconLogoIllustrator'
import { IconLogoPhotoshop } from '../components/Icons/IconLogoPhotoshop'
import { IconLogoJavaScript } from '../components/Icons/IconLogoJavaScript'
import { IconLogoTypeScript } from '../components/Icons/IconLogoTypeScript'
import { IconLogoPremiere } from '../components/Icons/IconLogoPremiere'
import { IconLogoAfterEffects } from '../components/Icons/IconLogoAfterEffects'
import { IconLogoVsCode } from '../components/Icons/IconLogoVsCode'
import { IconLogoTailwindCss } from '../components/Icons/IconLogoTailwindCss'
import { IconLogoRedShift } from '../components/Icons/IconLogoRedShift'

function Home() {
	useEffect(() => {
		document.title = 'Андрей Сухушин // Curriculum Vitae'
	}, [])

	return (
		<>
			<main className='pageTemplate-content'>
				<Header />
				<OverlayButton />

				<SectionStack>
					<Section backgroundColor='white'>
						<Title>
							<h1>Buttons</h1>
							<div className='button-wrapper'>
								<Button text='Primary' state='primary' link='/portfolio' />
								<Button text='Secondary' state='secondary' />
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
							<h1>Icons</h1>
						</Title>
						<div className='icons-wrapper'>
							<IconLogoTpuColor width={64} height={64} />
							<IconLogoEml width={64} height={64} />
							<IconLogoNsa width={64} height={64} />
							<IconLogoWarface width={64} height={64} />
							<IconLogoMgtv width={64} height={64} />
							<IconLogoMybonus width={64} height={64} />
							<IconLogoTatneft width={64} height={64} />
							<IconLogoFigma width={64} height={64} />
							<IconLogoIllustrator width={64} height={64} />
							<IconLogoPhotoshop width={64} height={64} />
							<IconLogoPremiere width={64} height={64} />
							<IconLogoAfterEffects width={64} height={64} />
							<IconLogoVsCode width={64} height={64} />
							<IconLogoGit width={64} height={64} />
							<IconLogoReact width={64} height={64} />
							<IconLogoReactColor width={64} height={64} />
							<IconLogoJavaScript width={64} height={64} />
							<IconLogoTypeScript width={64} height={64} />
							<IconLogoTailwindCss width={64} height={64} />
							<IconLogoCinema width={64} height={64} />
							<IconLogoRedShift width={64} height={64} />
						</div>
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
						<ContactList>
							<ContactItem
								link='https://t.me/asdznpro'
								social='telegram'
								aspectRatio={1}
								gridColumn={3}
							/>
							<ContactItem
								// link='mailto:asdznpro@vk.com'
								link='mailto:hi@asdzn.pro'
								social='vk-mail'
								aspectRatio={1}
								gridColumn={3}
							/>
							<ContactItem
								link='https://vk.com/asdznpro'
								social='vk'
								gridColumn={6}
							/>
						</ContactList>
					</Section>
				</SectionStack>

				<Footer />
			</main>
		</>
	)
}

export default Home
