import { useDocumentTitle } from 'hooks'

import styles from './Home.module.scss'

import { Layout } from 'components/layout'
import { CvLinkItem } from 'components/shared'
import { Section, Heading, Box, Tile } from 'components/ui'

const Home = () => {
	useDocumentTitle('Андрей Сухушин // Curriculum Vitae')

	return (
		<Layout paddingTop='sm'>
			<Section>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
						gap: 'clamp(8px, 1.2vw, 20px)',
					}}
				>
					<Tile>
						<Box YPadding>
							<Heading
								level={3}
								style={{
									textAlign: 'center',
								}}
							>
								Андрей {'\n'} Сухушин
							</Heading>
						</Box>
					</Tile>

					<Tile>
						<Box YPadding>
							<Heading level={3}>Возможные должности</Heading>
						</Box>
					</Tile>
				</div>
			</Section>

			<Section>
				<Box>
					<Heading level={2}>Резюме</Heading>
				</Box>

				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: 'clamp(8px, 1.2vw, 20px)',
					}}
				>
					<CvLinkItem to='/about'>
						<Heading level={3} wideLevel={2}>
							Обо мне
						</Heading>
					</CvLinkItem>
					<CvLinkItem to='/experience'>
						<Heading level={3} wideLevel={2}>
							Опыт работы
						</Heading>
					</CvLinkItem>
					<CvLinkItem to='/portfolio'>
						<Heading level={3} wideLevel={2}>
							Портфолио
						</Heading>
					</CvLinkItem>
					<CvLinkItem to='/hard-skills'>
						<Heading level={3} wideLevel={2}>
							Проф. навыки
						</Heading>
					</CvLinkItem>
					<CvLinkItem to='/education'>
						<Heading level={3} wideLevel={2}>
							Образование
						</Heading>
					</CvLinkItem>
					<CvLinkItem to='/contacts'>
						<Heading level={3} wideLevel={2}>
							Контакты
						</Heading>
					</CvLinkItem>
				</div>
			</Section>
		</Layout>
	)
}

export { Home }
