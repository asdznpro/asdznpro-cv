import styles from './Tile.module.scss'
import TileProps from './Tile.interface'

const Tile: React.FC<TileProps> = props => {
	const { children, padding, className, ...restProps } = props

	return (
		<div
			{...restProps}
			className={[styles.root, className, padding && styles.padding]
				.join(' ')
				.trim()}
		>
			{children}
		</div>
	)
}

export { Tile }
