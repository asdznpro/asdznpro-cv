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
					{/* {screenWidth >= 200 && (
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
					)} */}

					<Button to='/about' size='sm' mode='tertiary' appearance='neutral'>
						<Footnote>#обо_мне</Footnote>
					</Button>

					<Button
						to='/experience'
						size='sm'
						mode='tertiary'
						appearance='neutral'
					>
						<Footnote>#опыт_работы</Footnote>
					</Button>

					<Button
						to='/portfolio'
						size='sm'
						mode='tertiary'
						appearance='neutral'
					>
						<Footnote>#портфолио</Footnote>
					</Button>

					<Button
						to='/hard-skills'
						size='sm'
						mode='tertiary'
						appearance='neutral'
					>
						<Footnote>#проф_навыки</Footnote>
					</Button>

					<Button
						to='/education'
						size='sm'
						mode='tertiary'
						appearance='neutral'
					>
						<Footnote>#образование</Footnote>
					</Button>

					<Button to='/contacts' size='sm' mode='tertiary' appearance='neutral'>
						<Footnote>#контакты</Footnote>
					</Button>

					<ButtonIcon
						onClick={handleToggleTheme}
						size='sm'
						appearance={theme === 'light' ? 'neutral' : 'accent'}
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
