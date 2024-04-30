import styles from './Counter.module.scss'
import CounterProps from './Counter.interface'

const Counter: React.FC<CounterProps> = props => {
	const {
		children,
		appearance = 'accent',
		counterSize = 'md',
		className,
		...restProps
	} = props

	return (
		<span
			{...restProps}
			className={[
				styles.root,
				styles[`${appearance}`],
				styles[`size-${counterSize}`],
				className,
			]
				.join(' ')
				.trim()}
		>
			{children}
		</span>
	)
}

export { Counter }
