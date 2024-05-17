import * as React from 'react'

import { useState } from 'react'
import { useDynamicAlignment } from 'hooks'

import styles from './CvLinkItemSkeleton.module.scss'
import CvLinkItemProps from './CvLinkItem.interface'

import { Box, Tile, RouterLink, CustomCursor, Heading } from 'components/ui'

const CvLinkItemSkeleton: React.FC<CvLinkItemProps> = (props) => {
	const { children, to, href, target, backgroundColor, ...restProps } = props

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
			{...restProps}
			className={[styles.root, 'ui-skeleton'].join(' ').trim()}
		>
			<RouterLink
				className={styles.link}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			/>

			<div className={[styles.icon, 'ui-skeleton'].join(' ').trim()} />

			<Heading.Skeleton level={3} />

			{screenWidth >= 768 && isHovered && <CustomCursor appearance="neutral" />}

			<Box YPadding>
				<Heading.Skeleton
					level={3}
					style={{
						width: '84%',
					}}
				/>
			</Box>
		</Tile>
	)
}

export { CvLinkItemSkeleton }
