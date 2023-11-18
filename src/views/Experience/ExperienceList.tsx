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
} from 'components/ui'

import { Icon28LockOutline } from '@vkontakte/icons'

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
							preview={item.employerPreview}
							to={item.pathname}
							// logoPath={
							// 	theme === 'dark' && item.employerLogoLight
							// 		? item.employerLogoLight
							// 		: item.employerLogo
							// }
						>
							<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
								{item.labels.map((label, index) => (
									<Button
										key={item.id + '-' + index}
										size='sm'
										appearance={
											label.includes('закрыт') ? 'negative' : 'neutral'
										}
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
					))}
				</SectionGroup>
			) : (
				<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
			)}
		</>
	)
}

export { ExperienceList }
