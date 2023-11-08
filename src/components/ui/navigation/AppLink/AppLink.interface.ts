export default interface AppLinkProps {
	children: React.ReactNode

	to?: string | undefined
	href?: string | undefined
	target?: 'self' | 'blank' | 'parent' | 'top' | undefined

	onClick?: React.MouseEventHandler<HTMLSpanElement>

	flex?: boolean | undefined
	colorless?: boolean | undefined
}
