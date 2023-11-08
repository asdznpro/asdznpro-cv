import { useEffect } from 'react'
import { useAppDispatch } from 'hooks'
import { setTheme } from 'store/themeSlice'

const usePreferredTheme = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme')

		if (savedTheme) {
			dispatch(setTheme(savedTheme === 'dark' ? 'dark' : 'light'))
		} else {
			const prefersDarkMode = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches
			const systemTheme = prefersDarkMode ? 'dark' : 'light'
			dispatch(setTheme(systemTheme))
			localStorage.setItem('theme', systemTheme)
		}
	}, [dispatch])
}

export { usePreferredTheme }
