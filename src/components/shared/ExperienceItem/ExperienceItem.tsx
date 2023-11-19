import { useDynamicAlignment } from 'hooks'

import styles from './ExperienceItem.module.scss'
import ExperienceItemProps from './ExperienceItem.interface'

import { Fontbody, Heading, Section, Spinner } from 'components/ui'

const ExperienceItem: React.FC<ExperienceItemProps> = props => {
	const {
		title,
		describe,
		logoPath,
		preview,
		children,
		style,
		ellipsis,
		to,
		href,
		target,
	} = props

	const { screenWidth } = useDynamicAlignment()

	return (
		<Section
			top={
				preview &&
				screenWidth <= 768 && (
					<div className={styles.preview}>
						<img src={preview} alt={title} />
					</div>
				)
			}
			countColumns={10}
			field
			to={to}
			href={href}
			target={target}
		>
			<div className={styles.root} style={style}>
				{screenWidth >= 768 && (
					<div className={styles.logo}>
						{logoPath ? (
							<img src={logoPath} alt={title} />
						) : (
							<Spinner width={36} height={36} style={{ margin: '0 auto' }} />
						)}
					</div>
				)}

				<div className={styles.info}>
					<Heading level={3}>{title}</Heading>

					<Fontbody
						level={3}
						className={ellipsis ? styles['describe-ellipsis'] : ''}
						secondary
					>
						{describe}
					</Fontbody>

					{children}
				</div>
			</div>
		</Section>
	)
}

export { ExperienceItem }
