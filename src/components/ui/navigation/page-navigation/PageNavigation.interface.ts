import { LanguageModel } from 'models'

export default interface PageNavigationProps
	extends React.AllHTMLAttributes<HTMLElement> {
	selectLanguage: LanguageModel
	previousPage: PageInfo
	nextPage: PageInfo
}

interface PageInfo {
	name: string
	pathname: string
}
