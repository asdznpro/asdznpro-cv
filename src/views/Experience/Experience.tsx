import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'hooks'
import { useGetExperienceQuery } from 'services/CommonApi'
import { setExperienceData } from 'store/СommonSlice'
import { selectTheme } from 'store/ThemeSlice'

import styles from './Experience.module.scss'

import { Layout } from 'components/layout'
import { Box, Breadcrumbs, Section, Spinner } from 'components/ui'

import { ExperienceList } from './ExperienceList'
import { ExperienceEmployer } from './ExperienceEmployer'

const Experience = () => {
	const dispatch = useAppDispatch()

	const theme = useAppSelector(selectTheme)

	const { data: experienceData } = useGetExperienceQuery()
	const storeExperienceData = useAppSelector(state => state.common.experience)

	useEffect(() => {
		if (experienceData) {
			dispatch(setExperienceData(experienceData))
		}
	}, [experienceData, dispatch])

	return (
		<Layout>
			<Routes>
				<Route
					path=''
					element={
						<ExperienceList
							storeExperienceData={storeExperienceData}
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
											/>
										</Box>
									</Section>

									<ExperienceEmployer item={item} theme={theme} />
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
		</Layout>
	)
}

export { Experience }
