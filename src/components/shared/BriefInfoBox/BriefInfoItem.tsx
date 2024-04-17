import * as React from 'react'
import { useState } from 'react'

import styles from './BriefInfoBox.module.scss'
import CommonInfo from 'models/Common.interface'

import { AppLink, Fontbody } from 'components/ui'

const BriefInfoItem: React.FC<CommonInfo> = props => {
	const { title, icon, value, href } = props

	const [hasError, setHasError] = useState(false)

	return (
		<div className={styles.item}>
			<div className={styles.title}>
				<Fontbody secondary>{title ? title : 'title-info:'}</Fontbody>
			</div>

			<div className={styles.value}>
				{!hasError && icon && (
					<div className={styles.icon}>
						<img src={icon} alt={value} onError={() => setHasError(true)} />
					</div>
				)}

				<Fontbody>
					{value ? value : 'text-info'}{' '}
					{href && (
						<AppLink href={href} target='blank'>
							#
						</AppLink>
					)}
				</Fontbody>
			</div>
		</div>
	)
}

export { BriefInfoItem }
