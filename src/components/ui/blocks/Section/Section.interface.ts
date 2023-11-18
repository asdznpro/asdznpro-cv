export default interface SectionProps {
	children: React.ReactNode
	top?: React.ReactNode
	style?: React.CSSProperties
	field?: boolean | undefined
	withoutAllPadding?: boolean | undefined
	withoutXPadding?: boolean | undefined
	withoutYPadding?: boolean | undefined
	countColumns?: 3 | 4 | 6 | 8 | 10 | 12

	to?: string | undefined
	href?: string | undefined
	target?: 'self' | 'blank' | 'parent' | 'top' | undefined
}
