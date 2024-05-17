import styles from './HeadingSkeleton.module.scss'
import TypographyProps from '../TypographyProps.interface'

interface TypographyExtendedProps {
	level?: 1 | 2 | 3 | 4 | undefined
	wideLevel?: 1 | 2 | 3 | undefined
}

type HeadingProps = Omit<TypographyProps, 'level'> & TypographyExtendedProps

const HeadingSkeleton: React.FC<HeadingProps> = (props) => {
	const { level, className, ...restProps } = props

	return (
		<span
			{...restProps}
			className={[
				styles.root,
				styles['level-' + (level ? level : 1)],
				'ui-skeleton',
				className,
			]
				.join(' ')
				.trim()}
		/>
	)
}

export { HeadingSkeleton }
