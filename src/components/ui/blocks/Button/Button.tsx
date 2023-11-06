import { Link } from 'react-router-dom'

import styles from './Button.module.scss'
import ButtonProps from './Button.interface'

const Button: React.FC<ButtonProps> = props => {
	const {
		children,
		mode,
		appearance,
		size,
		corners,
		disabled,
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
				stretched ? styles.stretched : '',
				styles[`mode-${mode ? mode : 'primary'}`],
				styles[`${appearance ? appearance : 'accent'}`],
				styles[`size-${size ? size : 'md'}`],
				(to || href) && disabled ? styles['none-action'] : '',
				styles[`corners-${corners ? corners : ''}`],
			]
				.join(' ')
				.trim()}
			style={style}
			{...additionalProps}
		>
			<span className={[styles.in].join(' ').trim()}>
				<span className={styles.before}>{before}</span>
				<span className={styles.content}>{children}</span>
				<span className={styles.after}>{after}</span>
			</span>
		</Component>
	)
}

export { Button }
