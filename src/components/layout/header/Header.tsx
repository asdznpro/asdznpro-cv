import { useLocation } from 'react-router-dom'

import { useAppSelector, useAppDispatch, useDynamicAlignment } from 'hooks'
import { setTheme, selectTheme, setLanguage, selectLanguage } from 'store'

import {
	BREAKPOINTS_TAILWIND,
	useBreakpoints,
	useToggle,
	useClickOutside,
} from '@siberiacancode/reactuse'

import styles from './Header.module.scss'
import { LanguageType, ThemeType } from 'types'

import { AppLink, Button, Counter, Spinner } from 'components/ui'

import { CvLogoIcon, CvLogo, CvLogoAbbreviated } from 'components/ui'
import {
	Icon28CancelOutline,
	Icon28MoonOutline,
	Icon28Menu,
	Icon28SunOutline,
} from '@vkontakte/icons'
import { useRef } from 'react'

const Header: React.FC = () => {
	const { screenWidth } = useDynamicAlignment()

	const { greaterOrEqual, smallerOrEqual, current } =
		useBreakpoints(BREAKPOINTS_TAILWIND)

	const dispatch = useAppDispatch()
	const location = useLocation()

	const storeCvMapData = useAppSelector((state) => state.common.cvMap)
	const storePortfolioData = useAppSelector((state) => state.common.portfolio)

	// handleToggleLanguage

	const language = useAppSelector(selectLanguage)

	const handleToggleLanguage = () => {
		const newLanguage = language.lang === 'ru' ? 'en' : 'ru'

		dispatch(setLanguage({ lang: newLanguage } as LanguageType))

		localStorage.setItem('language', newLanguage)
	}

	// handleToggleTheme

	const theme = useAppSelector(selectTheme)

	const handleToggleTheme = () => {
		const newTheme = theme.mode === 'light' ? 'dark' : 'light'

		dispatch(setTheme({ mode: newTheme } as ThemeType))

		localStorage.setItem('theme', newTheme)
	}

	//

	const [on, toggle] = useToggle()

	const dropdownRef = useRef<HTMLDivElement | null>(null)
	const buttonRef = useRef<HTMLButtonElement | null>(null)

	useClickOutside(dropdownRef, (event) => {
		if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
			return
		}

		toggle(false)
	})

	return (
		<header className={styles.root}>
			<div className={styles.container}>
				<div className={styles['header-part']}>
					<AppLink to="/" className="ui-flex">
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
					{greaterOrEqual('2xl') &&
						(storeCvMapData ? (
							storeCvMapData.data.map((item, index) => (
								<Button
									key={index}
									to={
										storePortfolioData &&
										storePortfolioData.data.length < 1 &&
										item.pathname === 'portfolio'
											? ''
											: '/' + item.pathname
									}
									mode={
										location.pathname.startsWith('/' + item.pathname)
											? 'outline'
											: 'ghost'
									}
									appearance="neutral"
									after={
										item.pathname === 'portfolio' &&
										storePortfolioData && (
											<Counter counterSize="sm" appearance="neutral">
												{storePortfolioData.data.length}
											</Counter>
										)
									}
									disabled={
										(item.pathname === 'portfolio' &&
											storePortfolioData &&
											storePortfolioData.data.length === 0) ||
										undefined
									}
									rounded={
										location.pathname.startsWith('/' + item.pathname)
											? true
											: false
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
										mode="outline"
										appearance="neutral"
										noneAction
									>
										<Spinner style={{ padding: '0 28px' }} />
									</Button>
								))}
							</>
						))}

					{greaterOrEqual('md') && (
						<>
							<Button
								onClick={handleToggleTheme}
								appearance={theme.mode === 'light' ? 'neutral' : 'accent'}
								before={
									theme.mode === 'light' ? (
										<Icon28MoonOutline width={24} height={24} />
									) : (
										<Icon28SunOutline width={24} height={24} />
									)
								}
								rounded
							/>

							<Button
								onClick={handleToggleLanguage}
								mode="outline"
								appearance="neutral"
								before={
									<img
										src={
											language.lang === 'ru'
												? 'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/icons/countries/great-britain_rounded_28.svg'
												: 'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/icons/countries/russia_rounded_28.svg'
										}
										alt="Language"
										width={screenWidth > 576 ? 24 : 32}
										height={screenWidth > 576 ? 24 : 32}
									/>
								}
								rounded
							>
								{screenWidth > 576 && (language.lang === 'ru' ? 'EN' : 'RU')}
							</Button>
						</>
					)}

					{smallerOrEqual('2xl') && (
						<Button
							ref={buttonRef}
							onClick={() => toggle()}
							appearance="neutral"
							mode="secondary"
							before={
								on ? (
									<Icon28CancelOutline width={24} height={24} />
								) : (
									<Icon28Menu width={24} height={24} />
								)
							}
							rounded
						>
							#меню
						</Button>
					)}

					{storeCvMapData && on && smallerOrEqual('2xl') && (
						<div ref={dropdownRef} className={styles.dropdown}>
							<div className={styles.dropdownList}>
								{smallerOrEqual('md') && (
									<div
										className="ui-flex ui-gap-6-px ui-w-full"
										style={{ flex: '1 1 50%' }}
									>
										<Button
											onClick={handleToggleTheme}
											buttonSize="md"
											appearance={theme.mode === 'light' ? 'neutral' : 'accent'}
											before={
												theme.mode === 'light' ? (
													<Icon28MoonOutline width={28} height={28} />
												) : (
													<Icon28SunOutline width={28} height={28} />
												)
											}
											style={{ flex: '1 1 50%' }}
										>
											{theme.mode === 'light' ? 'Light' : 'Dark'}
										</Button>

										<Button
											onClick={handleToggleLanguage}
											buttonSize="md"
											mode="outline"
											appearance="neutral"
											before={
												<img
													src={
														language.lang === 'ru'
															? 'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/icons/countries/great-britain_rounded_28.svg'
															: 'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/icons/countries/russia_rounded_28.svg'
													}
													alt="Language"
													width={28}
													height={28}
												/>
											}
											style={{ flex: '1 1 50%' }}
										>
											{language.lang === 'ru' ? 'EN' : 'RU'}
										</Button>
									</div>
								)}

								{storeCvMapData.data.map((item, index) => (
									<Button
										key={index}
										to={
											storePortfolioData &&
											storePortfolioData.data.length < 1 &&
											item.pathname === 'portfolio'
												? ''
												: '/' + item.pathname
										}
										buttonSize="md"
										mode={
											location.pathname.startsWith('/' + item.pathname)
												? 'secondary'
												: 'ghost'
										}
										appearance="neutral"
										after={
											item.pathname === 'portfolio' &&
											storePortfolioData && (
												<Counter counterSize="sm" appearance="neutral">
													{storePortfolioData.data.length}
												</Counter>
											)
										}
										disabled={
											(item.pathname === 'portfolio' &&
												storePortfolioData &&
												storePortfolioData.data.length === 0) ||
											undefined
										}
										stretched
									>
										{'#' +
											item.name
												.toLowerCase()
												.replace(/\s/g, '_')
												.replace(/\./g, '')}
									</Button>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	)
}

export { Header }
