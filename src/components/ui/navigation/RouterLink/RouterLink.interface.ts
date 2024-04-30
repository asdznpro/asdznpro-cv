import { LinkProps } from 'react-router-dom'

export default interface RouterLinkProps
	extends React.AllHTMLAttributes<HTMLElement> {
	children?: React.ReactNode

	to?: LinkProps['to']
	target?: React.HTMLAttributeAnchorTarget | undefined
}
