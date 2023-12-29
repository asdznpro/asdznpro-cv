import { useEffect } from 'react'

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
	Box,
	Tile,
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
				<Box>
					<PageTitle
						title='Проф. навыки'
						breadcrumbs={<Breadcrumbs customLabels={['Проф. навыки']} />}
					/>
				</Box>
			</Section>

			<SectionGroup gap='sm'>
				{storeHardSkillsData ? (
					<>
						{storeHardSkillsData.data.map(item => (
							<Section key={item.id} countColumns={8}>
								<Tile>
									<Box YPadding>
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
									</Box>
								</Tile>
							</Section>
						))}

						<Section countColumns={8}>
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
