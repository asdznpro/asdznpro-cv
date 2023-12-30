import React from 'react'

import { useDynamicAlignment, useDocumentTitle } from 'hooks'

import ExperienceModel from 'models/Experience.interface'

import { ExperienceItem } from 'components/shared'
import {
	Section,
	PageTitle,
	Button,
	Breadcrumbs,
	SectionGroup,
	Spinner,
	PageNavigation,
	Box,
} from 'components/ui'

import { Icon28LockOutline } from '@vkontakte/icons'

interface ExperienceListProps {
	storeExperienceData: ExperienceModel | null
	theme: 'dark' | 'light' | undefined
}

const ExperienceList: React.FC<ExperienceListProps> = props => {
	useDocumentTitle('Опыт работы — Андрей Сухушин // Curriculum Vitae')

	const { screenWidth } = useDynamicAlignment()
	const { storeExperienceData, theme } = props

	return (
		<>
			<Section countColumns={10}>
				<Box>
					<PageTitle
						title='Опыт работы'
						breadcrumbs={<Breadcrumbs customLabels={['Опыт работы']} />}
					/>
				</Box>
			</Section>

			{storeExperienceData ? (
				<Section countColumns={10}>
					{storeExperienceData.data.map(item => (
						<ExperienceItem
							key={item.id}
							title={item.employerInfo.name}
							describe={item.employerInfo.shortDescription}
							preview={screenWidth <= 768 ? item.employerInfo.preview : ''}
							to={item.pathname}
							ellipsis
							logoPath={
								theme === 'dark' && item.employerInfo.logoLight
									? item.employerInfo.logoLight
									: item.employerInfo.logo
							}
						>
							<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
								{item.labels.map((label, index) => (
									<Button
										key={item.id + '-' + index}
										size='sm'
										appearance={
											label.includes('закрыт') ? 'negative' : 'neutral'
										}
										before={
											label.includes('закрыт') ? (
												<Icon28LockOutline width={24} height={24} />
											) : (
												''
											)
										}
										noneAction
									>
										{label}
									</Button>
								))}
							</div>
						</ExperienceItem>
					))}

					<PageNavigation>PageNavigation</PageNavigation>
				</Section>
			) : (
				<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
			)}
		</>
	)
}

export { ExperienceList }
