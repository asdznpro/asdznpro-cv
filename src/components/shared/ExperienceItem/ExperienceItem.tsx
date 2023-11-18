import styles from './ExperienceItem.module.scss'
import ExperienceItemProps from './ExperienceItem.interface'

import { Fontbody, Heading, Section, Spinner } from 'components/ui'

const ExperienceItem: React.FC<ExperienceItemProps> = props => {
	const { title, describe, logoPath, children, style } = props

	return (
		<Section countColumns={10} field>
			<div className={styles.root} style={style}>
				<div className={styles.logo}>
					{logoPath ? (
						<img src={logoPath} alt={title} />
					) : (
						<Spinner width={36} height={36} style={{ margin: '0 auto' }} />
					)}
				</div>

				<div className={styles.info}>
					<Heading level={3}>{title}</Heading>

					<Fontbody level={3} className={styles.describe} secondary>
						{describe}
					</Fontbody>

					{children}
				</div>
			</div>
		</Section>
	)
}

export { ExperienceItem }
