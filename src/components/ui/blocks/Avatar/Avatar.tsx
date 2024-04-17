import * as React from 'react'
import { useState } from 'react'

import styles from './Avatar.module.scss'
import AvatarProps from './Avatar.interface'

import { Heading, Spinner } from 'components/ui'

const Avatar: React.FC<AvatarProps> = props => {
	const { image, name, width, height } = props

	const [hasError, setHasError] = useState(false)

	return (
		<div className={styles.root}>
			<div
				className={styles.image}
				style={{ width: width ? width : 196, height: height ? height : 196 }}
			>
				{!hasError && image ? (
					<img src={image} alt={name} onError={() => setHasError(true)} />
				) : name ? (
					<Heading level={2}>{name}</Heading>
				) : (
					<Spinner width={36} height={36} />
				)}
			</div>
		</div>
	)
}

export { Avatar }
