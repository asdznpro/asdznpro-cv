import React from 'react'

import { useDynamicAlignment, useDocumentTitle } from 'hooks'

import ExperienceModel from 'models/Experience.interface'

import { ExperienceItem } from 'components/shared'
import {
	Section,
	PageTitle,
	Button,
	Breadcrumbs,
	Spinner,
	PageNavigation,
	Box,
} from 'components/ui'

import { Icon28LockOutline, Icon28CalendarCheckOutline } from '@vkontakte/icons'

interface ExperienceListProps {
	storeExperienceData: ExperienceModel | null
	theme: 'dark' | 'light' | undefined
}

const ExperienceList: React.FC<ExperienceListProps> = props => {
	const { screenWidth } = useDynamicAlignment()
	const { storeExperienceData, theme } = props

	useDocumentTitle(storeExperienceData ? storeExperienceData.displayName : '')

	return (
		<>
			{storeExperienceData ? (
				<>
					<Section countColumns={10}>
						<Box>
							<PageTitle
								title={storeExperienceData.displayName}
								breadcrumbs={
									<Breadcrumbs
										customLabels={[storeExperienceData.displayName]}
									/>
								}
							/>
						</Box>
					</Section>

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
												label.id && label.id.includes('project-closed')
													? 'negative'
													: 'neutral'
											}
											before={
												label.id && label.id.includes('project-closed') ? (
													<Icon28LockOutline width={24} height={24} />
												) : label.id && label.id.includes('date') ? (
													<Icon28CalendarCheckOutline width={24} height={24} />
												) : (
													label.icon && (
														<img
															src={
																theme === 'dark' && label.iconLight
																	? label.iconLight
																	: label.icon
															}
															alt={label.value}
														/>
													)
												)
											}
											rounded={
												label.id && label.id.includes('date') ? true : false
											}
											noneAction
										>
											{label.value}
										</Button>
									))}
								</div>
							</ExperienceItem>
						))}

						<PageNavigation />
					</Section>
				</>
			) : (
				<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
			)}
		</>
	)
}

export { ExperienceList }
