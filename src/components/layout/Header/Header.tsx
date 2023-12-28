import { setTheme, selectTheme } from 'store/ThemeSlice'
import { useAppSelector, useAppDispatch, useDynamicAlignment } from 'hooks'

import styles from './Header.module.scss'

import { AppLink, Button } from 'components/ui'

import { CvLogo, CvLogoAbbreviated } from 'components/ui'
import { Icon28MoonOutline, Icon28SunOutline } from '@vkontakte/icons'

const Header: React.FC = () => {
	const { screenWidth } = useDynamicAlignment()

	const dispatch = useAppDispatch()
	const theme = useAppSelector(selectTheme)

	const handleToggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'

		dispatch(setTheme(newTheme))

		localStorage.setItem('theme', newTheme)
	}

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<div className={styles['header-part']}>
					<AppLink to='/' flex>
						{screenWidth > 880 ? (
							<CvLogo />
						) : (
							<CvLogoAbbreviated width={126} height={44} />
						)}
					</AppLink>
				</div>

				<div className={styles['header-part']}>
					{screenWidth > 1440 && (
						<>
							<Button
								to='/about'
								size='sm'
								mode='tertiary'
								appearance='neutral'
							>
								#обо_мне
							</Button>

							<Button
								to='/experience'
								size='sm'
								mode='tertiary'
								appearance='neutral'
							>
								#опыт_работы
							</Button>

							<Button
								to='/portfolio'
								size='sm'
								mode='tertiary'
								appearance='neutral'
							>
								#портфолио
							</Button>

							<Button
								to='/hard-skills'
								size='sm'
								mode='tertiary'
								appearance='neutral'
							>
								#проф_навыки
							</Button>

							<Button
								to='/education'
								size='sm'
								mode='tertiary'
								appearance='neutral'
							>
								#образование
							</Button>

							<Button
								to='/contacts'
								size='sm'
								mode='tertiary'
								appearance='neutral'
							>
								#контакты
							</Button>
						</>
					)}

					{screenWidth <= 1440 && (
						<Button size='sm' appearance='neutral' mode='secondary' rounded>
							#меню
						</Button>
					)}

					<Button
						onClick={handleToggleTheme}
						size='sm'
						appearance={theme === 'light' ? 'neutral' : 'accent'}
						before={
							theme === 'light' ? (
								<Icon28MoonOutline width={24} height={24} />
							) : (
								<Icon28SunOutline width={24} height={24} />
							)
						}
						rounded
					/>
				</div>
			</div>
		</div>
	)
}

export { Header }
