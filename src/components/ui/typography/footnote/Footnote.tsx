import styles from './Footnote.module.scss'
import TypographyProps from '../TypographyProps.interface'

import { FootnoteSkeleton } from './FootnoteSkeleton'

const Footnote = (props: TypographyProps) => {
	const { level, children, role, className, ...restProps } = props

	const Tag = (
		role === 'paragraph' ? 'p' : role ? role : 'span'
	) as React.ElementType

	return (
		<Tag
			{...restProps}
			className={[styles['level-' + (level ? level : 1)], className]
				.join(' ')
				.trim()}
		>
			{children}
		</Tag>
	)
}

Footnote.Skeleton = FootnoteSkeleton
Footnote.Skeleton.displayName = 'Footnote.Skeleton'

Footnote.displayName = 'Footnote'

export { Footnote }
