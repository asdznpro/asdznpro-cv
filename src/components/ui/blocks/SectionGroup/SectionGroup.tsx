import styles from './SectionGroup.module.scss'
import SectionGroupProps from './SectionGroup.interface'

const SectionGroup: React.FC<SectionGroupProps> = props => {
	const { children, style, gap } = props

	return (
		<section
			className={[styles.root, styles[`gap-${gap ? gap : 'md'}`]]
				.join(' ')
				.trim()}
			style={style}
		>
			{children}
		</section>
	)
}

export { SectionGroup }
