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
		className,
		to,
		href,
		target,
		onClick,
		style,
	} = props

	let Component: React.ElementType = 'button' as React.ElementType
	let additionalProps = {}

	const modifiedTarget = target && `_${target}`

	if (href) {
		Component = 'a'
		additionalProps = { href, target: modifiedTarget, ...additionalProps }
	} else if (to) {
		Component = Link
		additionalProps = { to, target: modifiedTarget, ...additionalProps }
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
				!children && (!before || !after) ? styles['button-icon'] : '',
				className,
			]
				.join(' ')
				.trim()}
			style={style}
			{...additionalProps}
		>
			<span className={styles.in}>
				{before && <span className={styles.before}>{before}</span>}

				{children && (
					<span
						className={styles.content}
						style={
							before
								? { paddingRight: '6px' }
								: after
								? { paddingLeft: '6px' }
								: {}
						}
					>
						{children}
					</span>
				)}

				{after && <span className={styles.after}>{after}</span>}
			</span>
		</Component>
	)
}

export { Button }
