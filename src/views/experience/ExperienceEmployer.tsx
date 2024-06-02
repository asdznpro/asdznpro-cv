import * as React from 'react'

import { useState } from 'react'
import { useDocumentHead } from 'hooks'

import {
	ExperienceModel,
	FeedbackModel,
	LanguageModel,
	ThemeModel,
} from 'models'

import styles from './Experience.module.scss'

import { Experience } from './Experience'
import { FeedbackItem } from 'components/shared'
import {
	Fontbody,
	Section,
	Button,
	Heading,
	PageNavigation,
	Box,
	Tile,
	Carousel,
	BriefInfo,
} from 'components/ui'

import {
	Icon28LockOutline,
	Icon24LinkCircleFilled,
	Icon28PictureOutline,
	Icon28CalendarCheckOutline,
} from '@vkontakte/icons'

interface ExperienceEmployerProps {
	employerData: ExperienceModel['data'][number]
	feedbackData: FeedbackModel['data'][number]['feedback']
	language: LanguageModel
	theme: ThemeModel
}

const ExperienceEmployer: React.FC<ExperienceEmployerProps> = (props) => {
	const { employerData, feedbackData, language, theme } = props
	const [hasError, setHasError] = useState(false)

	// useEffect(() => {
	// 	window.scrollTo(0, 0)
	// }, [])

	useDocumentHead(
		language,
		employerData.employerInfo.name,
		'experience/' + employerData.pathname,
	)

	return (
		<>
			<Section countColumns={10}>
				{employerData.employerInfo.preview && (
					<Tile>
						<div className={styles.preview}>
							{!hasError ? (
								<img
									src={employerData.employerInfo.preview}
									alt={employerData.employerInfo.name}
									onError={() => setHasError(true)}
								/>
							) : (
								<Icon28PictureOutline width={40} height={40} />
							)}
						</div>
					</Tile>
				)}

				<Experience.Item
					key={employerData.id}
					title={employerData.employerInfo.name}
					logoPath={
						theme.mode === 'dark' && employerData.employerInfo.logoLight
							? employerData.employerInfo.logoLight
							: employerData.employerInfo.logo
					}
				>
					<Fontbody level={3} className="ui-text-secondary">
						{employerData.employerInfo.shortDescription}
					</Fontbody>

					<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
						{employerData.employerInfo.website && (
							<Button
								href={employerData.employerInfo.website}
								target="_blank"
								before={<Icon24LinkCircleFilled width={24} height={24} />}
							>
								{employerData.employerInfo.website.split('https://')}
							</Button>
						)}

						{employerData.labels.map((label, index) => (
							<Button
								key={employerData.id + '-' + index}
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
								rounded={label.id && label.id.includes('date') ? true : false}
								noneAction
							>
								{label.value}
							</Button>
						))}
					</div>
				</Experience.Item>
			</Section>

			<Section countColumns={10}>
				<Box>
					<Heading level={2} className="ui-text-uppercase ui-mb-12-px">
						Чем я занимался?
					</Heading>
				</Box>

				{employerData.info && (
					<Tile>
						<Box YPadding>
							<BriefInfo.Box>
								{employerData.info.map((itemInfo, index) => (
									<BriefInfo.Item
										key={index}
										title={itemInfo.title}
										icon={
											theme.mode === 'dark' && itemInfo.iconLight
												? itemInfo.iconLight
												: itemInfo.icon
										}
										value={itemInfo.value}
										href={itemInfo.href}
										level={2}
									/>
								))}
							</BriefInfo.Box>
						</Box>
					</Tile>
				)}

				<Tile>
					<Box YPadding>
						<Fontbody level={2}>В разработке</Fontbody>
					</Box>
				</Tile>
			</Section>

			<Section countColumns={10}>
				<Box>
					<Heading level={2} className="ui-text-uppercase ui-mb-12-px">
						Примеры работ
					</Heading>
				</Box>

				<Tile>
					<Box YPadding>
						<Fontbody level={2}>В разработке</Fontbody>
					</Box>
				</Tile>
			</Section>

			{feedbackData && feedbackData.length > 0 && (
				<div className="ui-max-w-full ui-overflow-hidden">
					<Section countColumns={10}>
						<Box>
							<Heading level={2} className="ui-text-uppercase ui-mb-12-px">
								Отзывы о работе
							</Heading>
						</Box>

						<Carousel.Embla>
							{feedbackData.map((item) => (
								<FeedbackItem
									key={item.id + item.id}
									avatar={item.avatar}
									fullName={item.fullName}
									jobTitle={item.jobTitle}
									value={item.value}
									style={{ flex: '0 0 100%' }}
								>
									{item.socialNetworks && (
										<Carousel.Embla>
											{item.socialNetworks &&
												item.socialNetworks.map((network, index) => (
													<Button
														key={item.id + '-' + index}
														href={network.href}
														target="_blank"
														appearance="neutral"
														before={
															<img
																src={network.icon}
																alt={
																	'@' +
																	network.href
																		.replace(/^\//, '')
																		.split('/')
																		.pop()
																}
															/>
														}
													>
														{'@' +
															network.href.replace(/^\//, '').split('/').pop()}
													</Button>
												))}
										</Carousel.Embla>
									)}
								</FeedbackItem>
							))}
						</Carousel.Embla>
					</Section>
				</div>
			)}

			{/* <Section countColumns={10}>
				<PageNavigation />
			</Section> */}
		</>
	)
}

export { ExperienceEmployer }
