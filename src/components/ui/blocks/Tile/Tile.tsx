import styles from './Tile.module.scss'
import TileProps from './Tile.interface'

const Tile: React.FC<TileProps> = props => {
	const { children, style, padding, className } = props

	return (
		<div
			className={[styles.root, className, padding && styles.padding]
				.join(' ')
				.trim()}
			style={style}
		>
			{children}
		</div>
	)
}

export { Tile }
