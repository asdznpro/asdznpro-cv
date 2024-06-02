import { LanguageType } from 'types'

export default interface BreadcrumbsProps
	extends React.AllHTMLAttributes<HTMLElement> {
	customLabels: string[] | undefined
	selectLanguage: LanguageType
}
