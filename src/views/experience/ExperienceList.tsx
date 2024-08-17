import React from 'react'

import { useDocumentHead } from 'hooks'

import { ExperienceType, LanguageType, ThemeType } from 'types'

import { Experience } from './Experience'

import {
	Section,
	PageTitle,
	Button,
	Breadcrumbs,
	PageNavigation,
	Box,
	Fontbody,
} from 'components/ui'

import { Icon28LockOutline, Icon28CalendarCheckOutline } from '@vkontakte/icons'

interface ExperienceListProps {
	data: ExperienceType | null
	language: LanguageType
	theme: ThemeType
}

const ExperienceList: React.FC<ExperienceListProps> = (props) => {
	const { data, language, theme } = props

	useDocumentHead(
		language,
		data ? data.displayName : '',
		data ? data.pathname : '',
	)

	return (
		<>
			{data ? (
				<>
					<Section countColumns={10}>
						<Box>
							<PageTitle
								title={data.displayName}
								before={
									<Breadcrumbs
										customLabels={[data.displayName]}
										selectLanguage={language}
									/>
								}
							/>
						</Box>
					</Section>

					<Section countColumns={10}>
						{data.data.map((item) => (
							<Experience.Item
								key={item.id}
								to={item.pathname}
								title={item.employerInfo.name}
								preview={item.employerInfo.preview}
								logoPath={
									theme.mode === 'dark' && item.employerInfo.logoLight
										? item.employerInfo.logoLight
										: item.employerInfo.logo
								}
							>
								<Fontbody level={3} className="ui-text-secondary ui-clamp-2">
									{item.employerInfo.shortDescription}
								</Fontbody>

								<div className="ui-flex ui-gap-6-px ui-flex-wrap">
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
																theme.mode === 'dark' && label.iconLight
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

						<PageNavigation
							selectLanguage={language}
							previousPage={{ name: 'Обо мне', pathname: '/about' }}
							nextPage={{ name: 'Портфолио', pathname: '/portfolio' }}
						/>
					</Section>
				</>
			) : (
				<>
					<Section countColumns={10}>
						<Box>
							<PageTitle.Skeleton before={<Breadcrumbs.Skeleton />} />
						</Box>
					</Section>

					<Section countColumns={10}>
						{[...Array(3)].map((_, index) => (
							<Experience.ItemSkeleton key={index} />
						))}

						<PageNavigation.Skeleton />
					</Section>
				</>
			)}
		</>
	)
}

export { ExperienceList }
