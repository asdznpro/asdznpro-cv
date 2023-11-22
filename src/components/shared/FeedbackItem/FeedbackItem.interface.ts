export default interface FeedbackItemProps {
	title: string | undefined
	describe: string | undefined
	logoPath?: string | undefined
	preview?: string | undefined
	children?: React.ReactNode
	style?: React.CSSProperties

	ellipsis?: boolean | undefined

	to?: string | undefined
	href?: string | undefined
	target?: 'self' | 'blank' | 'parent' | 'top' | undefined
}
