import * as React from 'react'

import { useDocumentHead, useAppSelector } from 'hooks'
import { selectLanguage, selectTheme } from 'store'
import { getProcessedTextWithLinks } from 'utils'

import styles from './About.module.scss'

import {
	BriefInfo,
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

	const data = useAppSelector((state) => state.common.about) // storeAboutData

	useDocumentHead(
		language,
		data ? data.displayName : '',
		data ? data.pathname : '',
	)

	return (
		<React.Fragment>
			{data ? (
				<>
					<Section countColumns={10}>
						<Box>
							<PageTitle
								title={data.displayName}
								before={
									<Breadcrumbs
										customLabels={[data.displayName]}
										selectLanguage={language}
									/>
								}
							/>
						</Box>
					</Section>

					<Section countColumns={10}>
						<Tile>
							<Box YPadding>
								{data.data.bio.map((item, index) => (
									<Fontbody key={index} level={2} role="paragraph">
										{getProcessedTextWithLinks(item)}
									</Fontbody>
								))}
							</Box>
						</Tile>

						<Tile>
							<Box YPadding>
								<BriefInfo.Box>
									{data.data.brief.map((item, index) => {
										let value = item.value

										if (item.id && item.id === 'birthday') {
											const birthDate = new Date(value)
											const formattedDate = birthDate.toLocaleDateString(
												language.lang,
												{
													day: 'numeric',
													month: 'long',
													year: 'numeric',
												},
											)

											const today = new Date()

											let age = today.getFullYear() - birthDate.getFullYear()

											const birthDayThisYear = new Date(
												today.getFullYear(),
												birthDate.getMonth(),
												birthDate.getDate(),
											)

											if (today < birthDayThisYear) {
												age--
											}

											const ageString =
												age % 10 === 1 && age !== 11
													? `${age} ${language.lang === 'en' ? 'years old' : 'год'}`
													: `${age} ${
															age % 10 >= 2 &&
															age % 10 <= 4 &&
															!(age >= 12 && age <= 14)
																? `${language.lang === 'en' ? 'years old' : 'года'}`
																: `${language.lang === 'en' ? 'years old' : 'лет'}`
														}`

											value = `${formattedDate} (${ageString})`
										}

										return (
											<BriefInfo.Item
												key={index}
												title={item.title}
												icon={
													theme.mode === 'dark' && item.iconLight
														? item.iconLight
														: item.icon
												}
												value={value}
												href={item.href}
											/>
										)
									})}
								</BriefInfo.Box>
							</Box>
						</Tile>

						<Tile>
							<Box YPadding>
								<Fontbody className="ui-text-secondary ui-mx-auto ui-py-24-px">
									*рекомендации как на HH*
								</Fontbody>
							</Box>
						</Tile>

						<PageNavigation
							selectLanguage={language}
							previousPage={{ name: 'Резюме', pathname: '/' }}
							nextPage={{ name: 'Опыт работы', pathname: '/experience' }}
						/>
					</Section>
				</>
			) : (
				<>
					<Section countColumns={10}>
						<Box>
							<PageTitle.Skeleton before={<Breadcrumbs.Skeleton />} />
						</Box>
					</Section>

					<Section countColumns={10}>
						<Tile>
							<Box YPadding>
								<Spinner
									className="ui-mx-auto ui-py-48-px"
									width={36}
									height={36}
								/>
							</Box>
						</Tile>

						<PageNavigation.Skeleton />
					</Section>
				</>
			)}
		</React.Fragment>
	)
}

export { About }
