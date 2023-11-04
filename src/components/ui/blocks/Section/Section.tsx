import styles from './Section.module.scss'
import SectionProps from './Section.interface'

const Section: React.FC<SectionProps> = props => {
	const { children, style, noField, countColumns } = props

	return (
		<section className={styles.root} style={style}>
			<div
				className={[styles.wrapper, noField ? '' : styles.field]
					.join(' ')
					.trim()}
			>
				<div
					className={[
						styles.inner,
						styles[`width-${countColumns || 12}-columns`],
					]
						.join(' ')
						.trim()}
				>
					{children}
				</div>
			</div>
		</section>
	)
}

export { Section }
