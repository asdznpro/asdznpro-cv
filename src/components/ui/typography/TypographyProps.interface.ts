export default interface TypographyProps {
	children: React.ReactNode

	level?: 1 | 2 | 3 | undefined

	caps?: boolean | undefined
	ellipsis?: boolean | undefined
	className?: string | undefined

	itemProp?: 'name' | undefined

	style?: React.CSSProperties
}
