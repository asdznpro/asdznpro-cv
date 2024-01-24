import { useDocumentTitle } from 'hooks'

import styles from './Home.module.scss'

import { Layout } from 'components/layout'
import {
	Fontbody,
	Section,
	SectionGroup,
	Button,
	Heading,
	Box,
	Tile,
} from 'components/ui'
import { CvLinkItem } from 'components/shared'

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

			<SectionGroup gap='sm'>
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
								обо мне
							</Heading>
						</CvLinkItem>
						<CvLinkItem to='/experience'>
							<Heading level={3} wideLevel={2}>
								опыт работы
							</Heading>
						</CvLinkItem>
						<CvLinkItem to='/portfolio'>
							<Heading level={3} wideLevel={2}>
								портфолио
							</Heading>
						</CvLinkItem>
						<CvLinkItem to='/hard-skills'>
							<Heading level={3} wideLevel={2}>
								проф. навыки
							</Heading>
						</CvLinkItem>
						<CvLinkItem to='/education'>
							<Heading level={3} wideLevel={2}>
								образование
							</Heading>
						</CvLinkItem>
						<CvLinkItem to='/contacts'>
							<Heading level={3} wideLevel={2}>
								Контакты
							</Heading>
						</CvLinkItem>
					</div>
				</Section>
			</SectionGroup>
		</Layout>
	)
}

export { Home }
