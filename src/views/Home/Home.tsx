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
	const storePersonalData = useAppSelector(state => state.common.personal)

	return (
		<Layout paddingTop='sm'>
			<Section>
				{storePersonalData ? (
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
									{storePersonalData.data.firstName +
										'\n' +
										storePersonalData.data.lastName}
								</Heading>
							</Box>
						</Tile>

						<Tile>
							<Box YPadding style={{ height: '100%' }}>
								<Heading level={3}>
									{storePersonalData.data.possibleJobs.title}
								</Heading>

								<ListComponent
									typeList='ul'
									content={storePersonalData.data.possibleJobs.list}
								/>

								<Footnote secondary style={{ marginTop: 'auto' }}>
									{storePersonalData.data.possibleJobs.caption}
								</Footnote>
							</Box>
						</Tile>
					</div>
				) : (
					<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
				)}
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
