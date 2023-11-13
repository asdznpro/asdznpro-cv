import styles from './Heading.module.scss'
import typographyStyles from '../Typography.module.scss'
import TypographyProps from '../TypographyProps.interface'

interface TypographyExtendedProps {
	level?: 1 | 2 | 3 | 4 | undefined
	wideLevel?: 1 | 2 | 3 | undefined
	noCaps?: boolean | undefined
}

type HeadingProps = Omit<TypographyProps, 'level' | 'caps'> &
	TypographyExtendedProps

const Heading: React.FC<HeadingProps> = props => {
	const { level, wideLevel, children, noCaps, ellipsis, style, className } =
		props

	const Tag = `h${Math.min(
		level ? level : 1,
		3
	)}` as keyof JSX.IntrinsicElements

	return (
		<Tag
			className={[
				typographyStyles.root,
				styles['level-' + (level ? level : 1)],
				styles['wideLevel-' + (wideLevel ? wideLevel : 1)],
				noCaps ? '' : typographyStyles.caps,
				ellipsis && typographyStyles.ellipsis,
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

export { Heading }
