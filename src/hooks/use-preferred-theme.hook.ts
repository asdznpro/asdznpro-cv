import { useEffect } from 'react'
import { useAppDispatch } from 'hooks'
import { setTheme } from 'store'

import { ThemeType } from 'types'

const usePreferredTheme = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme')

		if (savedTheme) {
			dispatch(setTheme({ mode: savedTheme } as ThemeType))
		} else {
			const prefersDarkMode = window.matchMedia(
				'(prefers-color-scheme: dark)',
			).matches
			const systemTheme = prefersDarkMode ? 'dark' : 'light'

			dispatch(setTheme({ mode: systemTheme } as ThemeType))

			localStorage.setItem('theme', systemTheme)
		}
	}, [dispatch])
}

export { usePreferredTheme }
