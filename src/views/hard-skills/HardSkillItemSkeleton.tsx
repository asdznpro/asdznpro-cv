import * as React from 'react'

import styles from './HardSkills.module.scss'
import HardSkillItemProps from './HardSkillItem.interface'
import { Fontbody, Footnote } from 'components/ui'

const HardSkillItemSkeleton: React.FC<HardSkillItemProps> = (props) => {
	const { name, src, children, ...restProps } = props

	return (
		<div {...restProps} className={styles.skeleton}>
			<div className={[styles.skeletonImage, 'ui-skeleton'].join(' ')} />

			<div className={styles.skeletonInfo}>
				<Fontbody.Skeleton
					style={{
						width: '84%',
					}}
				/>
				<Footnote.Skeleton
					style={{
						width: '60%',
					}}
				/>
			</div>
		</div>
	)
}

export { HardSkillItemSkeleton }
