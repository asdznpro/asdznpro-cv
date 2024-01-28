import React from 'react'

import { useDocumentTitle, useDynamicAlignment } from 'hooks'

import styles from './Portfolio.module.scss'
import PortfolioModel from 'models/Portfolio.interface'

import {
	Section,
	PageTitle,
	Breadcrumbs,
	Button,
	Spinner,
	PageNavigation,
	Box,
	Counter,
} from 'components/ui'
import { PortfolioItem } from 'components/shared'

interface PortfolioListProps {
	storePortfolioData: PortfolioModel | null
}

const PortfolioList: React.FC<PortfolioListProps> = props => {
	const { storePortfolioData } = props
	const { screenWidth } = useDynamicAlignment()

	useDocumentTitle(storePortfolioData ? storePortfolioData.displayName : '')

	return (
		<>
			{storePortfolioData ? (
				<>
					<Section>
						<Box>
							<PageTitle
								title={storePortfolioData.displayName}
								breadcrumbs={
									<Breadcrumbs
										customLabels={[storePortfolioData.displayName]}
									/>
								}
							/>
						</Box>
					</Section>

					<Section>
						<Box>
							<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
								<Button
									after={<Counter appearance='neutral'>12</Counter>}
									disabled={!storePortfolioData}
								>
									Все работы
								</Button>
								<Button
									mode='outline'
									appearance='neutral'
									after={<Counter appearance='neutral'>4</Counter>}
									disabled={!storePortfolioData}
								>
									Новое
								</Button>
								<Button
									mode='outline'
									appearance='neutral'
									after={<Counter appearance='neutral'>5</Counter>}
									disabled={!storePortfolioData}
								>
									Графический дизайн
								</Button>
								<Button
									mode='outline'
									appearance='neutral'
									after={<Counter appearance='neutral'>1</Counter>}
									disabled={!storePortfolioData}
								>
									UI/UX
								</Button>
								<Button
									mode='outline'
									appearance='neutral'
									after={<Counter appearance='neutral'>3</Counter>}
									disabled={!storePortfolioData}
								>
									Фронтенд
								</Button>
							</div>
						</Box>
					</Section>

					<Section>
						<Box>
							<div
								className={styles.list}
								style={{ gridTemplateColumns: screenWidth <= 768 ? '1fr' : '' }}
							>
								{storePortfolioData.data.map(item => (
									<PortfolioItem
										key={item.id}
										to={item.pathname}
										projectName={item.projectName}
										tags={item.tags
											.map(tag => tag.name)
											.filter(name => name)
											.join(', ')}
										date={'\u00A0• от\u00A0' + item.projectDate}
									/>
								))}
							</div>
						</Box>
					</Section>

					<Section>
						<PageNavigation />
					</Section>
				</>
			) : (
				<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
			)}
		</>
	)
}

export { PortfolioList }
