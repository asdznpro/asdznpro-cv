import styles from './PageNavigation.module.scss'
import PageNavigationProps from './PageNavigation.interface'

import { Button, Footnote, Fontbody, Tile, Box } from 'components/ui'

import { PageNavigationSkeleton } from './PageNavigationSkeleton'

import {
	Icon28ArrowLeftOutline,
	Icon28ArrowRightOutline,
} from '@vkontakte/icons'

const PageNavigation = (props: PageNavigationProps) => {
	const { selectLanguage, previousPage, nextPage } = props

	return (
		<Tile>
			<Box YPadding>
				<div className={[styles.root].join(' ')}>
					<Button
						to={previousPage.pathname}
						mode={previousPage.pathname === '' ? 'secondary' : 'primary'}
						appearance={previousPage.pathname === '' ? 'neutral' : 'accent'}
						buttonSize="lg"
						before={<Icon28ArrowLeftOutline width={36} height={36} />}
						disabled={previousPage.pathname === '' ? true : false}
						stretched
					/>

					<div className={styles.route}>
						<Footnote className="ui-text-secondary ui-text-truncate">
							{selectLanguage.lang === 'en'
								? 'Previous Page'
								: 'Предыдущий раздел'}
						</Footnote>

						<Fontbody className="ui-text-truncate">
							{previousPage.title ? previousPage.title : 'N/A'}
						</Fontbody>
					</div>

					<div className={styles.route} style={{ textAlign: 'end' }}>
						<Footnote className="ui-text-secondary ui-text-truncate">
							{selectLanguage.lang === 'en' ? 'Next Page' : 'Следующий раздел'}
						</Footnote>

						<Fontbody className="ui-text-truncate">
							{nextPage.title ? nextPage.title : 'N/A'}
						</Fontbody>
					</div>

					<Button
						to={nextPage.pathname === '' ? '' : nextPage.pathname}
						mode={nextPage.pathname === '' ? 'secondary' : 'primary'}
						appearance={nextPage.pathname === '' ? 'neutral' : 'accent'}
						buttonSize="lg"
						before={<Icon28ArrowRightOutline width={36} height={36} />}
						disabled={nextPage.pathname === '' ? true : false}
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
