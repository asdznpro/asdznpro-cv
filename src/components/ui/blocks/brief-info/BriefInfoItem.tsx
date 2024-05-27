import * as React from 'react'
import { useState } from 'react'

import styles from './BriefInfo.module.scss'
import { CommonInfoModel } from 'models'

import { AppLink, Fontbody } from 'components/ui'

interface BriefInfoItemProps extends CommonInfoModel {
	level?: 1 | 2 | 3 | undefined
}

const BriefInfoItem: React.FC<BriefInfoItemProps> = (props) => {
	const { title, icon, value, href, level = 1, ...restProps } = props

	const [hasError, setHasError] = useState(false)

	return (
		<div {...restProps} className={styles.item}>
			<div className={styles.title}>
				<Fontbody level={level} className="ui-text-secondary">
					{title ? title : 'title-info:'}
				</Fontbody>
			</div>

			<div className={styles.value}>
				{!hasError && icon && (
					<div className={styles.icon}>
						<img src={icon} alt={value} onError={() => setHasError(true)} />
					</div>
				)}

				<Fontbody level={level}>
					{value ? value : 'text-info'}{' '}
					{href && (
						<AppLink href={href} target="_blank">
							#
						</AppLink>
					)}
				</Fontbody>
			</div>
		</div>
	)
}

export { BriefInfoItem }
