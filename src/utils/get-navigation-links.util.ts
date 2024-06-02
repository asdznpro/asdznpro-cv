import { LanguageType } from 'types'

interface PageInfo {
	name: string
	pathname: string
}

const getNavigationLinks = (
	currentPathname: string,
	data: PageInfo[] | null,
	language: LanguageType,
) => {
	const baseName = language.lang === 'en' ? 'CV' : 'Резюме'

	if (!data) {
		return {
			previousPage: { name: baseName, pathname: '/' },
			nextPage: { name: baseName, pathname: '/' },
		}
	}

	const currentIndex = data.findIndex(
		(page) => page.pathname === currentPathname,
	)

	if (currentIndex === -1) {
		return {
			previousPage: { name: baseName, pathname: '/' },
			nextPage: { name: baseName, pathname: '/' },
		}
	}

	const previousPage =
		currentIndex > 0
			? data[currentIndex - 1]
			: { name: baseName, pathname: '/' }
	const nextPage =
		currentIndex < data.length - 1
			? data[currentIndex + 1]
			: { name: baseName, pathname: '/' }

	return { previousPage, nextPage }
}

export { getNavigationLinks }
