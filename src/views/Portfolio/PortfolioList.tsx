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
	SectionGroup,
} from 'components/ui'
import { PortfolioItem } from 'components/shared'

interface PortfolioListProps {
	storePortfolioData: PortfolioModel | null
}

const PortfolioList: React.FC<PortfolioListProps> = props => {
	const { storePortfolioData } = props
	const { screenWidth } = useDynamicAlignment()

	useDocumentTitle('Портфолио — Андрей Сухушин // Curriculum Vitae')

	return (
		<>
			<Section>
				<Breadcrumbs customLabels={['Портфолио']} />
				<PageTitle title='Портфолио' />
			</Section>

			<Section>
				<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
					<Button disabled={!storePortfolioData}>Все работы</Button>
					<Button
						mode='outline'
						appearance='neutral'
						disabled={!storePortfolioData}
					>
						Новое (4)
					</Button>
					<Button
						mode='outline'
						appearance='neutral'
						disabled={!storePortfolioData}
					>
						Графический дизайн (4)
					</Button>
					<Button
						mode='outline'
						appearance='neutral'
						disabled={!storePortfolioData}
					>
						UI/UX (4)
					</Button>
					<Button
						mode='outline'
						appearance='neutral'
						disabled={!storePortfolioData}
					>
						Фронтенд (4)
					</Button>
				</div>
			</Section>

			{storePortfolioData ? (
				<SectionGroup gap='sm'>
					<Section withoutXPadding={screenWidth <= 768}>
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
					</Section>
				</SectionGroup>
			) : (
				<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
			)}
		</>
	)
}

export { PortfolioList }
