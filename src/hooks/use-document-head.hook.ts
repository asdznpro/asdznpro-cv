import { useEffect } from 'react'

import { BASE_URL, DEFAULT_PAGE_TITLES } from 'constants'
import { LanguageModel } from 'models'

const useDocumentHead = (
	selectLanguage: LanguageModel,
	newTitle: string = '',
	canonical: string = '',
) => {
	useEffect(() => {
		const defaultTitle = DEFAULT_PAGE_TITLES[selectLanguage.lang]
		const title = newTitle ? `${newTitle} — ${defaultTitle}` : defaultTitle

		document.title = title
		document
			.querySelector('meta[property="og:title"]')!
			.setAttribute('content', title)

		document
			.querySelector("link[rel='canonical']")!
			.setAttribute('href', canonical ? BASE_URL + canonical : BASE_URL)
	}, [selectLanguage, newTitle, canonical])
}

export { useDocumentHead }
