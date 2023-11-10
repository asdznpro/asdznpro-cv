import styles from './Section.module.scss'
import SectionProps from './Section.interface'

const Section: React.FC<SectionProps> = props => {
	const { children, style, field, countColumns } = props

	return (
		<section className={styles.root} style={style}>
			<div
				className={[
					styles.inner,
					field ? styles.field : '',
					styles[`width-${countColumns || 12}-columns`],
				]
					.join(' ')
					.trim()}
			>
				<div className={styles.content}>{children}</div>
			</div>
		</section>
	)
}

export { Section }
