import styles from './Section.module.scss'

function Section(props: any) {
	return (
		<>
			{props.children && (
				<section
					className={`${styles.root}  pageTemplate-container pageTemplate-padding`}
				>
					<div
						className={`${styles.inner} ${
							props.backgroundColor ? `bg-${props.backgroundColor}` : ''
						}`}
					>
						{props.children}
					</div>
				</section>
			)}
		</>
	)
}

export { Section }
