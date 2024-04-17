import * as React from 'react'

import { useState } from 'react'
import { useDynamicAlignment } from 'hooks'

import styles from './CvLinkItem.module.scss'
import CvLinkItemProps from './CvLinkItem.interface'

import { Box, Tile, RouterLink, CustomCursor } from 'components/ui'

import { Icon28LinkOutline } from '@vkontakte/icons'

const CvLinkItem: React.FC<CvLinkItemProps> = props => {
	const { children, style, to, href, target, backgroundColor } = props

	const { screenWidth } = useDynamicAlignment()
	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	return (
		<Tile
			className={[styles.root, backgroundColor && styles[`${backgroundColor}`]]
				.join(' ')
				.trim()}
			style={style}
		>
			{screenWidth >= 768 && isHovered && <CustomCursor appearance='neutral' />}

			{(to || href) && (
				<RouterLink
					to={to}
					href={href}
					target={target}
					className={styles.link}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				/>
			)}

			<div className={styles.icon}>
				<Icon28LinkOutline width={40} height={40} />
			</div>

			<Box YPadding>{children}</Box>
		</Tile>
	)
}

export { CvLinkItem }
