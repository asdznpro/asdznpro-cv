import styles from './List.module.scss'
import ListProps from './List.interface'

import { ListItem } from './ListItem'
import { ListNested } from './ListNested'

const List = (props: ListProps) => {
	const { children, typeList = 'ul', className } = props
	const ListType: React.ElementType = typeList === 'ul' ? 'ul' : 'ol'

	return (
		<ListType className={[styles.root, className].join(' ')}>
			{children}
		</ListType>
	)
}

List.Item = ListItem
List.Item.displayName = 'List.Item'

List.Nested = ListNested
List.Nested.displayName = 'List.Nested'

List.displayName = 'List'

export { List }
