export default interface ButtonIconProps {
	children: React.ReactNode

	mode?: 'primary' | 'secondary' | 'tertiary' | 'outline' | undefined
	appearance?: 'accent' | 'positive' | 'negative' | 'neutral' | undefined
	size?: 'xlg' | 'lg' | 'md' | 'sm' | 'xsm' | undefined

	rounded?: boolean | undefined
	disabled?: boolean | undefined
	stretched?: boolean | undefined

	before?: React.ReactNode
	after?: React.ReactNode

	to?: string | undefined
	href?: string | undefined
	target?: 'self' | 'blank' | 'parent' | 'top' | undefined

	onClick?: React.MouseEventHandler<HTMLElement>
	style?: React.CSSProperties
}
