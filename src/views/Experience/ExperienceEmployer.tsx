import React from 'react'

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
	Footnote,
	Heading,
} from 'components/ui'

import { Icon28LockOutline, Icon28LinkOutline } from '@vkontakte/icons'

interface ExperienceEmployerProps {
	item: ExperienceModel['data'][number]
	theme: 'dark' | 'light' | undefined
}

const ExperienceEmployer: React.FC<ExperienceEmployerProps> = props => {
	const { item, theme } = props

	useDocumentTitle(item.employerName + ' — Андрей Сухушин // Curriculum Vitae')

	return (
		<>
			<Section countColumns={10}>
				<Breadcrumbs customLabels={['Опыт работы', item.employerName]} />
			</Section>

			<SectionGroup gap='sm'>
				{item.employerPreview && (
					<Section countColumns={10} field withoutAllPadding>
						<div className={styles.preview}>
							<img src={item.employerPreview} alt={item.employerName} />
						</div>
					</Section>
				)}

				<ExperienceItem
					key={item.id}
					title={item.employerName}
					describe={item.fullDescription}
				>
					<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
						{item.employerWebsite && (
							<Button
								size='sm'
								href={item.employerWebsite}
								target='blank'
								after={<Icon28LinkOutline width={24} height={24} />}
							>
								<Footnote>{item.employerWebsite.split('https://')}</Footnote>
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
					<Heading level={2}>Чем я занимался?</Heading>
				</Section>
				<Section countColumns={10} field>
					<Fontbody level={2}>{item.fullDescription}</Fontbody>
				</Section>
			</SectionGroup>
		</>
	)
}

export { ExperienceEmployer }
