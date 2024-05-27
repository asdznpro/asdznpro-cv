import { Link } from 'react-router-dom'

import styles from './AppLink.module.scss'
import AppLinkProps from './AppLink.interface'

const AppLink: React.FC<AppLinkProps> = props => {
	const { to, href, target, children, colorless, className, ...restProps } =
		props

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
		additionalProps = { ...additionalProps }
	}

	return (
		<Component
			{...restProps}
			{...additionalProps}
			className={[styles.root, colorless ? '' : styles.color, className]
				.join(' ')
				.trim()}
		>
			{children}
		</Component>
	)
}

export { AppLink }
