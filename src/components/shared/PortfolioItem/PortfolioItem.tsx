import { useDynamicAlignment } from 'hooks'

import styles from './PortfolioItem.module.scss'
import PortfolioItemProps from './PortfolioItem.interface'

import { Fontbody, Heading, RouterLink, Spinner } from 'components/ui'

const PortfolioItem: React.FC<PortfolioItemProps> = props => {
	const { projectName, to, tags, date, preview, style } = props
	const { screenWidth } = useDynamicAlignment()

	return (
		<div className={styles.root} style={style}>
			<RouterLink to={to} className={styles.link} />

			<div className={styles.preview}>
				<div className={styles.image}>
					{/* <img src={preview} alt={projectName} /> */}
					<Spinner width={36} height={36} />
				</div>
			</div>

			<div
				// className={[styles.info, screenWidth <= 768 && styles['x-padding']]
				className={[styles.info].join(' ').trim()}
			>
				<span className={styles.caption}>
					<Fontbody level={3} ellipsis secondary>
						{tags}
					</Fontbody>

					<Fontbody level={3} style={{ whiteSpace: 'nowrap' }} secondary>
						{date}
					</Fontbody>
				</span>

				<Heading className={styles['project-name']} level={4}>
					{projectName}
				</Heading>
			</div>
		</div>
	)
}

export { PortfolioItem }
