import styles from './PageNavigation.module.scss'
import PageNavigationProps from './PageNavigation.interface'

import { Button, Footnote, Fontbody, Tile, Box } from 'components/ui'

import { PageNavigationSkeleton } from './PageNavigationSkeleton'

import {
	Icon28ArrowLeftOutline,
	Icon28ArrowRightOutline,
} from '@vkontakte/icons'

const PageNavigation = (props: PageNavigationProps) => {
	const { children } = props

	return (
		<Tile>
			<Box YPadding>
				<div className={[styles.root].join(' ')}>
					<Button
						buttonSize='lg'
						before={<Icon28ArrowLeftOutline width={36} height={36} />}
						stretched
					/>
					<div className={styles.route}>
						<Footnote className='ui-text-secondary ui-text-truncate'>
							Предыдущий раздел
						</Footnote>

						<Fontbody className='ui-text-truncate'>
							previous-page-title
						</Fontbody>
					</div>

					<div className={styles.route} style={{ textAlign: 'end' }}>
						<Footnote className='ui-text-secondary ui-text-truncate'>
							Следующий раздел
						</Footnote>

						<Fontbody className='ui-text-truncate'>next-page-title</Fontbody>
					</div>
					<Button
						mode='secondary'
						appearance='neutral'
						buttonSize='lg'
						before={<Icon28ArrowRightOutline width={36} height={36} />}
						disabled
						stretched
					/>
				</div>
			</Box>
		</Tile>
	)
}

PageNavigation.Skeleton = PageNavigationSkeleton
PageNavigation.Skeleton.displayName = 'PageNavigation.Skeleton'
PageNavigation.displayName = 'PageNavigation'

export { PageNavigation }
