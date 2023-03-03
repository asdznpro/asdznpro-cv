import styles from './Button.module.scss'

function Button(props: any) {
	return (
		<>
			<button
				className={`${styles.root} ${
					props.className === 'primary' ? styles.primary : ''
				} ${props.className === 'black' ? styles.black : ''} ${
					props.className === 'white' ? styles.white : ''
				} ${props.className === 'secondary' ? styles.secondary : ''} text-${
					props.colorText
				} `}
				onClick={props.onClick}
			>
				<h4 className={styles.rel}>{props.text}</h4>
				<h4 className={styles.abs}>{props.text}</h4>
			</button>
		</>
	)
}

export { Button }
