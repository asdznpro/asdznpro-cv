import React, { useState } from 'react'
import { useDynamicAlignment } from 'hooks'

import styles from './ExperienceItem.module.scss'
import ExperienceItemProps from './ExperienceItem.interface'

import { Fontbody, Heading, Box, Tile, RouterLink } from 'components/ui'

import { Icon28PictureOutline } from '@vkontakte/icons'

const ExperienceItem: React.FC<ExperienceItemProps> = props => {
	const { title, describe, logoPath, preview, children, ellipsis, to } = props

	const { screenWidth } = useDynamicAlignment()
	const [hasError, setHasError] = useState(false)

	return (
		<Tile className={styles.root}>
			{to && <RouterLink to={to} className={styles.link} />}

			{!hasError && preview && (
				<div className={styles.preview}>
					<img src={preview} alt={title} onError={() => setHasError(true)} />
				</div>
			)}

			<Box YPadding>
				<div className={styles.content}>
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
						<Heading level={3}>{title}</Heading>

						<Fontbody
							level={3}
							className={ellipsis ? styles['describe-ellipsis'] : ''}
							secondary
						>
							{describe}
						</Fontbody>

						{children}
					</div>
				</div>
			</Box>
		</Tile>
	)
}

export { ExperienceItem }
