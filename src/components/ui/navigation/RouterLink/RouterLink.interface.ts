export default interface RouterLinkProps {
	children?: React.ReactNode

	to?: string | undefined
	href?: string | undefined
	target?: 'self' | 'blank' | 'parent' | 'top' | undefined

	onClick?: React.MouseEventHandler<HTMLSpanElement>

	className?: string | undefined
}
