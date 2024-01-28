import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'hooks'
import { useGetExperienceQuery } from 'services/CommonApi'
import { setExperienceData } from 'store/СommonSlice'
import { selectTheme } from 'store/ThemeSlice'

import styles from './Experience.module.scss'

import { Layout } from 'components/layout'
import { Spinner } from 'components/ui'

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

	useEffect(() => {
		console.log(storeExperienceData)
	}, [storeExperienceData])

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
							element={<ExperienceEmployer item={item} theme={theme} />}
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
