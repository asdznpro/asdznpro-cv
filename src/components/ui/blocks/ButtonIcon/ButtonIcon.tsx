import { Link } from 'react-router-dom'

import styles from './ButtonIcon.module.scss'
import ButtonIconProps from './ButtonIcon.interface'

const ButtonIcon: React.FC<ButtonIconProps> = props => {
	const {
		children,
		mode,
		appearance,
		size,
		rounded,
		disabled,
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
				(to || href) && disabled && styles['none-action'],
			]
				.join(' ')
				.trim()}
			style={style}
			{...additionalProps}
		>
			<span className={styles.in}>{children}</span>
		</Component>
	)
}

export { ButtonIcon }
