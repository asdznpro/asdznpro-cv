import { Link } from 'react-router-dom'

import styles from './Button.module.scss'

function Button(props: any) {
	return (
		<>
			{props.link ? (
				<Link
					to={props.link}
					target={props.target}
					className={`${styles.root} ${props.moreSize ? styles.moreSize : ''} ${
						props.lessSize ? styles.lessSize : ''
					} ${props.state === 'primary' ? styles.primary : ''} ${
						props.state === 'black' ? styles.black : ''
					} ${props.state === 'white' ? styles.white : ''} ${
						props.state === 'secondary' ? styles.secondary : ''
					} ${props.className === 'rounded' ? styles.rounded : ''} ${
						props.stretch ? styles.stretch : ''
					}`}
				>
					<div className={styles.rel}>
						{props.children}
						{props.lessSize
							? props.text && <h5>{props.text}</h5>
							: props.text && <h4>{props.text}</h4>}
					</div>
					<div className={styles.abs}>
						{props.children}
						{props.lessSize
							? props.text && <h5>{props.text}</h5>
							: props.text && <h4>{props.text}</h4>}
					</div>
				</Link>
			) : (
				<button
					type={props.type}
					className={`${styles.root} ${props.moreSize ? styles.moreSize : ''} ${
						props.lessSize ? styles.lessSize : ''
					} ${props.state === 'primary' ? styles.primary : ''} ${
						props.state === 'black' ? styles.black : ''
					} ${props.state === 'white' ? styles.white : ''} ${
						props.state === 'secondary' ? styles.secondary : ''
					} ${props.className === 'rounded' ? styles.rounded : ''} ${
						props.stretch ? styles.stretch : ''
					}`}
					onClick={props.onClick}
					disabled={props.disabled}
				>
					<div className={styles.rel}>
						{props.children}
						{props.lessSize
							? props.text && <h5>{props.text}</h5>
							: props.text && <h4>{props.text}</h4>}
					</div>
					<div className={styles.abs}>
						{props.children}
						{props.lessSize
							? props.text && <h5>{props.text}</h5>
							: props.text && <h4>{props.text}</h4>}
					</div>
				</button>
			)}
		</>
	)
}

export { Button }
