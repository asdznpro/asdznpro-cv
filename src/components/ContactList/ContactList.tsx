import styles from './ContactList.module.scss'

function ContactList(props: any) {
	return (
		<>
			<div className={styles.root}>
				{props.children}
			</div>
		</>
	)
}

export { ContactList }
