import styles from './PageNavigationSkeleton.module.scss'

import { Button, Footnote, Fontbody, Tile, Box } from 'components/ui'

const PageNavigationSkeleton: React.FC = () => {
	return (
		<Tile>
			<Box YPadding>
				<div className={[styles.root].join(' ')}>
					<span className={[styles.button, 'ui-skeleton'].join(' ')} />

					<div className={styles.route}>
						<span className={[styles.routeTitle, 'ui-skeleton'].join(' ')} />
						<span className={[styles.routeValue, 'ui-skeleton'].join(' ')} />
					</div>

					<div className={styles.route} style={{ alignItems: 'end' }}>
						<span className={[styles.routeTitle, 'ui-skeleton'].join(' ')} />
						<span className={[styles.routeValue, 'ui-skeleton'].join(' ')} />
					</div>

					<span className={[styles.button, 'ui-skeleton'].join(' ')} />
				</div>
			</Box>
		</Tile>
	)
}

export { PageNavigationSkeleton }
