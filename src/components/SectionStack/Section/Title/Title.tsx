import styles from './Title.module.scss'

function Title(props: any) {
	return (
		<>
			{props.children && (
				<div
					className={`${styles.root} ${props.className ? props.className : ''}`}
				>
					{props.children}
				</div>
			)}
		</>
	)
}

export { Title }
