import styles from './Box.module.scss'
import BoxProps from './Box.interface'

const Box: React.FC<BoxProps> = props => {
	const { children, style, YPadding, className } = props

	return (
		<div
			className={[styles.root, YPadding && styles['y-padding'], className]
				.join(' ')
				.trim()}
			style={style}
		>
			{children}
		</div>
	)
}

export { Box }
