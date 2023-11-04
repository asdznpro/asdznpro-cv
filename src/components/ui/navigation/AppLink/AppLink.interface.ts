export default interface AppLinkProps {
	to?: string
	target?: 'self' | 'blank' | 'parent' | 'top'
	children: React.ReactNode
	flex?: boolean
	onClick?: React.MouseEventHandler<HTMLSpanElement>
}
