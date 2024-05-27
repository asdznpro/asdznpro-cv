import { Link } from 'react-router-dom'

import styles from './Button.module.scss'
import ButtonProps from './Button.interface'

const Button: React.FC<ButtonProps> = props => {
	const {
		children,
		mode = 'primary',
		appearance = 'accent',
		buttonSize = 'sm',
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
		...restProps
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
		additionalProps = {
			disabled: disabled || noneAction,
			...additionalProps,
		}
	}

	return (
		<Component
			{...restProps}
			{...additionalProps}
			className={[
				styles.root,
				styles[`mode-${mode}`],
				styles[`${appearance}`],
				styles[`size-${buttonSize}`],
				rounded && styles['rounded'],
				(to || href) && disabled && styles['disabled-link'],
				stretched && styles.stretched,
				!children && (!before || !after) ? styles['button-icon'] : '',
				noneAction && styles['none-action'],
				disabled && styles['disabled'],
				className,
			]
				.join(' ')
				.trim()}
		>
			<span className={styles.in}>
				{before && <span className={styles.before}>{before}</span>}

				{children && (
					<span
						className={styles.content}
						style={{
							paddingLeft:
								!before && !after ? '0.48em' : !before && after ? '0.24em' : 0,
							paddingRight:
								!before && !after ? '0.48em' : before && !after ? '0.24em' : 0,
						}}
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
