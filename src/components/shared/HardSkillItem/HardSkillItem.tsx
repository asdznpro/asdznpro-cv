import styles from './HardSkillItem.module.scss'
import HardSkillItemProps from './HardSkillItem.interface'

import { Fontbody, Spinner } from 'components/ui'

const HardSkillItem: React.FC<HardSkillItemProps> = props => {
	const { name, image, children, onClick } = props

	return (
		<div className={styles.root} onClick={onClick}>
			<div className={styles.image}>
				{image ? (
					<img src={image} alt={name} />
				) : (
					<Spinner width={32} height={32} />
				)}
			</div>

			<div className={styles.info}>
				<Fontbody className={styles.name} ellipsis>
					{name}
				</Fontbody>

				{children}
			</div>
		</div>
	)
}

export { HardSkillItem }
