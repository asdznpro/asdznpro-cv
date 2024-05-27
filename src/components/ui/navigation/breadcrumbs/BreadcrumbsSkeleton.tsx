import * as React from 'react'

import { Link, useLocation } from 'react-router-dom'

import styles from './Breadcrumbs.module.scss'
import BreadcrumbsProps from './Breadcrumbs.interface'

import { Fontbody } from 'components/ui'

const BreadcrumbsSkeleton: React.FC<BreadcrumbsProps> = (props) => {
	const { customLabels, selectLanguage, ...restProps } = props

	const location = useLocation()
	const pathnames = location.pathname.split('/').filter((x) => x)

	const breadcrumbPaths = [
		{ path: '/', name: selectLanguage === 'en' ? 'CV' : 'Резюме' },
	]

	pathnames.forEach((_, index) => {
		const path = `/${pathnames.slice(0, index + 1).join('/')}`
		const name =
			customLabels && customLabels.length > index
				? customLabels[index]
				: pathnames[index]

		if (path !== '/') {
			breadcrumbPaths.push({ path, name })
		}
	})

	return (
		<div {...restProps} className={styles.root}>
			<ul className={styles.list}>
				{breadcrumbPaths.map((breadcrumb, index) => {
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
