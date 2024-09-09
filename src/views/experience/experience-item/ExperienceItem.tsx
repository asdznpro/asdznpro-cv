import * as React from 'react'

import { useState } from 'react'
import { useDynamicAlignment } from 'hooks'

import styles from './ExperienceItem.module.scss'
import ExperienceItemProps from './ExperienceItem.interface'

import { Heading, Box, Tile, RouterLink, CustomCursor } from 'components/ui'

import { Icon28PictureOutline } from '@vkontakte/icons'

const ExperienceItem: React.FC<ExperienceItemProps> = (props) => {
	const { title, logoPath, preview, children, to, className } = props

	const { screenWidth } = useDynamicAlignment()
	const [hasError, setHasError] = useState(false)
	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	return (
		<Tile className={[styles.root, className].join(' ')}>
			{screenWidth >= 768 && isHovered && <CustomCursor />}

			{to && (
				<RouterLink
					to={to}
					className={styles.link}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				/>
			)}

			{!hasError && preview && screenWidth < 768 && (
				<div className={styles.preview}>
					<img src={preview} alt={title} onError={() => setHasError(true)} />
				</div>
			)}

			<Box className={styles.content} YPadding>
				{screenWidth >= 768 && (
					<div className={styles.logo}>
						{!hasError && logoPath ? (
							<img
								src={logoPath}
								alt={title}
								onError={() => setHasError(true)}
							/>
						) : (
							<Icon28PictureOutline width={40} height={40} />
						)}
					</div>
				)}

				<div className={styles.info}>
					<Heading level={3} className="ui-text-uppercase">
						{title}
					</Heading>

					{children}
				</div>
			</Box>
		</Tile>
	)
}

export { ExperienceItem }
