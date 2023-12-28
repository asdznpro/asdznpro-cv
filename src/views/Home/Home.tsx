import { setTheme, selectTheme } from 'store/ThemeSlice'
import { useAppSelector, useAppDispatch, useDocumentTitle } from 'hooks'

import styles from './Home.module.scss'

import { Layout } from 'components/layout'
import {
	Fontbody,
	Footnote,
	Section,
	SectionGroup,
	AppLink,
	Button,
	ButtonIcon,
} from 'components/ui'

import {
	Icon28AddOutline,
	Icon28ChevronRightCircle,
	Icon28MoonOutline,
	Icon28SunOutline,
} from '@vkontakte/icons'

const Home = () => {
	useDocumentTitle('Андрей Сухушин // Curriculum Vitae')

	const dispatch = useAppDispatch()
	const theme = useAppSelector(selectTheme)

	const handleToggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'

		dispatch(setTheme(newTheme))

		localStorage.setItem('theme', newTheme)
	}

	return (
		<Layout paddingTop='sm'>
			<SectionGroup gap='sm'>
				<Section field>
					<div
						style={{
							display: 'flex',
							gap: 6,
							flexWrap: 'wrap',
						}}
					>
						<Button to='/about' mode='secondary' appearance='neutral'>
							#обо_мне
						</Button>

						<Button to='/experience' mode='secondary' appearance='neutral'>
							#опыт_работы
						</Button>

						<Button to='/portfolio' mode='secondary' appearance='neutral'>
							#портфолио
						</Button>

						<Button to='/hard-skills' mode='secondary' appearance='neutral'>
							#проф_навыки
						</Button>

						<Button to='/education' mode='secondary' appearance='neutral'>
							#образование
						</Button>

						<Button to='/contacts' mode='secondary' appearance='neutral'>
							#контакты
						</Button>
					</div>
				</Section>

				<Section field>
					<div
						style={{
							display: 'flex',
							gap: 12,
							flexWrap: 'wrap',
						}}
					>
						<Button
							onClick={handleToggleTheme}
							appearance={theme === 'light' ? 'neutral' : 'accent'}
							before={
								theme === 'light' ? <Icon28MoonOutline /> : <Icon28SunOutline />
							}
							rounded
						/>

						<ButtonIcon
							onClick={handleToggleTheme}
							appearance={theme === 'light' ? 'neutral' : 'accent'}
							rounded
						>
							{theme === 'light' ? <Icon28MoonOutline /> : <Icon28SunOutline />}
						</ButtonIcon>

						<Button
							onClick={handleToggleTheme}
							appearance={theme === 'light' ? 'neutral' : 'accent'}
							before={
								theme === 'light' ? <Icon28MoonOutline /> : <Icon28SunOutline />
							}
						>
							{theme === 'light'
								? 'Switch to Dark Mode'
								: 'Switch to Light Mode'}
						</Button>

						<Button
							to='/about'
							mode='secondary'
							appearance='negative'
							after={<Icon28ChevronRightCircle />}
							rounded
						>
							Go link
						</Button>

						<Button
							href='https://vk.com/im'
							target='blank'
							mode='secondary'
							after={<Icon28ChevronRightCircle />}
							disabled
						>
							{theme === 'light'
								? 'Switch to Dark Mode'
								: 'Switch to Light Mode'}
						</Button>
					</div>

					<div
						style={{
							display: 'flex',
							gap: 12,
							flexWrap: 'wrap',
						}}
					>
						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 12,
								flexDirection: 'column',
							}}
						>
							<Footnote>Accent</Footnote>

							<Button
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								Button
							</Button>

							<Button
								mode='secondary'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								Button
							</Button>

							<Button
								mode='tertiary'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								Button
							</Button>

							<Button
								mode='outline'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								Button
							</Button>
						</div>

						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 12,
								flexDirection: 'column',
							}}
						>
							<Footnote secondary>Icon</Footnote>

							<ButtonIcon>
								<Icon28AddOutline />
							</ButtonIcon>

							<ButtonIcon mode='secondary'>
								<Icon28AddOutline />
							</ButtonIcon>

							<ButtonIcon mode='tertiary'>
								<Icon28AddOutline />
							</ButtonIcon>

							<ButtonIcon mode='outline'>
								<Icon28AddOutline />
							</ButtonIcon>
						</div>

						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 12,
								flexDirection: 'column',
							}}
						>
							<Footnote>Positive</Footnote>

							<Button
								appearance='positive'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								Button
							</Button>

							<Button
								appearance='positive'
								mode='secondary'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								Button
							</Button>

							<Button
								appearance='positive'
								mode='tertiary'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								Button
							</Button>

							<Button
								appearance='positive'
								mode='outline'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								Button
							</Button>
						</div>

						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 12,
								flexDirection: 'column',
							}}
						>
							<Footnote secondary>Icon</Footnote>

							<ButtonIcon appearance='positive'>
								<Icon28AddOutline />
							</ButtonIcon>

							<ButtonIcon appearance='positive' mode='secondary'>
								<Icon28AddOutline />
							</ButtonIcon>

							<ButtonIcon appearance='positive' mode='tertiary'>
								<Icon28AddOutline />
							</ButtonIcon>

							<ButtonIcon appearance='positive' mode='outline'>
								<Icon28AddOutline />
							</ButtonIcon>
						</div>

						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 12,
								flexDirection: 'column',
							}}
						>
							<Footnote>Negative</Footnote>

							<Button
								appearance='negative'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								Button
							</Button>

							<Button
								appearance='negative'
								mode='secondary'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								Button
							</Button>

							<Button
								appearance='negative'
								mode='tertiary'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								Button
							</Button>

							<Button
								appearance='negative'
								mode='outline'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								Button
							</Button>
						</div>

						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 12,
								flexDirection: 'column',
							}}
						>
							<Footnote secondary>Icon</Footnote>

							<ButtonIcon appearance='negative'>
								<Icon28AddOutline />
							</ButtonIcon>

							<ButtonIcon appearance='negative' mode='secondary'>
								<Icon28AddOutline />
							</ButtonIcon>

							<ButtonIcon appearance='negative' mode='tertiary'>
								<Icon28AddOutline />
							</ButtonIcon>

							<ButtonIcon appearance='negative' mode='outline'>
								<Icon28AddOutline />
							</ButtonIcon>
						</div>

						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 12,
								flexDirection: 'column',
							}}
						>
							<Footnote>Neutral</Footnote>

							<Button
								appearance='neutral'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								Button
							</Button>

							<Button
								appearance='neutral'
								mode='secondary'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								Button
							</Button>

							<Button
								appearance='neutral'
								mode='tertiary'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								Button
							</Button>

							<Button
								appearance='neutral'
								mode='outline'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								Button
							</Button>
						</div>

						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 12,
								flexDirection: 'column',
							}}
						>
							<Footnote secondary>Icon</Footnote>

							<ButtonIcon appearance='neutral'>
								<Icon28AddOutline />
							</ButtonIcon>

							<ButtonIcon appearance='neutral' mode='secondary'>
								<Icon28AddOutline />
							</ButtonIcon>

							<ButtonIcon appearance='neutral' mode='tertiary'>
								<Icon28AddOutline />
							</ButtonIcon>

							<ButtonIcon appearance='neutral' mode='outline'>
								<Icon28AddOutline />
							</ButtonIcon>
						</div>
					</div>
				</Section>

				<Section>
					<Fontbody level={2} role='paragraph'>
						Сложно сказать, почему представители современных социальных резервов
						освещают чрезвычайно интересные особенности картины в целом, однако
						конкретные выводы, разумеется, превращены в посмешище, хотя само их
						существование приносит несомненную пользу обществу.
					</Fontbody>
				</Section>
			</SectionGroup>
		</Layout>
	)
}

export { Home }
