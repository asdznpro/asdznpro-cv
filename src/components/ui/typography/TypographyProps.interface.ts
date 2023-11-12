export default interface TypographyProps {
	level?: 1 | 2 | 3 | undefined
	children: React.ReactNode
	caps?: boolean | undefined
	ellipsis?: boolean | undefined
	className?: string | undefined
	style?: React.CSSProperties
}
