import { Link } from 'react-router-dom'

import styles from './BurgerNavigation.module.scss'

function BurgerNavigation(props: any) {
	return (
		<>
			<div
				className={`${styles.root} ${props.active ? styles.active : ''}`}
				onClick={props.burgerNav}
			>
				<div className={`${styles.wrapper}`}>
					<nav className={styles.container}>
						<Link to='/' className={styles.item}>
							<h3>Личная информация</h3>
						</Link>
						<Link to='/' className={styles.item}>
							<h3>Опыт работы</h3>
						</Link>
						<Link to='/' className={styles.item}>
							<h3>Портфолио</h3>
						</Link>
						<Link to='/' className={styles.item}>
							<h3>Профессиональные навыки</h3>
						</Link>
						<Link to='/' className={styles.item}>
							<h3>Образование</h3>
						</Link>
						<Link to='/' className={styles.item}>
							<h3>Контакты</h3>
						</Link>
					</nav>
				</div>
			</div>
		</>
	)
}

export { BurgerNavigation }
