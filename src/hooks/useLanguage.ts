import { useEffect } from 'react'
import { useAppDispatch } from 'hooks'
import { setLanguage } from 'store'

const useLanguage = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const savedLanguage = localStorage.getItem('language')

		if (savedLanguage === 'ru' || savedLanguage === 'en') {
			dispatch(setLanguage(savedLanguage))
		} else {
			const userLanguage = navigator.language.split('-')[0]
			const languageToSet = userLanguage === 'ru' ? 'ru' : 'en'
			dispatch(setLanguage(languageToSet))
			localStorage.setItem('language', languageToSet)
		}
	}, [dispatch])
}

export { useLanguage }
