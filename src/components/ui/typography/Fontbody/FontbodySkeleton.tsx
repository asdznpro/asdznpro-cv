import styles from './FontbodySkeleton.module.scss'
import TypographyProps from '../TypographyProps.interface'

const FontbodySkeleton: React.FC<TypographyProps> = (props) => {
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

export { FontbodySkeleton }
