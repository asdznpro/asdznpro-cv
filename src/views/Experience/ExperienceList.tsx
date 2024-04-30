import * as React from 'react'

import { useDynamicAlignment, useDocumentTitle } from 'hooks'

import { ExperienceModel } from 'models'

import { Experience } from './Experience'

import {
	Section,
	PageTitle,
	Button,
	Breadcrumbs,
	Spinner,
	PageNavigation,
	Box,
	Fontbody,
} from 'components/ui'

import { Icon28LockOutline, Icon28CalendarCheckOutline } from '@vkontakte/icons'

interface ExperienceListProps {
	storeExperienceData: ExperienceModel | null
	language: 'ru' | 'en'
	theme: 'dark' | 'light' | undefined
}

const ExperienceList: React.FC<ExperienceListProps> = props => {
	const { storeExperienceData, language, theme } = props
	const { screenWidth } = useDynamicAlignment()

	useDocumentTitle(
		storeExperienceData ? storeExperienceData.displayName : '',
		language
	)

	return (
		<>
			{storeExperienceData ? (
				<>
					<Section countColumns={10}>
						<Box>
							<PageTitle
								title={storeExperienceData.displayName}
								before={
									<Breadcrumbs
										customLabels={[storeExperienceData.displayName]}
										selectLanguage={language}
									/>
								}
							/>
						</Box>
					</Section>

					<Section countColumns={10}>
						{storeExperienceData.data.map(item => (
							<Experience.Item
								key={item.id}
								to={item.pathname}
								title={item.employerInfo.name}
								preview={screenWidth <= 768 ? item.employerInfo.preview : ''}
								logoPath={
									theme === 'dark' && item.employerInfo.logoLight
										? item.employerInfo.logoLight
										: item.employerInfo.logo
								}
							>
								<Fontbody level={3} className='ui-text-secondary ui-clamp-2'>
									{item.employerInfo.shortDescription}
								</Fontbody>

								<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
									{item.labels.map((label, index) => (
										<Button
											key={item.id + '-' + index}
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
							</Experience.Item>
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
