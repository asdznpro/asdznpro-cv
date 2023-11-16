import { Link } from 'react-router-dom'

import styles from './Button.module.scss'
import ButtonProps from './Button.interface'

const Button: React.FC<ButtonProps> = props => {
	const {
		children,
		mode,
		appearance,
		size,
		rounded,
		disabled,
		noneAction,
		stretched,
		before,
		after,
		to,
		href,
		target,
		onClick,
		style,
	} = props

	let Component: React.ElementType = 'button' as React.ElementType
	let additionalProps = {}

	if (href) {
		Component = 'a'
		additionalProps = { href, target, ...additionalProps }
	} else if (to) {
		Component = Link
		additionalProps = { to, target, ...additionalProps }
	} else {
		Component = 'button'
		additionalProps = { onClick, disabled, ...additionalProps }
	}

	return (
		<Component
			className={[
				styles.root,
				styles[`mode-${mode ? mode : 'primary'}`],
				styles[`${appearance ? appearance : 'accent'}`],
				styles[`size-${size ? size : 'md'}`],
				rounded && styles['rounded'],
				(to || href) && disabled && styles['disabled-link'],
				noneAction && styles['none-action'],
				stretched && styles.stretched,
			]
				.join(' ')
				.trim()}
			style={style}
			{...additionalProps}
		>
			<span className={styles.in}>
				{before && <span className={styles.before}>{before}</span>}
				<span className={styles.content}>{children}</span>
				{after && <span className={styles.after}>{after}</span>}
			</span>
		</Component>
	)
}

export { Button }
