import styles from './Section.module.scss'
import SectionProps from './Section.interface'

const Section: React.FC<SectionProps> = props => {
	const { children, style, fill, countColumns, withoutPadding } = props

	const fillStyle = fill ? styles.fill : ''
	const withoutPaddingStyle = withoutPadding ? '' : styles.padding

	return (
		<section className={styles.root} style={style}>
			<div
				className={[
					styles.inner,
					styles[`width-${countColumns || 12}-columns`],
					withoutPaddingStyle,
				]
					.join(' ')
					.trim()}
			>
				{fill ? <div className={fillStyle}>{children}</div> : <>{children}</>}
			</div>
		</section>
	)
}

export { Section }
