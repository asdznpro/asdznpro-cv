import { useEffect } from 'react'

import { useDocumentTitle, useAppDispatch, useAppSelector } from 'hooks'
import { useGetHardSkillsQuery } from 'services/CommonApi'
import { setHardSkillsData } from 'store/СommonSlice'

import styles from './HardSkills.module.scss'

import { Layout } from 'components/layout'
import { HardSkillItem } from 'components/shared'
import {
	Section,
	PageTitle,
	Heading,
	Breadcrumbs,
	Spinner,
	PageNavigation,
	Box,
	Tile,
	Button,
} from 'components/ui'

import {
	Icon28BrainOutline,
	Icon28BabyBottleOutline,
	Icon24ExpositionOutline,
} from '@vkontakte/icons'

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
											>
												<Button
													size='xsm'
													appearance={
														skill.level === 'High'
															? 'positive'
															: skill.level === 'Middle'
															? 'neutral'
															: skill.level === 'Base'
															? 'negative'
															: undefined
													}
													before={
														skill.level === 'High' ? (
															<Icon28BrainOutline width={20} height={20} />
														) : skill.level === 'Middle' ? (
															<Icon24ExpositionOutline width={20} height={20} />
														) : skill.level === 'Base' ? (
															<Icon28BabyBottleOutline width={20} height={20} />
														) : undefined
													}
													noneAction
												>
													{skill.level}
												</Button>
											</HardSkillItem>
										))}
									</div>
								</Box>
							</Tile>
						))}

						{/* {storeHardSkillsData.data.map(item => (
							<Tile key={item.id}>
								<Box YPadding>
									<Heading level={3}>{item.jobTitle}</Heading>

									<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
										{item.stack.map((skill, index) => (
											<Button
												key={item.id + '-' + index}
												size='sm'
												appearance={
													skill.level === 'High'
														? 'positive'
														: skill.level === 'Middle'
														? 'neutral'
														: skill.level === 'Base'
														? 'negative'
														: undefined
												}
												mode='secondary'
												before={
													skill.image ? (
														<img
															src={skill.image}
															alt={skill.name}
															width={28}
															height={28}
														/>
													) : (
														<Spinner />
													)
												}
											>
												{skill.name}
											</Button>
										))}
									</div>
								</Box>
							</Tile>
						))} */}

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
