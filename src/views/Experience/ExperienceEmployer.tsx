import React, { useState, useEffect } from 'react'

import { useDocumentTitle } from 'hooks'

import ExperienceModel from 'models/Experience.interface'

import styles from './Experience.module.scss'

import { ExperienceItem, FeedbackItem } from 'components/shared'
import {
	Fontbody,
	Section,
	Button,
	Breadcrumbs,
	Heading,
	PageNavigation,
	Box,
	Tile,
} from 'components/ui'

import {
	Icon28LockOutline,
	Icon28LinkOutline,
	Icon28PictureOutline,
	Icon28LogoVkColor,
} from '@vkontakte/icons'

interface ExperienceEmployerProps {
	item: ExperienceModel['data'][number]
	theme: 'dark' | 'light' | undefined
}

const ExperienceEmployer: React.FC<ExperienceEmployerProps> = props => {
	const { item, theme } = props
	const [hasError, setHasError] = useState(false)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useDocumentTitle(item.employerInfo.name)

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
								after={<Icon28LinkOutline width={24} height={24} />}
							>
								{item.employerInfo.website.split('https://')}
							</Button>
						)}

						{item.labels.map((label, index) => (
							<Button
								key={item.id + '-' + index}
								size='sm'
								appearance={label.includes('закрыт') ? 'negative' : 'neutral'}
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

			<Section countColumns={10}>
				<PageNavigation />
			</Section>
		</>
	)
}

export { ExperienceEmployer }
