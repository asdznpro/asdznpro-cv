import React from 'react'

import { useDocumentTitle } from 'hooks'

import ExperienceModel from 'models/Experience.interface'

import { ExperienceItem } from 'components/shared'
import {
	Fontbody,
	Section,
	PageTitle,
	Button,
	Breadcrumbs,
	SectionGroup,
	Footnote,
	Spinner,
	Heading,
	ButtonIcon,
} from 'components/ui'

import {
	Icon28CalendarCheckOutline,
	Icon28LockOutline,
	Icon28LinkOutline,
} from '@vkontakte/icons'

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
								label.includes('год') ||
								label.includes('месяца') ||
								label.includes('мая') ? (
									<Icon28CalendarCheckOutline width={24} height={24} />
								) : label.includes('закрыт') ? (
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

			{/* <Section countColumns={10}>
										<Heading level={2}>Чем я занимался?</Heading>
									</Section> */}

			<Section countColumns={10} field>
				<Fontbody level={2}>{item.fullDescription}</Fontbody>
			</Section>

			{/* <Section countColumns={10}>
										<Heading level={2}>Примеры работ</Heading>
									</Section>

									<Section countColumns={10}>
										<Heading level={2}>Отзывы о работе</Heading>
									</Section> */}
		</>
	)
}

export { ExperienceEmployer }
