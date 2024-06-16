import { useLocation } from 'react-router-dom'
import { useAppSelector } from 'hooks'
import { getNavigationLinks } from 'utils'

import styles from './PageNavigation.module.scss'
import PageNavigationProps from './PageNavigation.interface'

import { Button, Footnote, Fontbody, Tile, Box } from 'components/ui'

import { PageNavigationSkeleton } from './PageNavigationSkeleton'

import {
	Icon28ArrowLeftOutline,
	Icon28ArrowRightOutline,
} from '@vkontakte/icons'

const PageNavigation = (props: PageNavigationProps) => {
	// const { selectLanguage, previousPage, nextPage } = props
	const { selectLanguage } = props

	const storeCvMapData = useAppSelector((state) => state.common.cvMap)
	const currentPathname = useLocation().pathname.replace(/^\//, '')

	const { previousPage, nextPage } = getNavigationLinks(
		currentPathname,
		storeCvMapData ? storeCvMapData.data : null,
		selectLanguage,
	)

	return (
		<Tile>
			<Box YPadding>
				<div className={[styles.root].join(' ')}>
					<Button
						to={
							previousPage.pathname === ''
								? ''
								: previousPage.pathname === '/'
									? previousPage.pathname
									: '/' + previousPage.pathname
						}
						mode={previousPage.pathname === '' ? 'secondary' : 'primary'}
						appearance={previousPage.pathname === '' ? 'neutral' : 'accent'}
						buttonSize="lg"
						before={<Icon28ArrowLeftOutline width={36} height={36} />}
						disabled={previousPage.pathname === '' ? true : false}
						stretched
					/>

					<div className={styles.route}>
						<Footnote className="ui-text-secondary ui-text-truncate">
							{selectLanguage.lang === 'en' ? 'Previous' : 'Предыдущий раздел'}
						</Footnote>

						<Fontbody className="ui-text-truncate">
							{previousPage.name ? previousPage.name : 'N/A'}
						</Fontbody>
					</div>

					<div className={[styles.route, 'ui-text-end'].join(' ')}>
						<Footnote className="ui-text-secondary ui-text-truncate">
							{selectLanguage.lang === 'en' ? 'Next' : 'Следующий раздел'}
						</Footnote>

						<Fontbody className="ui-text-truncate">
							{nextPage.name ? nextPage.name : 'N/A'}
						</Fontbody>
					</div>

					<Button
						to={
							nextPage.pathname === ''
								? ''
								: nextPage.pathname === '/'
									? nextPage.pathname
									: '/' + nextPage.pathname
						}
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
