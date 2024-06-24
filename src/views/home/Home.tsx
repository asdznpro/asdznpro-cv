import * as React from 'react'

import { useAppSelector, useDocumentHead, useDynamicAlignment } from 'hooks'
import { selectLanguage } from 'store'

import styles from './Home.module.scss'

import { CvLinkItem } from 'components/shared'
import {
	Avatar,
	Box,
	Section,
	Heading,
	Tile,
	List,
	Footnote,
	Fontbody,
} from 'components/ui'

const Home = () => {
	const language = useAppSelector(selectLanguage)
	const { screenWidth } = useDynamicAlignment()

	useDocumentHead(language)

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
						<Tile className="ui-justify-content-center">
							<Box YPadding>
								<Avatar
									className="ui-mx-auto"
									src={storeAboutData.data.photo}
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
							<Box YPadding className="ui-h-full">
								<Heading level={3} className="ui-text-uppercase">
									{storeAboutData.data.possibleJobs.title}
								</Heading>

								<List className="ui-fontbody-level-1">
									{storeAboutData.data.possibleJobs.list.map((item, index) => (
										<List.Item key={index}>{item}</List.Item>
									))}
								</List>

								<Footnote className="ui-text-secondary ui-mt-auto">
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
						<Tile>
							<Box YPadding>
								<Avatar.Skeleton className="ui-mx-auto" />

								<div className="ui-flex ui-flex-col ui-items-center ui-gap-4-px">
									<Heading.Skeleton level={3} className="ui-w-84-pct" />
									<Heading.Skeleton level={3} className="ui-w-56-pct" />
								</div>
							</Box>
						</Tile>

						<Tile>
							<Box YPadding className="ui-h-full">
								<div className="ui-flex ui-flex-col ui-gap-4-px">
									<Heading.Skeleton level={3} className="ui-w-72-pct" />
									<Heading.Skeleton level={3} className="ui-w-60-pct" />
								</div>

								<div className="ui-flex ui-flex-col ui-gap-4-px">
									<Fontbody.Skeleton level={2} />
									<Fontbody.Skeleton level={2} />
									<Fontbody.Skeleton level={2} className="ui-w-92-pct" />
								</div>

								<Footnote.Skeleton className="ui-mt-auto ui-w-84-pct" />
							</Box>
						</Tile>
					</div>
				)}
			</Section>

			<Section>
				<Box>
					{storeCvMapData ? (
						<Heading level={2} className="ui-text-uppercase ui-mb-12-px">
							{language.lang === 'en' ? 'CV' : 'Резюме'}
						</Heading>
					) : (
						<Heading.Skeleton
							level={2}
							className="ui-w-40-pct"
							style={{
								minWidth: '240px',
							}}
						/>
					)}
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
