import styles from './PageTitle.module.scss'
import PageTitleProps from './PageTitle.interface'

import { Breadcrumbs, Fontbody, Heading } from 'components/ui'

const PageTitle: React.FC<PageTitleProps> = props => {
	const { children, describe } = props

	return (
		<div className={styles.root}>
			<Breadcrumbs />

			<Heading>{children}</Heading>
			{describe && <Fontbody>{describe}</Fontbody>}
		</div>
	)
}

export { PageTitle }
