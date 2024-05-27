import styles from './PageTitle.module.scss'
import PageTitleProps from './PageTitle.interface'

import { Fontbody, Heading } from 'components/ui'

const PageTitleSkeleton: React.FC<PageTitleProps> = (props) => {
	const { title, label, before, ...restProps } = props

	return (
		<div {...restProps} className={styles.root}>
			{before}

			<Heading.Skeleton className="ui-w-84-pct" />

			<div className="ui-flex ui-col ui-gap-4">
				<Fontbody.Skeleton />
				<Fontbody.Skeleton className="ui-w-72-pct" />
			</div>
		</div>
	)
}

export { PageTitleSkeleton }
