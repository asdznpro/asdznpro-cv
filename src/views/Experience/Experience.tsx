import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useDocumentTitle, useAppDispatch, useAppSelector } from 'hooks'
import { useGetExperienceQuery } from 'services/CommonApi'
import { setExperienceData } from 'store/СommonSlice'
import { selectTheme } from 'store/ThemeSlice'

import styles from './Experience.module.scss'

import { Layout } from 'components/layout'
import { ExperienceItem } from 'components/shared'
import {
	Fontbody,
	Section,
	PageTitle,
	Button,
	Breadcrumbs,
	SectionGroup,
	Footnote,
	Spinner,
	Heading,
	ButtonIcon,
} from 'components/ui'

import {
	Icon28CalendarCheckOutline,
	Icon28ChevronRightCircle,
	Icon28LockOutline,
	Icon28LinkOutline,
} from '@vkontakte/icons'

const Experience = () => {
	useDocumentTitle('Опыт работы — Андрей Сухушин // Curriculum Vitae')

	const dispatch = useAppDispatch()

	const theme = useAppSelector(selectTheme)

	const { data: experienceData } = useGetExperienceQuery()
	const storeExperienceData = useAppSelector(state => state.common.experience)

	useEffect(() => {
		if (experienceData) {
			dispatch(setExperienceData(experienceData))
		}
	}, [experienceData, dispatch])

	useEffect(() => {
		console.log(storeExperienceData)
	}, [storeExperienceData])

	return (
		<Layout>
			{storeExperienceData ? (
				<Routes>
					<Route
						path=''
						element={
							<>
								<Section countColumns={10}>
									<Breadcrumbs customLabels={['Опыт работы']} />
									<PageTitle title='Опыт работы' />
								</Section>

								<SectionGroup gap='sm'>
									{storeExperienceData.data.map(item => (
										<ExperienceItem
											key={item.id}
											title={item.employerName}
											describe={item.shortDescription}
											// logoPath={
											// 	theme === 'dark' && item.employerLogoLight
											// 		? item.employerLogoLight
											// 		: item.employerLogo
											// }
										>
											<div
												className={styles['header-part']}
												style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}
											>
												{item.labels.map((label, index) => (
													<Button
														key={item.id + '-' + index}
														size='sm'
														appearance={
															label.includes('закрыт') ? 'negative' : 'neutral'
														}
														before={
															label.includes('год') ||
															label.includes('месяца') ||
															label.includes('мая') ? (
																<Icon28CalendarCheckOutline
																	width={24}
																	height={24}
																/>
															) : label.includes('закрыт') ? (
																<Icon28LockOutline width={24} height={24} />
															) : (
																''
															)
														}
														noneAction
													>
														<Footnote>{label}</Footnote>
													</Button>
												))}

												<ButtonIcon size='sm' to={item.pathname} rounded>
													<Icon28LinkOutline width={24} height={24} />
												</ButtonIcon>
											</div>
										</ExperienceItem>
									))}
								</SectionGroup>
							</>
						}
					/>

					{storeExperienceData.data.map(item => (
						<Route
							key={item.id}
							path={item.pathname}
							element={
								<>
									<Section countColumns={10}>
										<Breadcrumbs
											customLabels={['Опыт работы', item.employerName]}
										/>
									</Section>

									<ExperienceItem
										key={item.id}
										title={item.employerName}
										describe={item.fullDescription}
									>
										<div
											className={styles['header-part']}
											style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}
										>
											{item.employerWebsite && (
												<Button
													size='sm'
													href={item.employerWebsite}
													target='blank'
													after={<Icon28LinkOutline width={24} height={24} />}
												>
													<Footnote>
														{item.employerWebsite.split('https://')}
													</Footnote>
												</Button>
											)}

											{item.labels.map((label, index) => (
												<Button
													key={item.id + '-' + index}
													size='sm'
													appearance={
														label.includes('закрыт') ? 'negative' : 'neutral'
													}
													before={
														label.includes('год') ||
														label.includes('месяца') ||
														label.includes('мая') ? (
															<Icon28CalendarCheckOutline
																width={24}
																height={24}
															/>
														) : label.includes('закрыт') ? (
															<Icon28LockOutline width={24} height={24} />
														) : (
															''
														)
													}
													noneAction
												>
													<Footnote>{label}</Footnote>
												</Button>
											))}
										</div>
									</ExperienceItem>

									{/* <Section countColumns={10}>
										<Heading level={2}>Чем я занимался?</Heading>
									</Section> */}

									<Section countColumns={10} field>
										<Fontbody level={2}>{item.fullDescription}</Fontbody>
									</Section>

									{/* <Section countColumns={10}>
										<Heading level={2}>Примеры работ</Heading>
									</Section>

									<Section countColumns={10}>
										<Heading level={2}>Отзывы о работе</Heading>
									</Section> */}
								</>
							}
						/>
					))}
				</Routes>
			) : (
				<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
			)}
		</Layout>
	)
}

export { Experience }
