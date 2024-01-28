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
	Breadcrumbs,
	Spinner,
	PageNavigation,
	Box,
	Tile,
} from 'components/ui'
import { HardSkillItem } from 'components/shared'

const HardSkills = () => {
	const dispatch = useAppDispatch()

	const { data: hardSkillsData } = useGetHardSkillsQuery()
	const storeHardSkillsData = useAppSelector(state => state.common.hardSkills)

	useEffect(() => {
		if (hardSkillsData) {
			dispatch(setHardSkillsData(hardSkillsData))
		}
	}, [hardSkillsData, dispatch])

	useDocumentTitle(storeHardSkillsData ? storeHardSkillsData.displayName : '')

	return (
		<Layout>
			{storeHardSkillsData ? (
				<>
					<Section countColumns={8}>
						<Box>
							<PageTitle
								title={storeHardSkillsData.displayName}
								breadcrumbs={
									<Breadcrumbs
										customLabels={[storeHardSkillsData.displayName]}
									/>
								}
							/>
						</Box>
					</Section>

					<Section countColumns={8}>
						{storeHardSkillsData.data.map(item => (
							<Tile key={item.id}>
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
						))}

						<PageNavigation />
					</Section>
				</>
			) : (
				<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
			)}
		</Layout>
	)
}

export { HardSkills }
