import React from 'react'

import { useDocumentTitle } from 'hooks'

import PortfolioModel from 'models/Portfolio.interface'

import styles from './Portfolio.module.scss'

import {
	Fontbody,
	Section,
	PageTitle,
	Breadcrumbs,
	Button,
	Spinner,
	SectionGroup,
	Heading,
} from 'components/ui'

interface PortfolioListProps {
	storePortfolioData: PortfolioModel | null
}

const PortfolioList: React.FC<PortfolioListProps> = props => {
	const { storePortfolioData } = props

	useDocumentTitle('Портфолио — Андрей Сухушин // Curriculum Vitae')

	return (
		<>
			<Section>
				<Breadcrumbs customLabels={['Портфолио']} />
				<PageTitle title='Портфолио' />
			</Section>

			{storePortfolioData ? (
				<SectionGroup gap='sm'>
					{storePortfolioData.data.map(item => (
						<Section key={item.id} to={item.pathname} field>
							<Fontbody level={3} secondary>
								{item.tags
									.map(tag => tag.name)
									.filter(name => name)
									.join(', ') +
									' • от ' +
									item.projectDate}
							</Fontbody>

							<Heading level={4}>{item.projectName}</Heading>

							<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
								{item.client.map((client, index) => (
									<Button key={item.id + '-' + index} size='sm' noneAction>
										{client}
									</Button>
								))}
							</div>
						</Section>
					))}
				</SectionGroup>
			) : (
				<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
			)}
		</>
	)
}

export { PortfolioList }
