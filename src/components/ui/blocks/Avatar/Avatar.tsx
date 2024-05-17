import * as React from 'react'
import { useState } from 'react'

import styles from './Avatar.module.scss'
import AvatarProps from './Avatar.interface'

import { AvatarSkeleton } from './AvatarSkeleton'
import { Heading, Spinner } from 'components/ui'

const Avatar = (props: AvatarProps) => {
	const { src, name, width, height, ...restProps } = props

	const [hasError, setHasError] = useState(false)

	return (
		<div {...restProps} className={styles.root}>
			<div
				className={styles.image}
				style={{ width: width ? width : 196, height: height ? height : 196 }}
			>
				{!hasError && src ? (
					<img src={src} alt={name} onError={() => setHasError(true)} />
				) : name ? (
					<Heading level={2}>{name}</Heading>
				) : (
					<Spinner width={36} height={36} />
				)}
			</div>
		</div>
	)
}

Avatar.Skeleton = AvatarSkeleton
Avatar.Skeleton.displayName = 'Avatar.Skeleton'

Avatar.displayName = 'Avatar'

export { Avatar }
