import styles from './PageTitle.module.scss'
import PageTitleProps from './PageTitle.interface'

import { Fontbody, Heading } from 'components/ui'

const PageTitle: React.FC<PageTitleProps> = props => {
	const { title, label, before, ...restProps } = props

	return (
		<div {...restProps} className={styles.root}>
			{before}

			{title && <Heading className='ui-text-uppercase'>{title}</Heading>}
			{label && <Fontbody>{label}</Fontbody>}
		</div>
	)
}

export { PageTitle }
