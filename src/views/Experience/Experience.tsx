import * as React from 'react'

import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'hooks'
import { useGetExperienceQuery, useGetFeedbackQuery } from 'services/CommonApi'
import { setExperienceData, selectLanguage, selectTheme } from 'store'

import styles from './Experience.module.scss'

import { Box, Breadcrumbs, Section, Spinner } from 'components/ui'

import { ExperienceItem } from './ExperienceItem'
import { ExperienceList } from './ExperienceList'
import { ExperienceEmployer } from './ExperienceEmployer'
import { setFeedbackData } from 'store/СommonSlice'

const Experience = () => {
	const dispatch = useAppDispatch()

	const language = useAppSelector(selectLanguage)
	const theme = useAppSelector(selectTheme)

	// useGetExperienceQuery

	const { data: experienceData } = useGetExperienceQuery({ language })
	const storeExperienceData = useAppSelector((state) => state.common.experience)

	useEffect(() => {
		if (experienceData) {
			dispatch(setExperienceData(experienceData))
		}
	}, [experienceData, dispatch])

	// useGetFeedbackQuery

	const { data: feedbackData } = useGetFeedbackQuery({ language })
	const storeFeedbackData = useAppSelector((state) => state.common.feedback)

	useEffect(() => {
		if (feedbackData) {
			dispatch(setFeedbackData(feedbackData))
		}
	}, [feedbackData, dispatch])

	return (
		<React.Fragment>
			<Routes>
				<Route
					path=""
					element={
						<Experience.List
							storeExperienceData={storeExperienceData}
							language={language.lang}
							theme={theme.mode}
						/>
					}
				/>

				{storeExperienceData && storeFeedbackData ? (
					storeExperienceData.data.map((item) => {
						const matchingFeedback = storeFeedbackData.data.find(
							(feedbackItem) => feedbackItem.id === item.pathname,
						)

						return (
							<Route
								key={item.id}
								path={item.pathname}
								element={
									<>
										<Section countColumns={10}>
											<Box>
												<Breadcrumbs
													customLabels={[
														storeExperienceData.displayName,
														item.employerInfo.name,
													]}
													selectLanguage={language.lang}
												/>
											</Box>
										</Section>

										<Experience.Employer
											employerData={item}
											feedbackData={
												matchingFeedback ? matchingFeedback.feedback : []
											}
											language={language}
											theme={theme}
										/>
									</>
								}
							/>
						)
					})
				) : (
					<Route
						path="*"
						element={
							<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
						}
					/>
				)}
			</Routes>
		</React.Fragment>
	)
}

Experience.Item = ExperienceItem
Experience.Item.displayName = 'Experience.Item'

Experience.List = ExperienceList
Experience.List.displayName = 'Experience.List'

Experience.Employer = ExperienceEmployer
Experience.Employer.displayName = 'Experience.Employer'

Experience.displayName = 'Experience'

export { Experience }
