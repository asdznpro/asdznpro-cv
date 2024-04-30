import styles from './BriefInfo.module.scss'
import BriefInfoProps from './BriefInfo.interface'

import { BriefInfoItem } from './BriefInfoItem'

const BriefInfo = (props: BriefInfoProps) => {
	const { children, ...restProps } = props

	return (
		<div {...restProps} className={styles.root}>
			{children}
		</div>
	)
}

BriefInfo.Item = BriefInfoItem
BriefInfo.Item.displayName = 'BriefInfo.Item'

BriefInfo.Box = BriefInfo
BriefInfo.Box.displayName = 'BriefInfo.Box'

BriefInfo.displayName = 'BriefInfo'

export { BriefInfo }
