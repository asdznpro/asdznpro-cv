import { LinkProps } from 'react-router-dom'

export default interface ButtonProps
	extends React.AllHTMLAttributes<HTMLElement> {
	mode?: 'primary' | 'secondary' | 'tertiary' | 'outline' | undefined
	appearance?: 'accent' | 'positive' | 'negative' | 'neutral' | undefined
	buttonSize?: 'xlg' | 'lg' | 'md' | 'sm' | 'xsm' | undefined

	rounded?: boolean | undefined
	disabled?: boolean | undefined
	noneAction?: boolean | undefined
	stretched?: boolean | undefined

	before?: React.ReactNode
	after?: React.ReactNode

	to?: LinkProps['to']
	target?: React.HTMLAttributeAnchorTarget | undefined
}
