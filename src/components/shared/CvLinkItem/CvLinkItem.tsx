import styles from './CvLinkItem.module.scss'
import CvLinkItemProps from './CvLinkItem.interface'

import { Box, Tile, RouterLink } from 'components/ui'

import { Icon28LinkOutline } from '@vkontakte/icons'

const CvLinkItem: React.FC<CvLinkItemProps> = props => {
	const { children, style, to, href, target, backgroundColor } = props

	return (
		<Tile
			className={[styles.root, backgroundColor && styles[`${backgroundColor}`]]
				.join(' ')
				.trim()}
			style={style}
		>
			{(to || href) && (
				<RouterLink
					to={to}
					href={href}
					target={target}
					className={styles.link}
				/>
			)}

			<Icon28LinkOutline width={40} height={40} />

			<Box YPadding>{children}</Box>
		</Tile>
	)
}

export { CvLinkItem }
