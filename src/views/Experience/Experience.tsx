import * as React from 'react'

import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'hooks'
import { useGetExperienceQuery } from 'services/CommonApi'
import { setExperienceData, selectLanguage, selectTheme } from 'store'

import styles from './Experience.module.scss'

import { Box, Breadcrumbs, Section, Spinner } from 'components/ui'

import { ExperienceItem } from './ExperienceItem'
import { ExperienceList } from './ExperienceList'
import { ExperienceEmployer } from './ExperienceEmployer'

const Experience = () => {
	const dispatch = useAppDispatch()

	const language = useAppSelector(selectLanguage)
	const theme = useAppSelector(selectTheme)

	// useGetExperienceQuery

	const { data: experienceData } = useGetExperienceQuery({ language })
	const storeExperienceData = useAppSelector(state => state.common.experience)

	useEffect(() => {
		if (experienceData) {
			dispatch(setExperienceData(experienceData))
		}
	}, [experienceData, dispatch])

	return (
		<React.Fragment>
			<Routes>
				<Route
					path=''
					element={
						<Experience.List
							storeExperienceData={storeExperienceData}
							language={language}
							theme={theme}
						/>
					}
				/>

				{storeExperienceData ? (
					storeExperienceData.data.map(item => (
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
										item={item}
										language={language}
										theme={theme}
									/>
								</>
							}
						/>
					))
				) : (
					<Route
						path='*'
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
