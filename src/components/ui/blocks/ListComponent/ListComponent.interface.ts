export default interface ListComponentProps {
	typeList: 'ul' | 'ol' | undefined
	content: (string | NestedList)[]

	fontLevel?: 1 | 2 | 3 | undefined
}

export interface NestedList {
	typeList?: 'ul' | 'ol' | undefined
	title?: string
	items: (string | NestedList)[]
}
