import { setTheme, selectTheme } from 'store/ThemeSlice'
import { useAppSelector, useAppDispatch, useDynamicAlignment } from 'hooks'

import styles from './Header.module.scss'

import { AppLink, Button, ButtonIcon, Footnote } from 'components/ui'

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
						{screenWidth >= 880 ? <CvLogo /> : <CvLogoAbbreviated />}
					</AppLink>
				</div>

				<div
					className={styles['header-part']}
					style={{ display: 'flex', gap: 6 }}
				>
					{screenWidth >= 1344 && (
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

					<ButtonIcon
						onClick={handleToggleTheme}
						size='sm'
						appearance={theme === 'light' ? 'neutral' : 'accent'}
						rounded
					>
						{theme === 'light' ? (
							<Icon28MoonOutline width={24} height={24} />
						) : (
							<Icon28SunOutline width={24} height={24} />
						)}
					</ButtonIcon>
				</div>
			</div>
		</div>
	)
}

export { Header }
