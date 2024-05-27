import { useEffect } from 'react'
import { useAppDispatch } from 'hooks'
import { setLanguage } from 'store'

import { LanguageModel } from 'models'

const useLanguage = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const savedLanguage = localStorage.getItem('language')

		if (savedLanguage === 'ru' || savedLanguage === 'en') {
			dispatch(setLanguage({ lang: savedLanguage } as LanguageModel))
		} else {
			const userLanguage = navigator.language.split('-')[0]
			const languageToSet = userLanguage === 'ru' ? 'ru' : 'en'

			dispatch(setLanguage({ lang: languageToSet } as LanguageModel))

			localStorage.setItem('language', languageToSet)
		}
	}, [dispatch])
}

export { useLanguage }
