import styles from './SectionStack.module.scss'

function SectionStack(props: any) {
	return (
		<>
			<div className={styles.root}>{props.children}</div>
		</>
	)
}

export { SectionStack }
