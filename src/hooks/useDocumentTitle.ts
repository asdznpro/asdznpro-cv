import { useEffect } from 'react'

const defaultTitle = 'Андрей Сухушин // Curriculum Vitae'

const useDocumentTitle = (newTitle: string) => {
	useEffect(() => {
		document.title = newTitle ? newTitle + ' — ' + defaultTitle : defaultTitle
	}, [newTitle])
}

export { useDocumentTitle }
