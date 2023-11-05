import { Link } from 'react-router-dom'

import styles from './AppLink.module.scss'
import AppLinkProps from './AppLink.interface'

const AppLink: React.FC<AppLinkProps> = props => {
	const { to, target, children, onClick, flex, colorless } = props

	if (to) {
		return (
			<Link
				to={to}
				target={`_${target || 'self'}`}
				className={[
					styles.root,
					flex ? styles.flex : '',
					colorless ? '' : styles.color,
				].join(' ')}
			>
				{children}
			</Link>
		)
	} else {
		return (
			<span
				onClick={onClick}
				className={[
					styles.root,
					flex ? styles.flex : '',
					colorless ? '' : styles.color,
				].join(' ')}
			>
				{children}
			</span>
		)
	}
}

export { AppLink }
