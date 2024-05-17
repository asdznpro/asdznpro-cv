import * as React from 'react'

import { useAppSelector, useDocumentTitle, useDynamicAlignment } from 'hooks'
import { selectLanguage } from 'store'

import styles from './Home.module.scss'

import { CvLinkItem } from 'components/shared'
import {
	Avatar,
	Box,
	Section,
	Heading,
	Tile,
	ListComponent,
	Footnote,
	Fontbody,
} from 'components/ui'

const Home = () => {
	const language = useAppSelector(selectLanguage)
	const { screenWidth } = useDynamicAlignment()

	useDocumentTitle('', language.lang)

	const storeAboutData = useAppSelector((state) => state.common.about)
	const storeCvMapData = useAppSelector((state) => state.common.cvMap)
	const storePortfolioData = useAppSelector((state) => state.common.portfolio)

	return (
		<React.Fragment>
			<Section>
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
									src="https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/about/me.png"
									name={storeAboutData.data.fullName
										.split(' ')
										.map((name) => name.charAt(0))
										.join('')}
								/>

								<Heading level={3} className="ui-text-uppercase ui-text-center">
									{storeAboutData.data.firstName +
										'\n' +
										storeAboutData.data.lastName}
								</Heading>
							</Box>
						</Tile>

						<Tile>
							<Box YPadding style={{ height: '100%' }}>
								<Heading level={3} className="ui-text-uppercase">
									{storeAboutData.data.possibleJobs.title}
								</Heading>

								<ListComponent
									typeList="ul"
									listContent={storeAboutData.data.possibleJobs.list}
								/>

								<Footnote
									className="ui-text-secondary"
									style={{ marginTop: 'auto' }}
								>
									{storeAboutData.data.possibleJobs.caption}
								</Footnote>
							</Box>
						</Tile>
					</div>
				) : (
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
							<Box YPadding>
								<Avatar.Skeleton
									style={{
										margin: '0 auto',
									}}
								/>

								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										gap: 6,
									}}
								>
									<Heading.Skeleton
										level={3}
										style={{
											width: '84%',
										}}
									/>
									<Heading.Skeleton
										level={3}
										style={{
											width: '60%',
										}}
									/>
								</div>
							</Box>
						</Tile>

						<Tile>
							<Box YPadding style={{ height: '100%' }}>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										gap: 6,
									}}
								>
									<Heading.Skeleton
										level={3}
										style={{
											width: '72%',
										}}
									/>
									<Heading.Skeleton
										level={3}
										style={{
											width: '60%',
										}}
									/>
								</div>

								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										gap: 6,
									}}
								>
									<Fontbody.Skeleton level={2} />
									<Fontbody.Skeleton level={2} />
									<Fontbody.Skeleton
										level={2}
										style={{
											width: '92%',
										}}
									/>
								</div>

								<Footnote.Skeleton
									style={{
										marginTop: 'auto',
										width: '84%',
									}}
								/>
							</Box>
						</Tile>
					</div>
				)}
			</Section>

			<Section>
				<Box>
					{storeCvMapData ? (
						<Heading level={2} className="ui-text-uppercase">
							{language.lang === 'en' ? 'CV' : 'Резюме'}
						</Heading>
					) : (
						<Heading.Skeleton
							level={2}
							style={{
								width: '36%',
								minWidth: '240px',
							}}
						/>
					)}
				</Box>

				<span />

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
								<Heading level={3} wideLevel={2} className="ui-text-uppercase">
									{item.name}
								</Heading>
							</CvLinkItem>
						))}
					</div>
				) : (
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							gap: 'clamp(8px, 1vmax, 20px)',
						}}
					>
						{[...Array(6)].map((_, index) => (
							<CvLinkItem.Skeleton key={index} />
						))}
					</div>
				)}
			</Section>
		</React.Fragment>
	)
}

export { Home }
