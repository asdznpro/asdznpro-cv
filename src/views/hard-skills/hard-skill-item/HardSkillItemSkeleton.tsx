import * as React from 'react'

import styles from './HardSkillItem.module.scss'
import HardSkillItemProps from './HardSkillItem.interface'

import { Fontbody, Footnote } from 'components/ui'

const HardSkillItemSkeleton: React.FC<HardSkillItemProps> = (props) => {
	const { ...restProps } = props

	return (
		<div {...restProps} className={styles.skeleton}>
			<div className={[styles.icon, 'ui-skeleton'].join(' ')} />

			<div className={styles.info}>
				<Fontbody.Skeleton className="ui-w-84-pct" />
				<Footnote.Skeleton className="ui-w-60-pct" />
			</div>
		</div>
	)
}

export { HardSkillItemSkeleton }
