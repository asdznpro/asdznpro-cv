import * as React from 'react'

import { useLocation } from 'react-router-dom'

import styles from './Breadcrumbs.module.scss'
import BreadcrumbsProps from './Breadcrumbs.interface'

import { Fontbody } from 'components/ui'

type BreadcrumbsSkeletonProps = Omit<
	BreadcrumbsProps,
	'customLabels' | 'selectLanguage'
>

const BreadcrumbsSkeleton: React.FC<BreadcrumbsSkeletonProps> = (props) => {
	const { ...restProps } = props

	const location = useLocation()
	const pathnames = location.pathname.split('/').filter((x) => x)

	const breadcrumbPaths = [{ path: '/' }]

	pathnames.forEach((_, index) => {
		const path = `/${pathnames.slice(0, index + 1).join('/')}`

		if (path !== '/') {
			breadcrumbPaths.push({ path })
		}
	})

	return (
		<div {...restProps} className={styles.root}>
			<ul className={styles.list}>
				{breadcrumbPaths.map((_, index) => {
					return (
						<React.Fragment key={index}>
							{index > 0 && (
								<Fontbody
									className={[styles.separator, 'ui-text-secondary'].join(' ')}
									level={2}
								>
									/
								</Fontbody>
							)}

							<li>
								<Fontbody.Skeleton level={2} className="ui-w-120-px" />
							</li>
						</React.Fragment>
					)
				})}
			</ul>
		</div>
	)
}

export { BreadcrumbsSkeleton }
