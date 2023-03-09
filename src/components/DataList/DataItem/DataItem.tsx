import styles from './DataItem.module.scss'

function DataItem(props: any) {
	return (
		<>
			<div className={styles.root}>{props.children}</div>
		</>
	)
}

export { DataItem }
