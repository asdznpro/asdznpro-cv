import { useEffect } from 'react'

type UseDocumentTitle = (title: string) => void

const useDocumentTitle: UseDocumentTitle = title => {
	useEffect(() => {
		document.title = title
	}, [title])
}

export { useDocumentTitle }
