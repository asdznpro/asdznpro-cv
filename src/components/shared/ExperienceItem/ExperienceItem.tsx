import React, { useState } from 'react'
import { useDynamicAlignment } from 'hooks'

import styles from './ExperienceItem.module.scss'
import ExperienceItemProps from './ExperienceItem.interface'

import { Fontbody, Heading, Section, Spinner, Box, Tile } from 'components/ui'

const ExperienceItem: React.FC<ExperienceItemProps> = props => {
	const {
		title,
		describe,
		logoPath,
		preview,
		children,
		style,
		ellipsis,
		to,
		href,
		target,
	} = props

	const { screenWidth } = useDynamicAlignment()
	const [hasError, setHasError] = useState(false)

	return (
		<Section
			// top={
			// 	!hasError &&
			// 	preview && (
			// 		<div className={styles.preview}>
			// 			<img src={preview} alt={title} onError={() => setHasError(true)} />
			// 		</div>
			// 	)
			// }
			countColumns={10}
		>
			<Tile to={to} href={href} target={target}>
				{!hasError && preview && (
					<div className={styles.preview}>
						<img src={preview} alt={title} onError={() => setHasError(true)} />
					</div>
				)}

				<Box YPadding>
					<div className={styles.root} style={style}>
						{screenWidth >= 768 && (
							<div className={styles.logo}>
								{logoPath ? (
									<img src={logoPath} alt={title} />
								) : (
									<Spinner
										width={36}
										height={36}
										style={{ margin: '0 auto' }}
									/>
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
		</Section>
	)
}

export { ExperienceItem }
