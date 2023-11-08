import styles from './PageTitle.module.scss'
import PageTitleProps from './PageTitle.interface'

import { Fontbody, Heading } from 'components/ui'

const PageTitle: React.FC<PageTitleProps> = props => {
	const { children, describe } = props

	return (
		<div className={styles.root}>
			{/* <Fontbody level={2}>breadcrumbs-item / breadcrumbs-item</Fontbody> */}

			<Heading>{children}</Heading>
			{describe && <Fontbody>{describe}</Fontbody>}
		</div>
	)
}

export { PageTitle }
