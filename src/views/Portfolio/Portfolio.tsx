import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'hooks'
import { useGetPortfolioQuery } from 'services/CommonApi'
import { setPortfolioData } from 'store/СommonSlice'
import { selectTheme } from 'store/ThemeSlice'

import styles from './Portfolio.module.scss'

import { Layout } from 'components/layout'
import { Spinner } from 'components/ui'

import { PortfolioProject } from './PortfolioProject'
import { PortfolioList } from './PortfolioList'

const Portfolio = () => {
	const dispatch = useAppDispatch()

	const theme = useAppSelector(selectTheme)

	const { data: portfolioData } = useGetPortfolioQuery()
	const storePortfolioData = useAppSelector(state => state.common.portfolio)

	useEffect(() => {
		if (portfolioData) {
			dispatch(setPortfolioData(portfolioData))
		}
	}, [portfolioData, dispatch])

	return (
		<Layout>
			<Routes>
				<Route
					path=''
					element={<PortfolioList storePortfolioData={storePortfolioData} />}
				/>

				{storePortfolioData ? (
					storePortfolioData.data.map(item => (
						<Route
							key={item.id}
							path={item.pathname}
							element={<PortfolioProject item={item} theme={theme} />}
						/>
					))
				) : (
					<Route
						path='*'
						element={
							<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
						}
					/>
				)}
			</Routes>
		</Layout>
	)
}

export { Portfolio }
