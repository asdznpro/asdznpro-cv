import { LinkProps } from 'react-router-dom'

export default interface AppLinkProps
	extends React.AllHTMLAttributes<HTMLElement> {
	to?: LinkProps['to']
	target?: React.HTMLAttributeAnchorTarget | undefined
}
