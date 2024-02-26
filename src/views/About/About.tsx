import { useDocumentTitle, useAppSelector } from 'hooks'
import { selectLanguage, selectTheme } from 'store'

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
	const language = useAppSelector(selectLanguage)
	const theme = useAppSelector(selectTheme)

	const storeAboutData = useAppSelector(state => state.common.about)

	useDocumentTitle(storeAboutData ? storeAboutData.displayName : '', language)

	return (
		<Layout>
			{storeAboutData ? (
				<>
					<Section countColumns={10}>
						<Box>
							<PageTitle
								title={storeAboutData.displayName}
								breadcrumbs={
									<Breadcrumbs
										customLabels={[storeAboutData.displayName]}
										selectLanguage={language}
									/>
								}
							/>
						</Box>
					</Section>

					<Section countColumns={10}>
						<Tile>
							<Box YPadding>
								{storeAboutData.data.bio.map((item, index) => (
									<Fontbody key={index} role='paragraph'>
										{item}
									</Fontbody>
								))}
							</Box>
						</Tile>

						<Tile>
							<Box YPadding>
								<BriefInfoBox>
									{storeAboutData.data.brief.map((item, index) => {
										let value = item.value

										if (item.id && item.id === 'birthday') {
											const birthDate = new Date(value)
											const formattedDate = birthDate.toLocaleDateString(
												language,
												{
													day: 'numeric',
													month: 'long',
													year: 'numeric',
												}
											)

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
													? `${age} ${language === 'en' ? 'years old' : 'год'}`
													: `${age} ${
															age % 10 >= 2 &&
															age % 10 <= 4 &&
															!(age >= 12 && age <= 14)
																? `${language === 'en' ? 'years old' : 'года'}`
																: `${language === 'en' ? 'years old' : 'лет'}`
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

						<Tile>
							<Box YPadding>
								<Fontbody
									style={{ margin: '0 auto', padding: '28px 0' }}
									secondary
								>
									*рекомендации как на HH*
								</Fontbody>
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
