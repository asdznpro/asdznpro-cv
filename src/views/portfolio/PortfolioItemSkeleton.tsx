import * as React from 'react'

import { useDynamicAlignment } from 'hooks'

import styles from './PortfolioItem.module.scss'
import PortfolioItemProps from './PortfolioItem.interface'

import { Heading } from 'components/ui'

const PortfolioItemSkeleton: React.FC<PortfolioItemProps> = (props) => {
	const { name, to, tags, date, award, src, ...restProps } = props

	const { screenWidth } = useDynamicAlignment()

	return (
		<div {...restProps} className={styles.root}>
			<div className={[styles.preview, 'ui-skeleton'].join(' ')} />

			<div
				className={[styles.info, screenWidth <= 768 && styles['x-padding']]
					.join(' ')
					.trim()}
			>
				<div className="ui-flex ui-col ui-gap-4">
					<Heading.Skeleton level={4} className="ui-w-84-pct" />
					<Heading.Skeleton level={4} className="ui-w-60-pct" />
				</div>
			</div>
		</div>
	)
}

export { PortfolioItemSkeleton }
