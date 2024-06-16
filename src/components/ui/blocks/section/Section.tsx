import { forwardRef } from 'react'

import styles from './Section.module.scss'
import SectionProps from './Section.interface'

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
	const { children, countColumns = 12, className, ...restProps } = props

	return (
		<section
			{...restProps}
			ref={ref}
			className={[styles.root, className, `ui-max-w-${countColumns}-cols`]
				.join(' ')
				.trim()}
		>
			{children}
		</section>
	)
})

export { Section }
