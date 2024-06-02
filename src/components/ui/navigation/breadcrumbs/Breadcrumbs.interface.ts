import { LanguageModel } from 'models/common.model'

export default interface BreadcrumbsProps
	extends React.AllHTMLAttributes<HTMLElement> {
	customLabels: string[] | undefined
	selectLanguage: LanguageModel
}
