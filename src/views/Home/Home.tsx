import * as React from 'react'

import { useAppSelector, useDocumentTitle, useDynamicAlignment } from 'hooks'
import { selectLanguage } from 'store'

import styles from './Home.module.scss'

import { ParallaxText } from './ParallaxText'
import { CvLinkItem } from 'components/shared'
import {
	Avatar,
	Box,
	Section,
	Heading,
	Tile,
	Spinner,
	ListComponent,
	Footnote,
} from 'components/ui'

const Home = () => {
	const language = useAppSelector(selectLanguage)
	const { screenWidth } = useDynamicAlignment()

	useDocumentTitle('', language)

	const storeAboutData = useAppSelector(state => state.common.about)
	const storeCvMapData = useAppSelector(state => state.common.cvMap)
	const storePortfolioData = useAppSelector(state => state.common.portfolio)

	return (
		<React.Fragment>
			<Section>
				{/* <Tile className={styles.warning}>
					<Box YPadding>
						<ParallaxText baseVelocity={8}>
							{language === 'en' ? 'In development' : 'В разработке'}
						</ParallaxText>
					</Box>
				</Tile> */}

				{storeAboutData ? (
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
							gap: 'clamp(8px, 1vmax, 20px)',
						}}
					>
						<Tile
							style={{
								justifyContent: 'center',
							}}
						>
							<Box
								YPadding
								style={{
									alignItems: 'center',
									// flexFlow: screenWidth >= 748 ? 'row' : '',
								}}
							>
								<Avatar
									image='https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/about/me.png'
									name={storeAboutData.data.fullName
										.split(' ')
										.map(name => name.charAt(0))
										.join('')}
								/>

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
							gap: 'clamp(8px, 1vmax, 20px)',
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
												filter: 'blur(4px)',
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
		</React.Fragment>
	)
}

export { Home }
