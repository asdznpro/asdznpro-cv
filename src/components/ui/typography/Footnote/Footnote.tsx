import styles from './Footnote.module.scss'
import typographyStyles from '../Typography.module.scss'
import TypographyProps from '../TypographyProps.interface'

interface TypographyExtendedProps extends TypographyProps {
	role?: 'paragraph' | undefined
	secondary?: boolean | undefined
}

const Footnote: React.FC<TypographyExtendedProps> = props => {
	const {
		level,
		children,
		itemProp,
		caps,
		ellipsis,
		style,
		role,
		secondary,
		className,
	} = props

	const Tag = role === 'paragraph' ? `p` : `span`

	return (
		<Tag
			itemProp={itemProp}
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
