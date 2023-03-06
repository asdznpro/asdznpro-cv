import { Link } from 'react-router-dom'

import styles from './ContactItem.module.scss'
import { Icon28LinkOutline } from '@vkontakte/icons'

import { IconLogoVk } from '../../Icons/IconLogoVk'
import { IconLogoTelegram } from '../../Icons/IconLogoTelegram'
import { IconLogoVkMail } from '../../Icons/IconLogoVkMail'

function ContactItem(props: any) {
	return (
		<>
			<Link
				to={props.link}
				target='_blank'
				className={`${styles.root} ${
					props.aspectRatio === 1 ? styles.aspectRatio1 : ''
				} ${props.gridColumn === 3 ? styles.gridColumn3 : ''} ${
					props.gridColumn === 6 ? styles.gridColumn6 : ''
				} ${props.social === 'telegram' ? 'bg-telegram' : ''} ${
					props.social === 'vk-mail' ? 'bg-vk-mail' : ''
				} ${props.social === 'vk' ? 'bg-vk' : ''}`}
			>
				<div className={styles.itemTop}>
					<Icon28LinkOutline width={44} height={44} />
				</div>
				<div className={styles.itemBottom}>
					{props.social === 'telegram' && (
						<IconLogoTelegram width={48} height={48} />
					)}
					{props.social === 'vk-mail' && (
						<IconLogoVkMail width={48} height={48} />
					)}
					{props.social === 'vk' && <IconLogoVk width={48} height={48} />}
				</div>
			</Link>
		</>
	)
}

export { ContactItem }
