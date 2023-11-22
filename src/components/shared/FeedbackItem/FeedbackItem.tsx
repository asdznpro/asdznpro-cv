import styles from './FeedbackItem.module.scss'
import FeedbackItemProps from './FeedbackItem.interface'

import { Fontbody, Heading, Spinner } from 'components/ui'

const FeedbackItem: React.FC<FeedbackItemProps> = props => {
	const {
		title,
		describe,
		logoPath,
		preview,
		children,
		style,
		ellipsis,
		to,
		href,
		target,
	} = props

	return <Heading level={3}>FeedbackItem</Heading>
}

export { FeedbackItem }
