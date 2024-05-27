import * as React from 'react'

import { Route, Routes } from 'react-router-dom'

import { useAppSelector } from 'hooks'
import { selectLanguage, selectTheme } from 'store'

import styles from './Portfolio.module.scss'

import { PortfolioItem } from './PortfolioItem'
import { PortfolioList } from './PortfolioList'
import { PortfolioProject } from './PortfolioProject'
import { PortfolioItemSkeleton } from './PortfolioItemSkeleton'

import {
	Box,
	Breadcrumbs,
	PageNavigation,
	Section,
	Spinner,
	Tile,
} from 'components/ui'

const Portfolio = () => {
	const language = useAppSelector(selectLanguage)
	const theme = useAppSelector(selectTheme)

	const storePortfolioData = useAppSelector((state) => state.common.portfolio)

	return (
		<React.Fragment>
			<Routes>
				<Route
					path=""
					element={
						<Portfolio.List
							storePortfolioData={storePortfolioData}
							language={language.lang}
							theme={theme.mode}
						/>
					}
				/>

				{storePortfolioData ? (
					storePortfolioData.data.map((item) => (
						<Route
							key={item.id}
							path={item.project.pathname}
							element={
								<Portfolio.Project
									item={item}
									language={language.lang}
									theme={theme.mode}
								/>
							}
						/>
					))
				) : (
					<Route
						path="*"
						element={
							<>
								<Section countColumns={10}>
									<Box>
										<Breadcrumbs.Skeleton />
									</Box>
								</Section>

								<Section countColumns={10}>
									<Tile>
										<Box YPadding>
											<Spinner
												className="ui-mx-auto ui-py-48-px"
												width={36}
												height={36}
											/>
										</Box>
									</Tile>

									<PageNavigation.Skeleton />
								</Section>
							</>
						}
					/>
				)}
			</Routes>
		</React.Fragment>
	)
}

Portfolio.ItemSkeleton = PortfolioItemSkeleton
Portfolio.ItemSkeleton.displayName = 'Portfolio.ItemSkeleton'

Portfolio.Item = PortfolioItem
Portfolio.Item.displayName = 'Portfolio.Item'

Portfolio.List = PortfolioList
Portfolio.List.displayName = 'Portfolio.List'

Portfolio.Project = PortfolioProject
Portfolio.Project.displayName = 'Portfolio.Project'

Portfolio.displayName = 'Portfolio'

export { Portfolio }
