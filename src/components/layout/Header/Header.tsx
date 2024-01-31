import { useLocation } from 'react-router-dom'

import { setTheme, selectTheme } from 'store/ThemeSlice'
import { useAppSelector, useAppDispatch, useDynamicAlignment } from 'hooks'

import styles from './Header.module.scss'

import { AppLink, Button, Counter, Spinner } from 'components/ui'

import { CvLogoIcon, CvLogo, CvLogoAbbreviated } from 'components/ui'
import { Icon28MoonOutline, Icon28SunOutline } from '@vkontakte/icons'

const Header: React.FC = () => {
	const { screenWidth } = useDynamicAlignment()

	const location = useLocation()

	const dispatch = useAppDispatch()
	const theme = useAppSelector(selectTheme)

	const storeCvMapData = useAppSelector(state => state.common.cvMap)
	const storePortfolioData = useAppSelector(state => state.common.portfolio)

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
							<CvLogo width={369.42} height={44} />
						) : screenWidth > 360 ? (
							<CvLogoAbbreviated width={125.58} height={44} />
						) : (
							<CvLogoIcon width={44} height={44} />
						)}
					</AppLink>
				</div>

				<div className={styles['header-part']}>
					{screenWidth > 1440 &&
						(storeCvMapData ? (
							storeCvMapData.data.map((item, index) => (
								<Button
									key={index}
									to={'/' + item.pathname}
									size='sm'
									mode={
										location.pathname.startsWith('/' + item.pathname)
											? 'outline'
											: 'tertiary'
									}
									appearance='neutral'
									after={
										item.name === 'Портфолио' &&
										storePortfolioData && (
											<Counter size='sm' appearance='neutral'>
												{storePortfolioData.data.length}
											</Counter>
										)
									}
								>
									{'#' +
										item.name
											.toLowerCase()
											.replace(/\s/g, '_')
											.replace(/\./g, '')}
								</Button>
							))
						) : (
							<>
								{[...Array(3)].map((_, index) => (
									<Button
										key={index}
										size='sm'
										mode='outline'
										appearance='neutral'
										noneAction
									>
										<Spinner style={{ padding: '0 28px' }} />
									</Button>
								))}
							</>
						))}

					{screenWidth <= 1440 && (
						<Button
							size='sm'
							appearance='neutral'
							mode='secondary'
							before={<Spinner />}
							rounded
						>
							#меню
						</Button>

						// <Button size='sm' appearance='neutral' mode='secondary' rounded>
						// 	<Spinner style={{ padding: '0 20px' }} />
						// </Button>
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
