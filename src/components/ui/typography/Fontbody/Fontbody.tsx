import styles from './Fontbody.module.scss'
import typographyStyles from '../Typography.module.scss'
import TypographyProps from '../TypographyProps.interface'

const Fontbody: React.FC<TypographyProps> = props => {
	const { level, children, caps, ellipsis, style } = props

	const adjustedLevel = level ? Math.min(level + 2, 5) : 3
	const Tag = `h${adjustedLevel}` as keyof JSX.IntrinsicElements

	return (
		<Tag
			className={[
				typographyStyles.root,
				styles['level-' + (level ? level : 1)],
				caps ? typographyStyles.caps : '',
				ellipsis ? typographyStyles.ellipsis : '',
			]
				.join(' ')
				.trim()}
			style={style}
		>
			{children}
		</Tag>
	)
}

export { Fontbody }
