import { LanguageType } from 'types'

export default interface PageNavigationProps
	extends React.AllHTMLAttributes<HTMLElement> {
	selectLanguage: LanguageType
	previousPage: PageInfo
	nextPage: PageInfo
}

interface PageInfo {
	name: string
	pathname: string
}
