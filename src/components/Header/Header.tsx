import { useState } from 'react'

import styles from './Header.module.scss'
import useDocumentScrollThrottled from './index'

import { Button } from '../Buttons/Button'
import { BurgerNavigation } from '../BurgerNavigation'

import { IconLogoMain } from '../Icons/IconLogoMain'
import { Icon28MenuOutline, Icon28CancelOutline } from '@vkontakte/icons'

function Header(props: any) {
	const [shouldHideHeader, setShouldHideHeader] = useState(false)

	const MINIMUM_SCROLL = 32
	const TIMEOUT_DELAY = 0

	useDocumentScrollThrottled((callbackData: any) => {
		const { previousScrollTop, currentScrollTop } = callbackData
		const isScrolledDown = previousScrollTop < currentScrollTop
		const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

		setTimeout(() => {
			setShouldHideHeader(isScrolledDown && isMinimumScrolled)
		}, TIMEOUT_DELAY)
	})

	const hiddenStyle = shouldHideHeader ? styles.hidden : ''

	const [burgerNavActive, setBurgerNavActive] = useState(false)

	function burgerNav() {
		document.body.classList.toggle('lock')
		setBurgerNavActive(!burgerNavActive)
	}

	return (
		<>
			<header className={`${styles.root} ${hiddenStyle}`}>
				<div className='pageTemplate-container pageTemplate-padding'>
					<div
						className={`${styles.wrapper} ${
							burgerNavActive ? styles.active : ''
						}`}
					>
						<div className={styles.item}>
							<IconLogoMain className={styles.logo} />
						</div>
						<div className={styles.item}>
							<nav className={styles.navigation}>
								<div className={styles.navigationList}>
									<Button
										text='Меню'
										state={`${burgerNavActive ? 'black' : 'primary'}`}
										onClick={burgerNav}
									>
										{burgerNavActive ? (
											<Icon28CancelOutline width={32} height={32} />
										) : (
											<Icon28MenuOutline width={32} height={32} />
										)}
									</Button>
									<Button text='EN' state='white' />
								</div>
							</nav>
						</div>
					</div>
				</div>
			</header>

			<BurgerNavigation burgerNav={burgerNav} active={burgerNavActive} />
		</>
	)
}

export { Header }
