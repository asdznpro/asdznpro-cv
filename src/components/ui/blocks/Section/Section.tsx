import { Link } from 'react-router-dom'

import styles from './Section.module.scss'
import SectionProps from './Section.interface'

const Section: React.FC<SectionProps> = props => {
	const {
		children,
		top,
		style,
		field,
		withoutAllPadding,
		withoutXPadding,
		withoutYPadding,
		countColumns,
		to,
		href,
		target,
	} = props

	let Component: React.ElementType = 'div' as React.ElementType
	let additionalProps = {}

	if (href) {
		Component = 'a'
		additionalProps = { href, target, ...additionalProps }
	} else if (to) {
		Component = Link
		additionalProps = { to, target, ...additionalProps }
	} else {
		Component = 'div'
	}

	return (
		<section className={styles.root} style={style}>
			<Component
				className={[
					styles.inner,
					field && styles.field,
					styles[`width-${countColumns || 12}-columns`],
					withoutAllPadding || withoutXPadding ? '' : styles['outer-x-padding'],
					withoutAllPadding || withoutYPadding
						? ''
						: field && styles['outer-y-padding'],
				]
					.join(' ')
					.trim()}
				{...additionalProps}
			>
				{top}
				<div
					className={[
						styles.content,
						withoutAllPadding || withoutXPadding
							? ''
							: styles['inner-x-padding'],
						withoutAllPadding || withoutYPadding
							? ''
							: field && styles['inner-y-padding'],
					]
						.join(' ')
						.trim()}
				>
					{children}
				</div>
			</Component>
		</section>
	)
}

export { Section }
