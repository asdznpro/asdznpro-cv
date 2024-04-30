import * as React from 'react'

import styles from './Heading.module.scss'
import TypographyProps from '../TypographyProps.interface'

interface TypographyExtendedProps {
	level?: 1 | 2 | 3 | 4 | undefined
	wideLevel?: 1 | 2 | 3 | undefined
}

type HeadingProps = Omit<TypographyProps, 'level'> & TypographyExtendedProps

const Heading: React.FC<HeadingProps> = props => {
	const { level = 1, wideLevel, children, className, ...restProps } = props

	const Tag = `h${Math.min(level ? level : 1, 3)}`

	return React.createElement(
		Tag,
		{
			...restProps,
			className: [
				styles[`level-${level}`],
				styles[`wideLevel-${wideLevel ?? 1}`],
				className,
			]
				.join(' ')
				.trim(),
		},
		children
	)
}

export { Heading }
