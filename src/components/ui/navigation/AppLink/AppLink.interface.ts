export default interface AppLinkProps {
	to?: string
	target?: 'self' | 'blank' | 'parent' | 'top'
	children: React.ReactNode
	flex?: boolean | undefined
	colorless?: boolean | undefined
	onClick?: React.MouseEventHandler<HTMLSpanElement>
}
