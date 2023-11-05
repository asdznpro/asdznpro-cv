import styles from './Section.module.scss'
import SectionProps from './Section.interface'

const Section: React.FC<SectionProps> = props => {
	const { children, style, noField, countColumns } = props

	const InnerContent = (
		<div
			className={[styles.inner, styles[`width-${countColumns || 12}-columns`]]
				.join(' ')
				.trim()}
		>
			{children}
		</div>
	)

	return (
		<section
			className={[styles.root, noField ? styles.padding : ''].join(' ').trim()}
			style={style}
		>
			{noField ? (
				InnerContent
			) : (
				<div className={noField ? '' : styles.field}>{InnerContent}</div>
			)}
		</section>
	)
}

export { Section }
