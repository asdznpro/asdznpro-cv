import styles from './Footer.module.scss'

const Footer: React.FC = () => {
	return (
		<footer className={styles.root}>
			<div className={styles.wrapper}>
				<h4>© Андрей Сухушин, 2023</h4>
				<h4>Сайт создан с помощью React</h4>
			</div>
		</footer>
	)
}

export { Footer }
