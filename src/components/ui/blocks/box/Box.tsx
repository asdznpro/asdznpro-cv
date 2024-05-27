import styles from './Box.module.scss'
import BoxProps from './Box.interface'

const Box: React.FC<BoxProps> = props => {
	const { children, YPadding, className, ...restProps } = props

	return (
		<div
			{...restProps}
			className={[styles.root, YPadding && styles['y-padding'], className]
				.join(' ')
				.trim()}
		>
			{children}
		</div>
	)
}

export { Box }
