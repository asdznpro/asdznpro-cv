import styles from './Fontbody.module.scss'
import TypographyProps from '../TypographyProps.interface'

import { FontbodySkeleton } from './FontbodySkeleton'

const Fontbody = (props: TypographyProps) => {
	const { level, children, role, className, ...restProps } = props

	const Tag = role === 'paragraph' ? `p` : `span`

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

Fontbody.Skeleton = FontbodySkeleton
Fontbody.Skeleton.displayName = 'Fontbody.Skeleton'

Fontbody.displayName = 'Fontbody'

export { Fontbody }
