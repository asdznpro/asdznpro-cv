import { AwardType } from 'types'
import { LinkProps } from 'react-router-dom'

export default interface PortfolioItemProps
	extends React.AllHTMLAttributes<HTMLElement> {
	to?: LinkProps['to']

	tags: string | undefined
	date?: string | undefined

	award?: AwardType | null
}
