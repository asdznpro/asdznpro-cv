import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import styles from './Breadcrumbs.module.scss'
import BreadcrumbsProps from './Breadcrumbs.interface'

import { Fontbody } from 'components/ui'

const Breadcrumbs: React.FC<BreadcrumbsProps> = props => {
	const { children } = props

	const location = useLocation()
	const pathnames = location.pathname.split('/').filter(x => x)

	const breadcrumbPaths = [{ path: '/', name: 'Резюме' }]

	pathnames.forEach((pathname, index) => {
		const path = `/${pathnames.slice(0, index + 1).join('/')}`
		const name = pathname

		if (path !== '/') {
			breadcrumbPaths.push({ path, name })
		}
	})

	return (
		<div aria-label='breadcrumbs' className={styles.root}>
			{breadcrumbPaths.map((breadcrumb, index) => {
				const isLast = index === breadcrumbPaths.length - 1
				return (
					<React.Fragment key={index}>
						{index > 0 && (
							<Fontbody level={2} secondary>
								/
							</Fontbody>
						)}

						{isLast ? (
							<Fontbody level={2}>{breadcrumb.name}</Fontbody>
						) : (
							<Link to={breadcrumb.path}>
								<Fontbody className={styles.link} level={2} secondary>
									{breadcrumb.name}
								</Fontbody>
							</Link>
						)}
					</React.Fragment>
				)
			})}
		</div>
	)
}

export { Breadcrumbs }
