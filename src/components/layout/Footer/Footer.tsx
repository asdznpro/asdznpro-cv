import { useDynamicAlignment } from 'hooks'

import styles from './Footer.module.scss'

import { AppLink, Fontbody } from 'components/ui'

import { IconLogoReact28 } from 'components/ui/icons'

const Footer: React.FC = () => {
	const { screenWidth } = useDynamicAlignment()

	return (
		<footer className={styles.root}>
			<div className={styles.wrapper}>
				<Fontbody>&copy; Андрей Сухушин, 2023</Fontbody>

				{screenWidth >= 818 && <Fontbody>Сайт создан с помощью React</Fontbody>}

				{screenWidth >= 456 && (
					<AppLink to='https://reactjs.org/' target='blank' flex>
						<div className={styles.spinner}>
							<IconLogoReact28 width={48} height={48} />
						</div>
					</AppLink>
				)}
			</div>
		</footer>
	)
}

export { Footer }
