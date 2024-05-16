import * as React from 'react'

import styles from './HardSkills.module.scss'
import HardSkillItemProps from './HardSkillItem.interface'

const HardSkillItemSkeleton: React.FC<HardSkillItemProps> = props => {
	const { name, src, children, ...restProps } = props

	return (
		<div {...restProps} className={styles.skeleton}>
			<div className={[styles.skeletonImage, 'ui-skeleton'].join(' ')} />

			<div className={styles.skeletonInfo}>
				<span className={[styles.skeletonInfoName, 'ui-skeleton'].join(' ')} />
				<span
					className={[styles.skeletonInfoCaption, 'ui-skeleton'].join(' ')}
				/>
			</div>
		</div>
	)
}

export { HardSkillItemSkeleton }
