import * as React from 'react'

import { useDynamicAlignment } from 'hooks'

import styles from './ExperienceItem.module.scss'
import ExperienceItemProps from './ExperienceItem.interface'

import { Heading, Box, Tile, Fontbody } from 'components/ui'

const ExperienceItemSkeleton: React.FC<ExperienceItemProps> = (props) => {
	const { className } = props

	const { screenWidth } = useDynamicAlignment()

	return (
		<Tile className={[styles.root, className].join(' ')}>
			{screenWidth < 768 && (
				<div
					className={[styles.preview, 'ui-skeleton ui-h-144-px'].join(' ')}
				/>
			)}

			<Box className={styles.content} YPadding>
				{screenWidth >= 768 && (
					<div className={[styles.logo, 'ui-skeleton'].join(' ')} />
				)}

				<div className={styles.info}>
					<Heading.Skeleton level={3} className="ui-w-72-pct" />

					<div className="ui-flex ui-flex-col ui-gap-4-px">
						<Fontbody.Skeleton level={3} className="ui-w-96-pct" />
						<Fontbody.Skeleton level={3} className="ui-w-84-pct" />
					</div>
				</div>
			</Box>
		</Tile>
	)
}

export { ExperienceItemSkeleton }
