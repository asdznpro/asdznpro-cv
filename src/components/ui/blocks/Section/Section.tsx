import styles from './Section.module.scss'
import SectionProps from './Section.interface'

const Section: React.FC<SectionProps> = props => {
	const { children, style, countColumns } = props

	return (
		<section
			className={[styles.root, styles[`width-${countColumns || 12}-columns`]]
				.join(' ')
				.trim()}
			style={style}
		>
			<div className={[styles.content].join(' ').trim()}>{children}</div>
		</section>
	)
}

export { Section }
