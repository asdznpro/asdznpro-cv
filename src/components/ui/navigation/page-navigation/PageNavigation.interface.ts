import { LanguageModel } from 'models/common.model'

export default interface PageNavigationProps
	extends React.AllHTMLAttributes<HTMLElement> {
	selectLanguage: LanguageModel
	previousPage: PageInfo
	nextPage: PageInfo
}

interface PageInfo {
	title: string
	pathname: string
}
