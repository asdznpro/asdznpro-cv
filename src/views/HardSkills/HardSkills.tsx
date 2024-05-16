import * as React from 'react'

import { useEffect } from 'react'
import { useDocumentTitle, useAppDispatch, useAppSelector } from 'hooks'

import { useGetHardSkillsQuery } from 'services/CommonApi'
import { setHardSkillsData, selectLanguage } from 'store'

import styles from './HardSkills.module.scss'

import { HardSkillItem } from './HardSkillItem'
import { HardSkillItemSkeleton } from './HardSkillItemSkeleton'

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
	Footnote,
} from 'components/ui'

import {
	Icon28CheckCircleOn,
	Icon28StopCircleOutline,
	Icon28CheckCircleOff,
} from '@vkontakte/icons'

const HardSkills = () => {
	const dispatch = useAppDispatch()

	const language = useAppSelector(selectLanguage)

	// useGetHardSkillsQuery

	const { data: hardSkillsData } = useGetHardSkillsQuery({ language })
	const storeHardSkillsData = useAppSelector(state => state.common.hardSkills)

	useEffect(() => {
		if (hardSkillsData) {
			dispatch(setHardSkillsData(hardSkillsData))
		}
	}, [hardSkillsData, dispatch])

	useDocumentTitle(
		storeHardSkillsData ? storeHardSkillsData.displayName : '',
		language
	)

	return (
		<React.Fragment>
			{storeHardSkillsData ? (
				<>
					<Section countColumns={8}>
						<Box>
							<PageTitle
								title={storeHardSkillsData.displayName}
								before={
									<Breadcrumbs
										customLabels={[storeHardSkillsData.displayName]}
										selectLanguage={language}
									/>
								}
							/>
						</Box>
					</Section>

					<Section countColumns={8}>
						{storeHardSkillsData.data.map(item => (
							<Tile key={item.id}>
								<Box YPadding>
									<Heading level={3} className='ui-text-uppercase'>
										{item.jobTitle}
									</Heading>

									<div className={styles.list}>
										{item.stack.map((skill, index) => (
											<HardSkills.Item
												key={item.id + '-' + index}
												src={skill.image}
												name={skill.name}
											>
												{/* <Footnote level={2} className='ui-text-secondary'>
													JavaScript в браузере и взаимодействия с ним: DOM,
													события, http-запросы
												</Footnote> */}

												<Button
													buttonSize='xsm'
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
															<Icon28CheckCircleOn width={20} height={20} />
														) : skill.level === 'Middle' ? (
															<Icon28StopCircleOutline width={20} height={20} />
														) : skill.level === 'Base' ? (
															<Icon28CheckCircleOff width={20} height={20} />
														) : undefined
													}
													noneAction
													rounded
												>
													{skill.level}
												</Button>
											</HardSkills.Item>
										))}
									</div>
								</Box>
							</Tile>
						))}

						<PageNavigation />
					</Section>
				</>
			) : (
				<Section countColumns={8}>
					{[...Array(2)].map((_, index) => (
						<Tile key={index}>
							<Box YPadding>
								<div className={styles.list}>
									{[...Array(6)].map((_, index) => (
										<HardSkills.Skeleton key={index} />
									))}
								</div>
							</Box>
						</Tile>
					))}

					<PageNavigation.Skeleton />
				</Section>
			)}
		</React.Fragment>
	)
}

HardSkills.Skeleton = HardSkillItemSkeleton
HardSkills.Skeleton.displayName = 'HardSkill.Skeleton'

HardSkills.Item = HardSkillItem
HardSkills.Item.displayName = 'HardSkill.Item'

HardSkills.displayName = 'HardSkills'

export { HardSkills }
