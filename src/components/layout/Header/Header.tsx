import { setTheme, selectTheme } from 'store/ThemeSlice'
import { useAppSelector, useAppDispatch, useDynamicAlignment } from 'hooks'

import styles from './Header.module.scss'

import {
	AppLink,
	Button,
	CvLogo,
	CvLogoAbbreviated,
	CvLogoIcon,
	Footnote,
} from 'components/ui'

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
						{/* {screenWidth >= 880 ? (
							<CvLogo />
						) : screenWidth >= 528 ? (
							<CvLogoAbbreviated />
						) : (
							<CvLogoIcon />
						)} */}

						{screenWidth >= 880 ? <CvLogo /> : <CvLogoAbbreviated />}
					</AppLink>
				</div>

				<div
					className={styles['header-part']}
					style={{ display: 'flex', gap: 12 }}
				>
					{screenWidth >= 200 && (
						<>
							<Footnote
								ellipsis
								style={{
									display: 'flex',
									gap: 12,
									width: 'min-content',
									maxWidth: 320,
									flexWrap: 'nowrap',
									overflowX: 'auto',
									paddingBottom: 4,
								}}
							>
								<AppLink to='/about'>#обо_мне</AppLink>
								<AppLink to='/experience'>#опыт_работы</AppLink>
								<AppLink to='/portfolio'>#портфолио</AppLink>
								<AppLink to='/hard-skills'>#проф_навыки</AppLink>
								<AppLink to='/education'>#образование</AppLink>
								<AppLink to='/contacts'>#контакты</AppLink>
							</Footnote>
						</>
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
					>
						<Footnote>{theme === 'light' ? 'Dark' : 'Light'}</Footnote>
					</Button>
				</div>
			</div>
		</div>
	)
}

export { Header }
