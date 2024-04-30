import styles from './Section.module.scss'
import SectionProps from './Section.interface'

const Section: React.FC<SectionProps> = props => {
	const { children, countColumns = 12, ...restProps } = props

	return (
		<section
			{...restProps}
			className={[styles.root, `ui-max-w-${countColumns}-cols`]
				.join(' ')
				.trim()}
		>
			<div className={styles.content}>{children}</div>
		</section>
	)
}

export { Section }
