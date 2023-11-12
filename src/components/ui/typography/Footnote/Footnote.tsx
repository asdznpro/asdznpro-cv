import styles from './Footnote.module.scss'
import typographyStyles from '../Typography.module.scss'
import TypographyProps from '../TypographyProps.interface'

interface TypographyExtendedProps extends TypographyProps {
	role?: 'paragraph' | undefined
	secondary?: boolean | undefined
}

const Footnote: React.FC<TypographyExtendedProps> = props => {
	const { level, children, caps, ellipsis, style, role, secondary, className } =
		props

	const adjustedLevel = level ? Math.min(level + 3, 6) : 4
	const Tag =
		role === 'paragraph'
			? `p`
			: (`h${adjustedLevel}` as keyof JSX.IntrinsicElements)

	return (
		<Tag
			role={role}
			className={[
				typographyStyles.root,
				styles['level-' + (level ? level : 1)],
				caps ? typographyStyles.caps : '',
				ellipsis ? typographyStyles.ellipsis : '',
				secondary ? typographyStyles.secondary : '',
				className,
			]
				.join(' ')
				.trim()}
			style={style}
		>
			{children}
		</Tag>
	)
}

export { Footnote }
