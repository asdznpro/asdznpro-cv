import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useDocumentTitle, useAppDispatch, useAppSelector } from 'hooks'
import {
	useGetPersonalQuery,
	useGetExperienceQuery,
	useGetPortfolioQuery,
	useGetHardSkillsQuery,
	useGetEducationQuery,
} from 'services/CommonApi'
import {
	setPersonalData,
	setExperienceData,
	setPortfolioData,
	setHardSkillsData,
	setEducationData,
} from 'store/СommonSlice'

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
} from 'components/ui'

const Experience = () => {
	useDocumentTitle('Опыт работы — Андрей Сухушин // Curriculum Vitae')

	const dispatch = useAppDispatch()

	const { data: personalData } = useGetPersonalQuery()
	// const { data: experienceData } = useGetExperienceQuery()
	// const { data: portfolioData } = useGetPortfolioQuery()
	// const { data: hardSkillsData } = useGetHardSkillsQuery()
	// const { data: educationData } = useGetEducationQuery()

	const storePersonalData = useAppSelector(state => state.common.personal)

	useEffect(() => {
		if (personalData) {
			dispatch(setPersonalData(personalData))

			console.log(storePersonalData)
		}
	}, [personalData, dispatch])

	useEffect(() => {
		console.log(storePersonalData)
	}, [storePersonalData])

	return (
		<Layout>
			<Routes>
				<Route
					path=''
					element={
						<>
							<Section countColumns={10}>
								<Breadcrumbs customLabels={['Опыт работы', 'Warface']} />
								<PageTitle
									title='Опыт работы'
									describe='Идейные соображения высшего порядка, а также консультация с
									широким активом играет определяющее значение для форм
									воздействия.'
								/>
							</Section>

							{personalData ? (
								<SectionGroup gap='sm'>
									<ExperienceItem
										title='title'
										describe='describe'
										logoPath='logoPath'
									>
										<div
											className={styles['header-part']}
											style={{ display: 'flex', gap: 6 }}
										>
											<Button
												size='sm'
												mode='secondary'
												appearance='neutral'
												noneAction
											>
												<Footnote>Графический дизайнер</Footnote>
											</Button>
										</div>
									</ExperienceItem>
									<ExperienceItem title='title' describe='describe' />
									<ExperienceItem title='title' describe='describe' />
								</SectionGroup>
							) : (
								<Section countColumns={10} field>
									<Spinner
										width={48}
										height={48}
										style={{ margin: '0 auto' }}
									/>
								</Section>
							)}
						</>
					}
				/>

				<Route
					path='warface'
					element={
						<>
							<Section countColumns={10}>
								<Breadcrumbs customLabels={['Опыт работы', 'Warface']} />
								<PageTitle title='Warface' />
							</Section>

							<Section countColumns={10} field>
								<Fontbody level={2}>
									Сложно сказать, почему представители современных социальных
									резервов освещают чрезвычайно интересные особенности картины в
									целом, однако конкретные выводы, разумеется, превращены в
									посмешище, хотя само их существование приносит несомненную
									пользу обществу.
								</Fontbody>
							</Section>
						</>
					}
				/>
			</Routes>
		</Layout>
	)
}

export { Experience }
