import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { RootState } from 'store'
import { useAppDispatch, useAppSelector, usePreferredTheme } from 'hooks'
import { useGetCvMapQuery } from 'services/CommonApi'
import { setCvMapData } from 'store/СommonSlice'

import 'assets/styles/index.scss'

import { AppRouter } from 'components/router'

function App() {
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

	const dispatch = useAppDispatch()

	const { data: cvMapData } = useGetCvMapQuery()

	useEffect(() => {
		if (cvMapData) {
			dispatch(setCvMapData(cvMapData))
		}
	}, [cvMapData, dispatch])

	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	)
}

export default App
