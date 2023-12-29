import { Link } from 'react-router-dom'

import styles from './Tile.module.scss'
import TileProps from './Tile.interface'

const Tile: React.FC<TileProps> = props => {
	const { children, style, padding, to, href, target } = props

	let Component: React.ElementType = 'div' as React.ElementType
	let additionalProps = {}

	if (href) {
		Component = 'a'
		additionalProps = { href, target, ...additionalProps }
	} else if (to) {
		Component = Link
		additionalProps = { to, target, ...additionalProps }
	} else {
		Component = 'div'
	}

	return (
		<Component
			className={[styles.root, padding && styles.padding].join(' ').trim()}
			{...additionalProps}
			style={style}
		>
			{children}
		</Component>
	)
}

export { Tile }
