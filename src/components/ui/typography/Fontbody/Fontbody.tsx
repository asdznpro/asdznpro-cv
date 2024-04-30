import styles from './Fontbody.module.scss'
import TypographyProps from '../TypographyProps.interface'

const Fontbody: React.FC<TypographyProps> = props => {
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

export { Fontbody }
