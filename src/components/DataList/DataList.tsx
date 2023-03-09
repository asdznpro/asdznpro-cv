import styles from './DataList.module.scss'

function DataList(props: any) {
	return (
		<>
			<div className={styles.root}>{props.children}</div>
		</>
	)
}

export { DataList }
