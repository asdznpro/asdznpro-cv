import * as React from 'react'

import { useEffect } from 'react'
import { useDocumentTitle, useAppDispatch, useAppSelector } from 'hooks'

import { useGetEducationQuery } from 'services/CommonApi'
import { setEducationData, selectLanguage, selectTheme } from 'store'

import styles from './Education.module.scss'

import {
	BriefInfo,
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
	const storeEducationData = useAppSelector((state) => state.common.education)

	useEffect(() => {
		if (educationData) {
			dispatch(setEducationData(educationData))
		}
	}, [educationData, dispatch])

	useDocumentTitle(
		storeEducationData ? storeEducationData.displayName : '',
		language.lang,
	)

	return (
		<React.Fragment>
			{storeEducationData ? (
				<>
					<Section countColumns={10}>
						<Box>
							<PageTitle
								title={storeEducationData.displayName}
								before={
									<Breadcrumbs
										customLabels={[storeEducationData.displayName]}
										selectLanguage={language.lang}
									/>
								}
							/>
						</Box>
					</Section>

					<Section countColumns={10}>
						{storeEducationData.data.map((item) => (
							<Tile key={item.id}>
								<Box YPadding>
									<BriefInfo.Box>
										{item.info.map((info, index) => (
											<BriefInfo.Item
												key={item.id + '-' + index}
												title={info.title}
												icon={
													theme.mode === 'dark' && info.icon
														? info.iconLight
														: info.icon
												}
												value={info.value}
												href={info.href}
											/>
										))}
									</BriefInfo.Box>
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
