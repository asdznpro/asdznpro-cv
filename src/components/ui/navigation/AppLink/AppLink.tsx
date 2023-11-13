import { Link } from 'react-router-dom'

import styles from './AppLink.module.scss'
import AppLinkProps from './AppLink.interface'

const AppLink: React.FC<AppLinkProps> = props => {
	const { to, href, target, children, onClick, flex, colorless } = props

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
			className={[
				styles.root,
				colorless ? '' : styles.color,
				flex && styles.flex,
			].join(' ')}
			{...additionalProps}
		>
			{children}
		</Component>
	)
}

export { AppLink }
