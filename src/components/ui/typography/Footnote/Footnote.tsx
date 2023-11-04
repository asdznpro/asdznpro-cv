import styles from './Footnote.module.scss'
import typographyStyles from '../Typography.module.scss'
import TypographyProps from '../TypographyProps.interface'

const Footnote: React.FC<TypographyProps> = props => {
	const { level, children, caps, style } = props

	const adjustedLevel = level ? Math.min(level + 3, 6) : 4
	const Tag = `h${adjustedLevel}` as keyof JSX.IntrinsicElements

	return (
		<Tag
			className={[
				typographyStyles.root,
				styles['level-' + (level ? level : 1)],
				caps ? typographyStyles.caps : '',
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
