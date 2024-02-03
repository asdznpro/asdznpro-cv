import styles from './ListComponent.module.scss'
import ListComponentProps, { NestedList } from './ListComponent.interface'

const ListComponent: React.FC<ListComponentProps> = props => {
	const { typeList, content, fontLevel } = props

	const renderNestedList = (nestedList: NestedList) => {
		const ListType: React.ElementType =
			nestedList.typeList === 'ul' ? 'ul' : 'ol'

		return (
			<ListType className={[styles.root, styles['nested-list']].join(' ')}>
				{nestedList.items.map((item, index) => (
					<li key={index}>
						{typeof item === 'object' ? (
							<>
								<span>{(item as NestedList).title}</span>
								{renderNestedList(item as NestedList)}
							</>
						) : (
							item
						)}
					</li>
				))}
			</ListType>
		)
	}

	const renderList = (list: (string | NestedList)[]) => {
		const ListType: React.ElementType = typeList === 'ul' ? 'ul' : 'ol'

		return (
			<ListType
				className={[
					styles.root,
					styles['level-' + (fontLevel ? fontLevel : 1)],
				].join(' ')}
			>
				{list.map((item, index) => (
					<li key={index}>
						{typeof item === 'object' ? (
							<>
								<span>{(item as NestedList).title}</span>
								{renderNestedList(item as NestedList)}
							</>
						) : (
							item
						)}
					</li>
				))}
			</ListType>
		)
	}

	return renderList(content)
}

export { ListComponent }
