import { useState } from 'react'

import styles from './Avatar.module.scss'
import AvatarProps from './Avatar.interface'

import { AvatarSkeleton } from './AvatarSkeleton'
import { Icon28UserOutline } from '@vkontakte/icons'

const Avatar = (props: AvatarProps) => {
	const { src, name, width, height, className, ...restProps } = props

	const [hasError, setHasError] = useState(false)

	return (
		<div {...restProps} className={[styles.root, className].join(' ')}>
			<div
				className={styles.image}
				style={{ width: width ? width : 196, height: height ? height : 196 }}
			>
				{!hasError && src ? (
					<img src={src} alt={name} onError={() => setHasError(true)} />
				) : (
					<Icon28UserOutline width={48} height={48} />
				)}
			</div>
		</div>
	)
}

Avatar.Skeleton = AvatarSkeleton
Avatar.Skeleton.displayName = 'Avatar.Skeleton'

Avatar.displayName = 'Avatar'

export { Avatar }
