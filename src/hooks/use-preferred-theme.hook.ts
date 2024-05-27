import { useEffect } from 'react'
import { useAppDispatch } from 'hooks'
import { setTheme } from 'store'

import { ThemeModel } from 'models'

const usePreferredTheme = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme')

		if (savedTheme) {
			dispatch(setTheme({ mode: savedTheme } as ThemeModel))
		} else {
			const prefersDarkMode = window.matchMedia(
				'(prefers-color-scheme: dark)',
			).matches
			const systemTheme = prefersDarkMode ? 'dark' : 'light'

			dispatch(setTheme({ mode: systemTheme } as ThemeModel))

			localStorage.setItem('theme', systemTheme)
		}
	}, [dispatch])
}

export { usePreferredTheme }
