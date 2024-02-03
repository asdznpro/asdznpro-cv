import { useAppSelector, useDocumentTitle } from 'hooks'

import styles from './Home.module.scss'

import { Layout } from 'components/layout'
import { CvLinkItem } from 'components/shared'
import {
	Section,
	Heading,
	Box,
	Tile,
	Spinner,
	ListComponent,
	Footnote,
} from 'components/ui'

const Home = () => {
	useDocumentTitle('')

	const storeCvMapData = useAppSelector(state => state.common.cvMap)

	return (
		<Layout paddingTop='sm'>
			<Section>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
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
								Андрей{'\n'}Сухушин
							</Heading>
						</Box>
					</Tile>

					<Tile>
						<Box YPadding style={{ height: '100%' }}>
							<Heading level={3}>Возможные должности</Heading>

							<ListComponent
								typeList='ul'
								content={[
									'Фронтенд-разработчик (React)',
									'UX/UI дизайнер',
									'Графический дизайнер',
								]}
							/>

							<Footnote secondary style={{ marginTop: 'auto' }}>
								*расположены в порядке приоритетности
							</Footnote>
						</Box>
					</Tile>
				</div>
			</Section>

			<Section>
				<Box>
					<Heading level={2}>Резюме</Heading>
				</Box>

				{storeCvMapData ? (
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							gap: 'clamp(8px, 1.2vw, 20px)',
						}}
					>
						{storeCvMapData.data.map((item, index) => (
							<CvLinkItem key={index} to={'/' + item.pathname}>
								<Heading level={3} wideLevel={2}>
									{item.name}
								</Heading>
							</CvLinkItem>
						))}
					</div>
				) : (
					<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
				)}
			</Section>
		</Layout>
	)
}

export { Home }
