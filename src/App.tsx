import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { RootState } from 'store'
import { useAppDispatch, useAppSelector, usePreferredTheme } from 'hooks'
import {
	useGetCvMapQuery,
	useGetPersonalQuery,
	useGetPortfolioQuery,
} from 'services/CommonApi'
import {
	setCvMapData,
	setPersonalData,
	setPortfolioData,
} from 'store/СommonSlice'

import 'assets/styles/index.scss'

import { AppRouter } from 'components/router'

function App() {
	usePreferredTheme()

	const dispatch = useAppDispatch()
	const theme = useAppSelector((state: RootState) => state.theme.theme)

	// usePreferredTheme

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)

		const metaThemeColor = document.querySelector('meta[name=theme-color]')

		if (metaThemeColor) {
			metaThemeColor.setAttribute(
				'content',
				theme === 'dark' ? '#17171C' : '#F4F4F6'
			)
		}
	}, [theme])

	// useGetCvMapQuery

	const { data: cvMapData } = useGetCvMapQuery()

	useEffect(() => {
		if (cvMapData) {
			dispatch(setCvMapData(cvMapData))
		}
	}, [cvMapData, dispatch])

	// useGetPersonalQuery

	const { data: personalData } = useGetPersonalQuery()

	useEffect(() => {
		if (personalData) {
			dispatch(setPersonalData(personalData))
		}
	}, [personalData, dispatch])

	// useGetPortfolioQuery

	const { data: portfolioData } = useGetPortfolioQuery()

	useEffect(() => {
		if (portfolioData) {
			dispatch(setPortfolioData(portfolioData))
		}
	}, [portfolioData, dispatch])

	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	)
}

export default App
