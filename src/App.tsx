import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { RootState } from 'store'
import { usePreferredTheme, useAppSelector } from 'hooks'

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

	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	)
}

export default App
