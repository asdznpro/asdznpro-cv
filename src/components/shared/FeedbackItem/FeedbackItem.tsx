import * as React from 'react'
import { useState } from 'react'

import styles from './FeedbackItem.module.scss'
import FeedbackItemProps from './FeedbackItem.interface'

import { Box, Fontbody, Footnote, Heading, Tile } from 'components/ui'

import { Icon28UserOutline } from '@vkontakte/icons'

const FeedbackItem: React.FC<FeedbackItemProps> = props => {
	const { avatar, fullName, jobTitle, value, children } = props
	const [hasError, setHasError] = useState(false)

	return (
		<Tile>
			<Box YPadding>
				<div className={styles.person}>
					{avatar && (
						<div className={styles.avatar}>
							{!hasError ? (
								<img
									src={avatar}
									alt={fullName}
									onError={() => setHasError(true)}
								/>
							) : (
								<Icon28UserOutline width={36} height={36} />
							)}
						</div>
					)}

					<div className={styles.info}>
						<Heading level={4} wideLevel={3} noCaps ellipsis>
							{fullName}
						</Heading>

						<Footnote secondary>{jobTitle}</Footnote>
					</div>
				</div>

				<Fontbody level={2}>{value}</Fontbody>

				{children}
			</Box>
		</Tile>
	)
}

export { FeedbackItem }
