import React from 'react'

import { useDocumentTitle } from 'hooks'

import ExperienceModel from 'models/Experience.interface'

import { ExperienceItem } from 'components/shared'
import {
	Section,
	PageTitle,
	Button,
	Breadcrumbs,
	SectionGroup,
	Spinner,
	ButtonIcon,
} from 'components/ui'

import {
	Icon28CalendarCheckOutline,
	Icon28LockOutline,
	Icon28LinkOutline,
} from '@vkontakte/icons'

interface ExperienceListProps {
	storeExperienceData: ExperienceModel | null
	theme: 'dark' | 'light' | undefined
}

const ExperienceList: React.FC<ExperienceListProps> = props => {
	useDocumentTitle('Опыт работы — Андрей Сухушин // Curriculum Vitae')

	const { storeExperienceData, theme } = props

	return (
		<>
			<Section countColumns={10}>
				<Breadcrumbs customLabels={['Опыт работы']} />
				<PageTitle title='Опыт работы' />
			</Section>

			{storeExperienceData ? (
				<SectionGroup gap='sm'>
					{storeExperienceData.data.map(item => (
						<ExperienceItem
							key={item.id}
							title={item.employerName}
							describe={item.shortDescription}
							// logoPath={
							// 	theme === 'dark' && item.employerLogoLight
							// 		? item.employerLogoLight
							// 		: item.employerLogo
							// }
						>
							<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
								<ButtonIcon size='sm' to={item.pathname} rounded>
									<Icon28LinkOutline width={24} height={24} />
								</ButtonIcon>

								{item.labels.map((label, index) => (
									<Button
										key={item.id + '-' + index}
										size='sm'
										appearance={
											label.includes('закрыт') ? 'negative' : 'neutral'
										}
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
					))}
				</SectionGroup>
			) : (
				<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
			)}
		</>
	)
}

export { ExperienceList }
