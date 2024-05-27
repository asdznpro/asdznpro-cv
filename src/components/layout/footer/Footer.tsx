import { useDynamicAlignment, useAppSelector } from 'hooks'
import { selectLanguage } from 'store'

import styles from './Footer.module.scss'

import { AppLink, Fontbody } from 'components/ui'

import { IconLogoReact28 } from 'components/ui/icons'

const Footer: React.FC = () => {
	const { screenWidth } = useDynamicAlignment()

	const language = useAppSelector(selectLanguage)

	const storeAboutData = useAppSelector((state) => state.common.about)

	return (
		<footer className={styles.root}>
			<div className={styles.wrapper}>
				<Fontbody className="ui-text-secondary">
					&copy; {storeAboutData && storeAboutData.data.fullName + ',' + ' '}
					{new Date().getFullYear()}
				</Fontbody>

				{screenWidth >= 818 && (
					<Fontbody className="ui-text-secondary">
						{language.lang === 'en'
							? 'Built with React'
							: 'Сайт создан с помощью React'}
					</Fontbody>
				)}

				{screenWidth >= 412 && (
					<AppLink
						className={[styles['grid-span'], 'ui-flex'].join(' ')}
						href="https://reactjs.org/"
						target="_blank"
					>
						<div className={[styles.icon, 'ui-animate-bounce'].join(' ')}>
							<IconLogoReact28 width={48} height={48} />
						</div>
					</AppLink>
				)}
			</div>
		</footer>
	)
}

export { Footer }
