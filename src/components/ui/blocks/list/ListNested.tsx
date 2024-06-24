import styles from './List.module.scss'
import ListProps from './List.interface'

const ListNested: React.FC<ListProps> = (props) => {
	const { children, typeList = 'ul' } = props

	const ListType: React.ElementType = typeList === 'ul' ? 'ul' : 'ol'

	return (
		<ListType className={[styles.root, styles.nested].join(' ')}>
			{children}
		</ListType>
	)
}

export { ListNested }
