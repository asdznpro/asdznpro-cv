import styles from './Footer.module.scss'

function Footer() {
	return (
		<>
			<footer className={styles.root}>
				<div className={`${styles.wrapper} pageTemplate-container`}>
					<div className={styles.item}>
						<h3 className='text-dark'>© Андрей Сухушин, 2023</h3>
					</div>
					<div className={styles.item}>
						<h3 className='text-dark'>Сайт создан с помощью React</h3>
					</div>
				</div>
			</footer>
		</>
	)
}

export { Footer }
