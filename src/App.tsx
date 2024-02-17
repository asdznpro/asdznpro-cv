import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { RootState } from 'store'
import {
	useAppDispatch,
	useAppSelector,
	usePreferredTheme,
	useLanguage,
} from 'hooks'
import {
	useGetCvMapQuery,
	useGetAboutQuery,
	useGetPortfolioQuery,
} from 'services/CommonApi'
import { setCvMapData, setAboutData, setPortfolioData } from 'store/СommonSlice'

import 'assets/styles/index.scss'

import { AppRouter } from 'components/router'

function App() {
	const dispatch = useAppDispatch()

	// useLanguage

	useLanguage()

	const language = useAppSelector((state: RootState) => state.language.language)

	useEffect(() => {
		document.documentElement.lang = language

		const title =
			language === 'en'
				? `Andrew Sukhushin's Curriculum Vitae`
				: 'Андрей Сухушин // Curriculum Vitae'

		document.title = title

		const description =
			language === 'en'
				? 'Graphic Designer with over 5 years of experience creating unique and creative design solutions. In the past year, also actively developing in the field of UI/UX Design and Frontend Development, striving to apply a creative approach to creating functional and attractive web interfaces // Frontend Developer, UI/UX, Graphic Designer'
				: 'Графический дизайнер с более чем 5-летним стажем работы в создании уникальных и креативных дизайн-решений. В последний год также активно развиваюсь в области UI/UX дизайна и Frontend-разработки, стремясь применять свой творческий подход к созданию функциональных и привлекательных веб-интерфейсов // Frontend-разработчик, UI/UX, Графический дизайнер'

		const metaDescription = document.querySelector('meta[name="description"]')

		if (metaDescription) {
			metaDescription.setAttribute('content', description)
		}

		const ogTitle = document.querySelector('meta[property="og:title"]')

		if (ogTitle) {
			ogTitle.setAttribute('content', title)
		}

		const ogDescription = document.querySelector(
			'meta[property="og:description"]'
		)

		if (ogDescription) {
			ogDescription.setAttribute('content', description)
		}
	}, [language])

	// usePreferredTheme

	usePreferredTheme()

	const theme = useAppSelector((state: RootState) => state.theme.theme)

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)

		const metaThemeColor = document.querySelector('meta[name=theme-color]')

		if (metaThemeColor) {
			metaThemeColor.setAttribute(
				'content',
				theme === 'dark' ? '#17171C' : '#F4F4F6'
			)
		}
	}, [theme])

	// useGetAboutQuery

	const { data: aboutData } = useGetAboutQuery({ language })

	useEffect(() => {
		if (aboutData) {
			dispatch(setAboutData(aboutData))
		}
	}, [aboutData, dispatch])

	// useGetCvMapQuery

	const { data: cvMapData } = useGetCvMapQuery({ language })

	useEffect(() => {
		if (cvMapData) {
			dispatch(setCvMapData(cvMapData))
		}
	}, [cvMapData, dispatch])

	// useGetPortfolioQuery

	const { data: portfolioData } = useGetPortfolioQuery({ language })

	useEffect(() => {
		if (portfolioData) {
			dispatch(setPortfolioData(portfolioData))
		}
	}, [portfolioData, dispatch])

	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	)
}

export default App
