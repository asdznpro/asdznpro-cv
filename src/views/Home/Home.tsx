import { useAppSelector, useDocumentTitle } from 'hooks'
import { selectLanguage } from 'store'

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
	const language = useAppSelector(selectLanguage)

	useDocumentTitle('', language)

	const storeAboutData = useAppSelector(state => state.common.about)
	const storeCvMapData = useAppSelector(state => state.common.cvMap)
	const storePortfolioData = useAppSelector(state => state.common.portfolio)

	return (
		<Layout paddingTop='sm'>
			<Section>
				{storeAboutData ? (
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
							gap: 'clamp(8px, 1.2vw, 20px)',
						}}
					>
						<Tile
							style={{
								justifyContent: 'center',
							}}
						>
							<Box YPadding>
								<Heading
									level={3}
									style={{
										textAlign: 'center',
									}}
								>
									{storeAboutData.data.firstName +
										'\n' +
										storeAboutData.data.lastName}
								</Heading>
							</Box>
						</Tile>

						<Tile>
							<Box YPadding style={{ height: '100%' }}>
								<Heading level={3}>
									{storeAboutData.data.possibleJobs.title}
								</Heading>

								<ListComponent
									typeList='ul'
									content={storeAboutData.data.possibleJobs.list}
								/>

								<Footnote secondary style={{ marginTop: 'auto' }}>
									{storeAboutData.data.possibleJobs.caption}
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
					<Heading level={2}>{language === 'en' ? 'CV' : 'Резюме'}</Heading>
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
							<CvLinkItem
								key={index}
								to={
									storePortfolioData &&
									storePortfolioData.data.length < 1 &&
									(item.name === 'Портфолио' || item.name === 'Portfolio')
										? ''
										: '/' + item.pathname
								}
								style={
									storePortfolioData &&
									storePortfolioData.data.length < 1 &&
									(item.name === 'Портфолио' || item.name === 'Portfolio')
										? {
												cursor: 'not-allowed',
												opacity: '64%',
										  }
										: undefined
								}
							>
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
