import * as React from 'react'

import { useEffect } from 'react'
import { useDocumentTitle, useAppDispatch, useAppSelector } from 'hooks'

import { useGetEducationQuery } from 'services/CommonApi'
import { setEducationData, selectLanguage, selectTheme } from 'store'

import styles from './Education.module.scss'

import { BriefInfoBox, BriefInfoItem } from 'components/shared'
import {
	Section,
	PageTitle,
	Breadcrumbs,
	Spinner,
	PageNavigation,
	Box,
	Tile,
} from 'components/ui'

const Education = () => {
	const dispatch = useAppDispatch()

	const language = useAppSelector(selectLanguage)
	const theme = useAppSelector(selectTheme)

	// useGetEducationQuery

	const { data: educationData } = useGetEducationQuery({ language })
	const storeEducationData = useAppSelector(state => state.common.education)

	useEffect(() => {
		if (educationData) {
			dispatch(setEducationData(educationData))
		}
	}, [educationData, dispatch])

	useDocumentTitle(
		storeEducationData ? storeEducationData.displayName : '',
		language
	)

	return (
		<React.Fragment>
			{storeEducationData ? (
				<>
					<Section countColumns={10}>
						<Box>
							<PageTitle
								title={storeEducationData.displayName}
								breadcrumbs={
									<Breadcrumbs
										customLabels={[storeEducationData.displayName]}
										selectLanguage={language}
									/>
								}
							/>
						</Box>
					</Section>

					<Section countColumns={10}>
						{storeEducationData.data.map(item => (
							<Tile key={item.id}>
								<Box YPadding>
									<BriefInfoBox>
										{item.info.map((info, index) => (
											<BriefInfoItem
												key={item.id + '-' + index}
												title={info.title}
												icon={
													theme === 'dark' && info.icon
														? info.iconLight
														: info.icon
												}
												value={info.value}
												href={info.href}
											/>
										))}
									</BriefInfoBox>
								</Box>
							</Tile>
						))}

						<PageNavigation />
					</Section>
				</>
			) : (
				<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
			)}
		</React.Fragment>
	)
}

export { Education }
