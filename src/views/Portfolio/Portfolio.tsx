import { Route, Routes } from 'react-router-dom'

import { useAppSelector } from 'hooks'
import { selectLanguage, selectTheme } from 'store'

import styles from './Portfolio.module.scss'

import { Layout } from 'components/layout'
import { Spinner } from 'components/ui'

import { PortfolioProject } from './PortfolioProject'
import { PortfolioList } from './PortfolioList'

const Portfolio = () => {
	const language = useAppSelector(selectLanguage)
	const theme = useAppSelector(selectTheme)

	const storePortfolioData = useAppSelector(state => state.common.portfolio)

	return (
		<Layout>
			<Routes>
				<Route
					path=''
					element={
						<PortfolioList
							storePortfolioData={storePortfolioData}
							language={language}
							theme={theme}
						/>
					}
				/>

				{storePortfolioData ? (
					storePortfolioData.data.map(item => (
						<Route
							key={item.id}
							path={item.project.pathname}
							element={
								<PortfolioProject
									item={item}
									language={language}
									theme={theme}
								/>
							}
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
