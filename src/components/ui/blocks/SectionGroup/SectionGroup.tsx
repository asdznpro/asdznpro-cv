import styles from './SectionGroup.module.scss'
import SectionGroupProps from './SectionGroup.interface'

const SectionGroup: React.FC<SectionGroupProps> = props => {
	const { children, style, gap } = props

	return (
		<div
			className={[styles.root, styles[`gap-${gap ? gap : 'md'}`]]
				.join(' ')
				.trim()}
			style={style}
		>
			{children}
		</div>
	)
}

export { SectionGroup }
