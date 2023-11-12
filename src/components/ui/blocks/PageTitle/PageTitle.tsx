import styles from './PageTitle.module.scss'
import PageTitleProps from './PageTitle.interface'

import { Fontbody, Heading } from 'components/ui'

const PageTitle: React.FC<PageTitleProps> = props => {
	const { title, describe } = props

	return (
		<div className={styles.root}>
			{title && <Heading>{title}</Heading>}
			{describe && <Fontbody>{describe}</Fontbody>}
		</div>
	)
}

export { PageTitle }
