import { Link } from 'react-router-dom'

import styles from './AppLink.module.scss'
import AppLinkProps from './AppLink.interface'

const AppLink: React.FC<AppLinkProps> = props => {
	const { to, href, target, children, onClick, flex, colorless, className } =
		props

	let Component: React.ElementType = 'span' as React.ElementType
	let additionalProps = {}

	const modifiedTarget = target && `_${target}`

	if (href) {
		Component = 'a'
		additionalProps = { href, target: modifiedTarget, ...additionalProps }
	} else if (to) {
		Component = Link
		additionalProps = { to, target: modifiedTarget, ...additionalProps }
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
				className,
			]
				.join(' ')
				.trim()}
			{...additionalProps}
		>
			{children}
		</Component>
	)
}

export { AppLink }
