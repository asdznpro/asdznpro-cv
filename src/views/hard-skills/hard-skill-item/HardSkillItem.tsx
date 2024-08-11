import * as React from 'react'
import { useState } from 'react'

import styles from './HardSkillItem.module.scss'
import HardSkillItemProps from './HardSkillItem.interface'

import { Fontbody, Spinner } from 'components/ui'

const HardSkillItem: React.FC<HardSkillItemProps> = (props) => {
	const { name, src, children, ...restProps } = props

	const [hasError, setHasError] = useState(false)

	return (
		<div {...restProps} className={styles.root}>
			<div className={styles.icon}>
				{!hasError && src ? (
					<img src={src} alt={name} onError={() => setHasError(true)} />
				) : (
					<Spinner width={36} height={36} />
				)}
			</div>

			<div className={styles.info}>
				<Fontbody className={[styles.name, 'ui-text-truncate'].join(' ')}>
					{name}
				</Fontbody>

				{children}
			</div>
		</div>
	)
}

export { HardSkillItem }
