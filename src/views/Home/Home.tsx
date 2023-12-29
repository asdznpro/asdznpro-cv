import { useDocumentTitle } from 'hooks'

import styles from './Home.module.scss'

import { Layout } from 'components/layout'
import {
	Footnote,
	Fontbody,
	Section,
	SectionGroup,
	Button,
	Heading,
	Box,
	Tile,
} from 'components/ui'

const Home = () => {
	useDocumentTitle('Андрей Сухушин // Curriculum Vitae')

	return (
		<Layout paddingTop='sm'>
			<Section>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: 'clamp(8px, 1.2vw, 20px)',
					}}
				>
					<Tile>
						<Box YPadding>
							<div
								style={{
									display: 'flex',
									gap: 6,
									flexWrap: 'wrap',
								}}
							>
								<Button
									size='xsm'
									to='/about'
									mode='secondary'
									appearance='neutral'
								>
									#обо_мне
								</Button>

								<Button
									size='xsm'
									to='/experience'
									mode='secondary'
									appearance='neutral'
								>
									#опыт_работы
								</Button>

								<Button
									size='xsm'
									to='/portfolio'
									mode='secondary'
									appearance='neutral'
								>
									#портфолио
								</Button>
							</div>
						</Box>
					</Tile>
					<Tile>
						<Box YPadding>
							<div
								style={{
									display: 'flex',
									gap: 6,
									flexWrap: 'wrap',
								}}
							>
								<Button
									size='xsm'
									to='/hard-skills'
									mode='secondary'
									appearance='neutral'
								>
									#проф_навыки
								</Button>

								<Button
									size='xsm'
									to='/education'
									mode='secondary'
									appearance='neutral'
								>
									#образование
								</Button>

								<Button
									size='xsm'
									to='/contacts'
									mode='secondary'
									appearance='neutral'
								>
									#контакты
								</Button>
							</div>
						</Box>
					</Tile>
				</div>
			</Section>

			<SectionGroup gap='sm'>
				<Section>
					<Box>
						<Heading level={2}>Резюме</Heading>
					</Box>

					<Tile>
						<Box YPadding>
							Сложно сказать, почему представители современных социальных
							резервов освещают чрезвычайно интересные особенности картины в
							целом, однако конкретные выводы, разумеется, превращены в
							посмешище, хотя само их существование приносит несомненную пользу
							обществу.
						</Box>
					</Tile>
				</Section>
			</SectionGroup>
		</Layout>
	)
}

export { Home }
