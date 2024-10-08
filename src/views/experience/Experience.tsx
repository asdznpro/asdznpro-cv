import * as React from 'react'

import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useGetExperienceQuery, useGetFeedbackQuery } from 'services'
import {
	setExperienceData,
	setFeedbackData,
	selectLanguage,
	selectTheme,
} from 'store'

import { useAppDispatch, useAppSelector } from 'hooks'

import styles from './Experience.module.scss'

import { ExperienceList } from './ExperienceList'
import { ExperienceEmployer } from './ExperienceEmployer'
import { ExperienceItem, ExperienceItemSkeleton } from './experience-item'

import {
	Box,
	Breadcrumbs,
	PageNavigation,
	Section,
	Spinner,
	Tile,
} from 'components/ui'

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

	const storeFeedbackData = useAppSelector((state) => state.common.feedback)

	return (
		<React.Fragment>
			<Routes>
				<Route
					path=""
					element={
						<Experience.List
							data={storeExperienceData}
							language={language}
							theme={theme}
						/>
					}
				/>

				{storeExperienceData ? (
					storeExperienceData.data.map((item) => {
						const matchingFeedback =
							storeFeedbackData &&
							storeFeedbackData.data.find(
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
													selectLanguage={language}
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

										{/* <Section countColumns={10}>
											<PageNavigation
												selectLanguage={language}
												previousPage={{
													name: 'prev',
													pathname: '/experience/prev',
												}}
												nextPage={{
													name: 'next',
													pathname: '/experience/next',
												}}
											/>
										</Section> */}
									</>
								}
							/>
						)
					})
				) : (
					<Route
						path="*"
						element={
							<>
								<Section countColumns={10}>
									<Box>
										<Breadcrumbs.Skeleton />
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
						}
					/>
				)}
			</Routes>
		</React.Fragment>
	)
}

Experience.ItemSkeleton = ExperienceItemSkeleton
Experience.ItemSkeleton.displayName = 'Experience.ItemSkeleton'

Experience.Item = ExperienceItem
Experience.Item.displayName = 'Experience.Item'

Experience.List = ExperienceList
Experience.List.displayName = 'Experience.List'

Experience.Employer = ExperienceEmployer
Experience.Employer.displayName = 'Experience.Employer'

Experience.displayName = 'Experience'

export { Experience }
