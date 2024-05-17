import * as React from 'react'
import { useState } from 'react'

import styles from './AvatarSkeleton.module.scss'
import AvatarProps from './Avatar.interface'

const AvatarSkeleton: React.FC<AvatarProps> = (props) => {
	const { src, name, width, height, ...restProps } = props

	return (
		<div {...restProps} className={styles.root}>
			<div
				className={[styles.image, 'ui-skeleton'].join(' ')}
				style={{ width: width ? width : 196, height: height ? height : 196 }}
			/>
		</div>
	)
}

export { AvatarSkeleton }
