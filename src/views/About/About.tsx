import { useDocumentTitle, useAppSelector } from 'hooks'
import { selectTheme } from 'store/ThemeSlice'

import styles from './About.module.scss'

import { Layout } from 'components/layout'
import { BriefInfoBox, BriefInfoItem } from 'components/shared'
import {
	Fontbody,
	Section,
	PageTitle,
	Breadcrumbs,
	Spinner,
	PageNavigation,
	Box,
	Tile,
} from 'components/ui'

const About = () => {
	const theme = useAppSelector(selectTheme)
	const storePersonalData = useAppSelector(state => state.common.personal)

	useDocumentTitle(storePersonalData ? storePersonalData.displayName : '')

	return (
		<Layout>
			{storePersonalData ? (
				<>
					<Section countColumns={10}>
						<Box>
							<PageTitle
								title={storePersonalData.displayName}
								breadcrumbs={
									<Breadcrumbs customLabels={[storePersonalData.displayName]} />
								}
							/>
						</Box>
					</Section>

					<Section countColumns={10}>
						<Tile>
							<Box YPadding>
								{storePersonalData.data.bio.map((item, index) => (
									<Fontbody key={index} role='paragraph'>
										{item}
									</Fontbody>
								))}
							</Box>
						</Tile>

						<Tile>
							<Box YPadding>
								<BriefInfoBox>
									{storePersonalData.data.brief.map((item, index) => {
										let value = item.value

										if (item.title === 'Дата рождения:') {
											const birthDate = new Date(value)
											const formattedDate = birthDate.toLocaleDateString('ru', {
												day: 'numeric',
												month: 'long',
												year: 'numeric',
											})

											const today = new Date()

											let age = today.getFullYear() - birthDate.getFullYear()

											const birthDayThisYear = new Date(
												today.getFullYear(),
												birthDate.getMonth(),
												birthDate.getDate()
											)

											if (today < birthDayThisYear) {
												age--
											}

											const ageString =
												age % 10 === 1 && age !== 11
													? `${age} год`
													: `${age} ${
															age % 10 >= 2 &&
															age % 10 <= 4 &&
															!(age >= 12 && age <= 14)
																? 'года'
																: 'лет'
													  }`

											value = `${formattedDate} (${ageString})`
										}

										return (
											<BriefInfoItem
												key={index}
												title={item.title}
												icon={
													theme === 'dark' && item.iconLight
														? item.iconLight
														: item.icon
												}
												value={value}
												href={item.href}
											/>
										)
									})}
								</BriefInfoBox>
							</Box>
						</Tile>

						<PageNavigation />
					</Section>
				</>
			) : (
				<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
			)}
		</Layout>
	)
}

export { About }
