import styles from './Counter.module.scss'
import CounterProps from './Counter.interface'

const Counter: React.FC<CounterProps> = props => {
	const { children, mode, appearance, size, className, style } = props

	return (
		<span
			className={[
				styles.root,
				styles[`${appearance ? appearance : 'accent'}`],
				styles[`size-${size ? size : 'md'}`],
				className,
			]
				.join(' ')
				.trim()}
			style={style}
		>
			{children}
		</span>
	)
}

export { Counter }
