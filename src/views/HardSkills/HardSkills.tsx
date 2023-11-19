import React, { useEffect } from 'react'

import { useDocumentTitle, useAppDispatch, useAppSelector } from 'hooks'
import { useGetHardSkillsQuery } from 'services/CommonApi'
import { setHardSkillsData } from 'store/СommonSlice'

import styles from './HardSkills.module.scss'

import { Layout } from 'components/layout'
import {
	Fontbody,
	Section,
	PageTitle,
	Heading,
	SectionGroup,
	Breadcrumbs,
	Spinner,
} from 'components/ui'

const HardSkills = () => {
	useDocumentTitle('Проф. навыки — Андрей Сухушин // Curriculum Vitae')

	const dispatch = useAppDispatch()

	const { data: hardSkillsData } = useGetHardSkillsQuery()
	const storeHardSkillsData = useAppSelector(state => state.common.hardSkills)

	useEffect(() => {
		if (hardSkillsData) {
			dispatch(setHardSkillsData(hardSkillsData))
		}
	}, [hardSkillsData, dispatch])

	useEffect(() => {
		console.log(storeHardSkillsData)
	}, [storeHardSkillsData])

	return (
		<Layout>
			<Section countColumns={8}>
				<Breadcrumbs customLabels={['Проф. навыки']} />
				<PageTitle title='Проф. навыки' />
			</Section>

			<SectionGroup gap='sm'>
				{storeHardSkillsData ? (
					storeHardSkillsData.data.map(item => (
						<Section key={item.id} countColumns={8} field>
							<Heading level={3}>{item.jobTitle}</Heading>

							<div
								style={{
									display: 'grid',
									gap: 20,
									gridTemplateColumns: '1fr 1fr',
								}}
							>
								{item.stack.map((skill, index) => (
									<React.Fragment key={item.id + '-' + index}>
										<Fontbody>{skill.name}</Fontbody>
									</React.Fragment>
								))}
							</div>
						</Section>
					))
				) : (
					<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
				)}
			</SectionGroup>
		</Layout>
	)
}

export { HardSkills }
