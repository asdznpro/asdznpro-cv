import styles from './ExperienceItem.module.scss'
import ExperienceItemProps from './ExperienceItem.interface'

import { Fontbody, Heading, Section } from 'components/ui'

const ExperienceItem: React.FC<ExperienceItemProps> = props => {
	const { title, describe, logoPath, children, style } = props

	return (
		<Section countColumns={10} field>
			<div className={styles.root} style={style}>
				{logoPath && (
					<div className={styles.logo}>
						<img src={logoPath} alt={title} />
					</div>
				)}

				<div className={styles.info}>
					<Heading level={3}>{title}</Heading>

					<Fontbody level={3} secondary>
						{describe}
					</Fontbody>

					{children}
				</div>
			</div>
		</Section>
	)
}

export { ExperienceItem }
