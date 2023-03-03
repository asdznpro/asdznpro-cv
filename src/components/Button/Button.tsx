import { Link } from 'react-router-dom'

import styles from './Button.module.scss'

function Button(props: any) {
	return (
		<>
			{props.link ? (
				<Link
					to={props.link}
					target={props.target}
					className={`${styles.root} ${
						props.state === 'primary' ? styles.primary : ''
					} ${props.state === 'black' ? styles.black : ''} ${
						props.state === 'white' ? styles.white : ''
					} ${props.state === 'secondary' ? styles.secondary : ''} ${
						props.className === 'rounded' ? styles.rounded : ''
					}`}
				>
					<h4 className={styles.rel}>{props.text}</h4>
					<h4 className={styles.abs}>{props.text}</h4>
				</Link>
			) : (
				<button
					type={props.type}
					className={`${styles.root} ${
						props.state === 'primary' ? styles.primary : ''
					} ${props.state === 'black' ? styles.black : ''} ${
						props.state === 'white' ? styles.white : ''
					} ${props.state === 'secondary' ? styles.secondary : ''} ${
						props.className === 'rounded' ? styles.rounded : ''
					}`}
					onClick={props.onClick}
					disabled={props.disabled}
				>
					<h4 className={styles.rel}>{props.text}</h4>
					<h4 className={styles.abs}>{props.text}</h4>
				</button>
			)}
		</>
	)
}

export { Button }
