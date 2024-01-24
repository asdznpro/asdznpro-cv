import { Link } from 'react-router-dom'

import styles from './RouterLink.module.scss'
import RouterLinkProps from './RouterLink.interface'

const RouterLink: React.FC<RouterLinkProps> = props => {
	const { to, href, target, children, onClick, className } = props

	let Component: React.ElementType = 'span' as React.ElementType
	let additionalProps = {}

	if (href) {
		Component = 'a'
		additionalProps = { href, target, ...additionalProps }
	} else if (to) {
		Component = Link
		additionalProps = { to, target, ...additionalProps }
	} else {
		Component = 'span'
		additionalProps = { onClick, ...additionalProps }
	}

	return (
		<Component
			onClick={onClick}
			className={[styles.root, className].join(' ').trim()}
			{...additionalProps}
		>
			{children}
		</Component>
	)
}

export { RouterLink }
