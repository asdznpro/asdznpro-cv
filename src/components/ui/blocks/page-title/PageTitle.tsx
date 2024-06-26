import styles from './PageTitle.module.scss'
import PageTitleProps from './PageTitle.interface'

import { PageTitleSkeleton } from './PageTitleSkeleton'
import { Fontbody, Heading } from 'components/ui'

const PageTitle = (props: PageTitleProps) => {
	const { title, label, before, ...restProps } = props

	return (
		<div {...restProps} className={styles.root}>
			{before}

			{title && <Heading className="ui-text-uppercase">{title}</Heading>}
			{label && <Fontbody>{label}</Fontbody>}
		</div>
	)
}

PageTitle.Skeleton = PageTitleSkeleton
PageTitle.Skeleton.displayName = 'PageTitle.Skeleton'

PageTitle.displayName = 'PageTitle'

export { PageTitle }
