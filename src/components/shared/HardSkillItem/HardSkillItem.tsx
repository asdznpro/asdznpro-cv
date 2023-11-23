import styles from './HardSkillItem.module.scss'
import HardSkillItemProps from './HardSkillItem.interface'

import { Button, Fontbody, Spinner } from 'components/ui'

import { Icon28ChevronRightCircle } from '@vkontakte/icons'

const HardSkillItem: React.FC<HardSkillItemProps> = props => {
	const { name, image, onClick } = props

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

				{/* <Button
					size='xsm'
					appearance='neutral'
					mode='secondary'
					after={<Icon28ChevronRightCircle width={18} height={18} />}
				>
					Подробнее
				</Button> */}
			</div>
		</div>
	)
}

export { HardSkillItem }
