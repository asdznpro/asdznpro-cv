import styles from './Section.module.scss'

function Section(props: any) {
	return (
		<>
			{props.children && (
				<section
					className={`${styles.root} ${
						props.backgroundColor ? `bg-${props.backgroundColor}` : ''
					} pageTemplate-container`}
				>
					<div className={`${styles.inner}`}>{props.children}</div>
				</section>
			)}
		</>
	)
}

export { Section }
