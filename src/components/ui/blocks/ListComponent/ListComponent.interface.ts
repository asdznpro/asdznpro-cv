export default interface ListComponentProps
	extends React.AllHTMLAttributes<HTMLElement> {
	typeList: 'ul' | 'ol' | undefined
	listContent: (string | NestedList)[]

	fontLevel?: 1 | 2 | 3 | undefined
}

export interface NestedList {
	typeList?: 'ul' | 'ol' | undefined
	title?: string
	items: (string | NestedList)[]
}
