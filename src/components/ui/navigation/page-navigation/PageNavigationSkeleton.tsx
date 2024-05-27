import styles from './PageNavigationSkeleton.module.scss'

import { Button, Footnote, Fontbody, Tile, Box } from 'components/ui'

const PageNavigationSkeleton: React.FC = () => {
	return (
		<Tile>
			<Box YPadding>
				<div className={[styles.root].join(' ')}>
					<span className={[styles.button, 'ui-skeleton'].join(' ')} />

					<div className={styles.route}>
						<Footnote.Skeleton
							style={{
								width: '60%',
							}}
						/>
						<Fontbody.Skeleton
							style={{
								width: '84%',
							}}
						/>
					</div>

					<div className={styles.route} style={{ alignItems: 'end' }}>
						<Footnote.Skeleton
							style={{
								width: '60%',
							}}
						/>
						<Fontbody.Skeleton
							style={{
								width: '84%',
							}}
						/>
					</div>

					<span className={[styles.button, 'ui-skeleton'].join(' ')} />
				</div>
			</Box>
		</Tile>
	)
}

export { PageNavigationSkeleton }
