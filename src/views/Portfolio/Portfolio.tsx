import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useDocumentTitle, useAppDispatch, useAppSelector } from 'hooks'
import { useGetPortfolioQuery } from 'services/CommonApi'
import { setPortfolioData } from 'store/СommonSlice'

import styles from './Portfolio.module.scss'

import { Layout } from 'components/layout'
import {
	Fontbody,
	Section,
	PageTitle,
	Button,
	Breadcrumbs,
} from 'components/ui'

import { Icon28ChevronRightCircle } from '@vkontakte/icons'

const Portfolio = () => {
	useDocumentTitle('Портфолио — Андрей Сухушин // Curriculum Vitae')

	const dispatch = useAppDispatch()

	const { data: portfolioData } = useGetPortfolioQuery()
	const storePortfolioData = useAppSelector(state => state.common.portfolio)

	useEffect(() => {
		if (portfolioData) {
			dispatch(setPortfolioData(portfolioData))
		}
	}, [portfolioData, dispatch])

	useEffect(() => {
		console.log(storePortfolioData)
	}, [storePortfolioData])

	return (
		<Layout>
			<Routes>
				<Route
					path=''
					element={
						<>
							<Section>
								<Breadcrumbs customLabels={['Портфолио', 'UpBalance']} />
								<PageTitle
									title='Портфолио'
									describe='Но глубокий уровень погружения требует определения и уточнения системы массового участия. Однозначно, некоторые особенности внутренней политики объединены в целые кластеры себе подобных.'
								/>
							</Section>

							<Section>
								<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
									<Button rounded>Все работы</Button>
									<Button mode='secondary' appearance='neutral'>
										Новое
									</Button>
									<Button mode='secondary' appearance='neutral'>
										Графический дизайн
									</Button>
									<Button mode='outline' appearance='neutral'>
										UI/UX
									</Button>
									<Button mode='outline' appearance='neutral'>
										Фронтенд
									</Button>
								</div>
							</Section>

							<Section field>
								<Button to='upbalance' after={<Icon28ChevronRightCircle />}>
									Go link
								</Button>

								<Fontbody level={2} role='paragraph'>
									Сложно сказать, почему представители современных социальных
									резервов освещают чрезвычайно интересные особенности картины в
									целом, однако конкретные выводы, разумеется, превращены в
									посмешище, хотя само их существование приносит несомненную
									пользу обществу.
								</Fontbody>
							</Section>
						</>
					}
				/>

				<Route
					path='upbalance'
					element={
						<>
							<Section countColumns={10}>
								<Breadcrumbs customLabels={['Портфолио', 'UpBalance']} />
								<PageTitle title='UpBalance' />
							</Section>

							<Section countColumns={10} field>
								<Fontbody level={2} role='paragraph'>
									Сложно сказать, почему представители современных социальных
									резервов освещают чрезвычайно интересные особенности картины в
									целом, однако конкретные выводы, разумеется, превращены в
									посмешище, хотя само их существование приносит несомненную
									пользу обществу.
								</Fontbody>
							</Section>
						</>
					}
				/>
			</Routes>
		</Layout>
	)
}

export { Portfolio }
