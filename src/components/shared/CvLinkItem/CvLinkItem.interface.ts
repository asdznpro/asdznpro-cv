import { LinkProps } from 'react-router-dom'

export default interface CvLinkItemProps
	extends React.AllHTMLAttributes<HTMLElement> {
	to?: LinkProps['to']
	target?: React.HTMLAttributeAnchorTarget | undefined

	backgroundColor?: string | undefined
}
