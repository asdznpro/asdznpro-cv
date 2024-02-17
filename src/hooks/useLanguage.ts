import { useEffect } from 'react'
import { useAppDispatch } from 'hooks'
import { setLanguage } from 'store'

const useLanguage = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const savedLanguage = localStorage.getItem('language')

		if (savedLanguage === 'ru' || savedLanguage === 'en') {
			dispatch(setLanguage(savedLanguage as 'ru' | 'en'))
		} else {
			const userLanguage = navigator.language.split('-')[0] as 'ru' | 'en'
			dispatch(setLanguage(userLanguage))
			localStorage.setItem('language', userLanguage)
		}
	}, [dispatch])
}

export { useLanguage }
