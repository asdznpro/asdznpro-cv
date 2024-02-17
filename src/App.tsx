import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { RootState } from 'store'
import {
	useAppDispatch,
	useAppSelector,
	usePreferredTheme,
	useLanguage,
} from 'hooks'
import {
	useGetCvMapQuery,
	useGetAboutQuery,
	useGetPortfolioQuery,
} from 'services/CommonApi'
import { setCvMapData, setAboutData, setPortfolioData } from 'store/СommonSlice'

import 'assets/styles/index.scss'

import { AppRouter } from 'components/router'

function App() {
	const dispatch = useAppDispatch()

	// useLanguage

	useLanguage()

	const language = useAppSelector((state: RootState) => state.language.language)

	useEffect(() => {
		document.documentElement.lang = language
	}, [language])

	// usePreferredTheme

	usePreferredTheme()

	const theme = useAppSelector((state: RootState) => state.theme.theme)

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

	// useGetAboutQuery

	const { data: aboutData } = useGetAboutQuery({ language })

	useEffect(() => {
		if (aboutData) {
			dispatch(setAboutData(aboutData))
		}
	}, [aboutData, dispatch])

	// useGetCvMapQuery

	const { data: cvMapData } = useGetCvMapQuery({ language })

	useEffect(() => {
		if (cvMapData) {
			dispatch(setCvMapData(cvMapData))
		}
	}, [cvMapData, dispatch])

	// useGetPortfolioQuery

	const { data: portfolioData } = useGetPortfolioQuery({ language })

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
