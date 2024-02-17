import React, { useState, useEffect } from 'react'

import { useDocumentTitle } from 'hooks'

import ExperienceModel from 'models/Experience.interface'

import styles from './Experience.module.scss'

import {
	ExperienceItem,
	FeedbackItem,
	BriefInfoBox,
	BriefInfoItem,
} from 'components/shared'
import {
	Fontbody,
	Section,
	Button,
	Heading,
	PageNavigation,
	Box,
	Tile,
} from 'components/ui'

import {
	Icon28LockOutline,
	Icon24LinkCircleFilled,
	Icon28PictureOutline,
	Icon28LogoVkColor,
	Icon28CalendarCheckOutline,
} from '@vkontakte/icons'

interface ExperienceEmployerProps {
	item: ExperienceModel['data'][number]
	language: 'ru' | 'en'
	theme: 'dark' | 'light' | undefined
}

const ExperienceEmployer: React.FC<ExperienceEmployerProps> = props => {
	const { item, language, theme } = props
	const [hasError, setHasError] = useState(false)

	// useEffect(() => {
	// 	window.scrollTo(0, 0)
	// }, [])

	useDocumentTitle(item.employerInfo.name, language)

	return (
		<>
			<Section countColumns={10}>
				{item.employerInfo.preview && (
					<Tile>
						<div className={styles.preview}>
							{!hasError ? (
								<img
									src={item.employerInfo.preview}
									alt={item.employerInfo.name}
									onError={() => setHasError(true)}
								/>
							) : (
								<Icon28PictureOutline width={40} height={40} />
							)}
						</div>
					</Tile>
				)}

				<ExperienceItem
					key={item.id}
					title={item.employerInfo.name}
					describe={item.employerInfo.shortDescription}
					logoPath={
						theme === 'dark' && item.employerInfo.logoLight
							? item.employerInfo.logoLight
							: item.employerInfo.logo
					}
				>
					<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
						{item.employerInfo.website && (
							<Button
								size='sm'
								href={item.employerInfo.website}
								target='blank'
								before={<Icon24LinkCircleFilled width={24} height={24} />}
							>
								{item.employerInfo.website.split('https://')}
							</Button>
						)}

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
								rounded={label.id && label.id.includes('date') ? true : false}
								noneAction
							>
								{label.value}
							</Button>
						))}
					</div>
				</ExperienceItem>

				{/* {item.info && (
					<Tile>
						<Box YPadding>
							<BriefInfoBox>
								{item.info.map((itemInfo, index) => (
									<BriefInfoItem
										key={index}
										title={itemInfo.title}
										icon={
											theme === 'dark' && itemInfo.iconLight
												? itemInfo.iconLight
												: itemInfo.icon
										}
										value={itemInfo.value}
										href={itemInfo.href}
									/>
								))}
							</BriefInfoBox>
						</Box>
					</Tile>
				)} */}
			</Section>

			<Section countColumns={10}>
				<Box>
					<Heading level={2}>Чем я занимался?</Heading>
				</Box>

				<Tile>
					<Box YPadding>
						<Fontbody level={2}>{item.employerInfo.fullDescription}</Fontbody>
					</Box>
				</Tile>
			</Section>

			{item.feedback && (
				<Section countColumns={10}>
					<Box>
						<Heading level={2}>Отзывы о работе</Heading>
					</Box>

					{item.feedback.map(item => (
						<FeedbackItem
							key={item.id}
							avatar={item.avatar}
							fullName={item.fullName}
							jobTitle={item.jobTitle}
							value={item.value}
						>
							<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
								{item.socialNetworks.map((network, index) => (
									<Button
										key={item.id + '-' + index}
										href={network.href}
										size='sm'
										target='blank'
										appearance='neutral'
										before={
											<img
												src={network.icon}
												alt={
													'@' + network.href.replace(/^\//, '').split('/').pop()
												}
											/>
										}
									>
										{'@' + network.href.replace(/^\//, '').split('/').pop()}
									</Button>
								))}
							</div>
						</FeedbackItem>
					))}
				</Section>
			)}

			<Section countColumns={10}>
				<PageNavigation />
			</Section>
		</>
	)
}

export { ExperienceEmployer }
