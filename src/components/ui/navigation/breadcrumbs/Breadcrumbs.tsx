import * as React from 'react'

import { Link, useLocation } from 'react-router-dom'

import styles from './Breadcrumbs.module.scss'
import BreadcrumbsProps from './Breadcrumbs.interface'

import { BreadcrumbsSkeleton } from './BreadcrumbsSkeleton'
import { Fontbody } from 'components/ui'

const Breadcrumbs = (props: BreadcrumbsProps) => {
	const { customLabels, selectLanguage, ...restProps } = props

	const location = useLocation()
	const pathnames = location.pathname.split('/').filter((x) => x)

	const breadcrumbPaths = [
		{ path: '/', name: selectLanguage.lang === 'en' ? 'CV' : 'Резюме' },
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
			<ul
				aria-label="breadcrumbs"
				itemScope
				itemType="https://schema.org/BreadcrumbList"
				className={styles.list}
			>
				{breadcrumbPaths.map((breadcrumb, index) => {
					const isLast = index === breadcrumbPaths.length - 1

					let Component: React.ElementType = 'div' as React.ElementType
					let additionalProps = {}

					if (isLast) {
						Component = 'div'
						additionalProps = {}
					} else {
						Component = Link
						additionalProps = { to: breadcrumb.path }
					}

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

							<li
								itemScope
								itemProp="itemListElement"
								itemType="https://schema.org/ListItem"
								className={[styles.link, isLast ? styles.disabled : '']
									.join(' ')
									.trim()}
							>
								<Component {...additionalProps} itemProp="item">
									<Fontbody
										level={2}
										itemProp="name"
										className={isLast ? '' : 'ui-text-secondary'}
									>
										{breadcrumb.name}
									</Fontbody>
								</Component>
								<meta itemProp="position" content={(index + 1).toString()} />
							</li>
						</React.Fragment>
					)
				})}
			</ul>
		</div>
	)
}

Breadcrumbs.Skeleton = BreadcrumbsSkeleton
Breadcrumbs.Skeleton.displayName = 'Breadcrumbs.Skeleton'

Breadcrumbs.displayName = 'Breadcrumbs'

export { Breadcrumbs }
