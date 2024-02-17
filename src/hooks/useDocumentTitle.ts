import { useEffect } from 'react'

const useDocumentTitle = (newTitle: string, selectLanguage: string) => {
	const defaultTitleEn = "Andrew Sukhushin's Curriculum Vitae"
	const defaultTitleRu = 'Андрей Сухушин // Curriculum Vitae'

	useEffect(() => {
		const defaultTitle =
			selectLanguage === 'en' ? defaultTitleEn : defaultTitleRu
		document.title = newTitle ? newTitle + ' — ' + defaultTitle : defaultTitle
	}, [newTitle, selectLanguage])
}

export { useDocumentTitle }
