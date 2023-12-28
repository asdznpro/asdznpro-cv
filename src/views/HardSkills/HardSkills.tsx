import React, { useEffect } from 'react'

import { useDocumentTitle, useAppDispatch, useAppSelector } from 'hooks'
import { useGetHardSkillsQuery } from 'services/CommonApi'
import { setHardSkillsData } from 'store/СommonSlice'

import styles from './HardSkills.module.scss'

import { Layout } from 'components/layout'
import {
	Section,
	PageTitle,
	Heading,
	SectionGroup,
	Breadcrumbs,
	Spinner,
	PageNavigation,
} from 'components/ui'
import { HardSkillItem } from 'components/shared'

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

	return (
		<Layout>
			<Section countColumns={8}>
				<Breadcrumbs customLabels={['Проф. навыки']} />
				<PageTitle title='Проф. навыки' />
			</Section>

			<SectionGroup gap='sm'>
				{storeHardSkillsData ? (
					<>
						{storeHardSkillsData.data.map(item => (
							<Section key={item.id} countColumns={8} field>
								<Heading level={3}>{item.jobTitle}</Heading>

								<div className={styles.list}>
									{item.stack.map((skill, index) => (
										<HardSkillItem
											key={item.id + '-' + index}
											image={skill.image}
											name={skill.name}
										/>
									))}
								</div>
							</Section>
						))}

						<Section countColumns={8} field>
							<PageNavigation>PageNavigation</PageNavigation>
						</Section>
					</>
				) : (
					<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
				)}
			</SectionGroup>
		</Layout>
	)
}

export { HardSkills }
