import * as React from 'react'
import { useState } from 'react'

import styles from './BriefInfo.module.scss'
import { CommonInfoModel } from 'models'

import { AppLink, Fontbody } from 'components/ui'

const BriefInfoItem: React.FC<CommonInfoModel> = props => {
	const { title, icon, value, href, ...restProps } = props

	const [hasError, setHasError] = useState(false)

	return (
		<div {...restProps} className={styles.item}>
			<div className={styles.title}>
				<Fontbody level={1} className='ui-text-secondary'>
					{title ? title : 'title-info:'}
				</Fontbody>
			</div>

			<div className={styles.value}>
				{!hasError && icon && (
					<div className={styles.icon}>
						<img src={icon} alt={value} onError={() => setHasError(true)} />
					</div>
				)}

				<Fontbody level={1}>
					{value ? value : 'text-info'}{' '}
					{href && (
						<AppLink href={href} target='_blank'>
							#
						</AppLink>
					)}
				</Fontbody>
			</div>
		</div>
	)
}

export { BriefInfoItem }
