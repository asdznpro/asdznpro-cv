import { useEffect } from 'react'
import { useAppDispatch } from 'hooks'
import { setLanguage } from 'store'

import { LanguageType } from 'types'

const useLanguage = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const savedLanguage = localStorage.getItem('language')

		if (savedLanguage === 'ru' || savedLanguage === 'en') {
			dispatch(setLanguage({ lang: savedLanguage } as LanguageType))
		} else {
			const userLanguage = navigator.language.split('-')[0]
			const languageToSet = userLanguage === 'ru' ? 'ru' : 'en'

			dispatch(setLanguage({ lang: languageToSet } as LanguageType))

			localStorage.setItem('language', languageToSet)
		}
	}, [dispatch])
}

export { useLanguage }
