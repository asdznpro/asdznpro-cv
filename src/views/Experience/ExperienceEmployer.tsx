import React, { useState, useEffect } from 'react'

import { useDocumentTitle } from 'hooks'

import ExperienceModel from 'models/Experience.interface'

import styles from './Experience.module.scss'

import { ExperienceItem } from 'components/shared'
import {
	Fontbody,
	Section,
	Button,
	Breadcrumbs,
	SectionGroup,
	Heading,
	PageNavigation,
	Box,
	Tile,
} from 'components/ui'

import {
	Icon28LockOutline,
	Icon28LinkOutline,
	Icon28PictureOutline,
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

	useDocumentTitle(item.employerName + ' — Андрей Сухушин // Curriculum Vitae')

	return (
		<>
			<Section countColumns={10}>
				<Box>
					<Breadcrumbs customLabels={['Опыт работы', item.employerName]} />
				</Box>
			</Section>

			<SectionGroup gap='sm'>
				{item.employerPreview && (
					<Section countColumns={10}>
						<Tile>
							<div className={styles.preview}>
								{!hasError ? (
									<img
										src={item.employerPreview}
										alt={item.employerName}
										onError={() => setHasError(true)}
									/>
								) : (
									<Icon28PictureOutline width={40} height={40} />
								)}
							</div>
						</Tile>
					</Section>
				)}

				<ExperienceItem
					key={item.id}
					title={item.employerName}
					describe={item.fullDescription}
					logoPath={
						theme === 'dark' && item.employerLogoLight
							? item.employerLogoLight
							: item.employerLogo
					}
				>
					<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
						{item.employerWebsite && (
							<Button
								size='sm'
								href={item.employerWebsite}
								target='blank'
								after={<Icon28LinkOutline width={24} height={24} />}
							>
								{item.employerWebsite.split('https://')}
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
			</SectionGroup>

			<SectionGroup gap='sm'>
				<Section countColumns={10}>
					<Box>
						<Heading level={2}>Чем я занимался?</Heading>
					</Box>

					<Tile>
						<Box YPadding>
							<Fontbody level={2}>{item.fullDescription}</Fontbody>
						</Box>
					</Tile>
				</Section>
			</SectionGroup>

			<Section countColumns={10}>
				<PageNavigation>PageNavigation</PageNavigation>
			</Section>
		</>
	)
}

export { ExperienceEmployer }
