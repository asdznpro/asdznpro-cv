import React, { useState } from 'react'

import styles from './HardSkillItem.module.scss'
import HardSkillItemProps from './HardSkillItem.interface'

import { Fontbody, Spinner } from 'components/ui'

const HardSkillItem: React.FC<HardSkillItemProps> = props => {
	const { name, image, children, onClick } = props

	const [hasError, setHasError] = useState(false)

	return (
		<div className={styles.root} onClick={onClick}>
			<div className={styles.image}>
				{!hasError && image ? (
					<img src={image} alt={name} onError={() => setHasError(true)} />
				) : (
					<Spinner width={36} height={36} />
				)}
			</div>

			<div className={styles.info}>
				<Fontbody className={styles.name} ellipsis>
					{name}
				</Fontbody>

				{children}
			</div>
		</div>
	)
}

export { HardSkillItem }
