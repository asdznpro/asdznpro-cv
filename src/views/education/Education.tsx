import * as React from 'react'

import { useEffect } from 'react'
import { useDocumentHead, useAppDispatch, useAppSelector } from 'hooks'

import { useGetEducationQuery } from 'services'
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
	const data = useAppSelector((state) => state.common.education) // storeEducationData

	useEffect(() => {
		if (educationData) {
			dispatch(setEducationData(educationData))
		}
	}, [educationData, dispatch])

	useDocumentHead(
		language,
		data ? data.displayName : '',
		data ? data.pathname : '',
	)

	return (
		<React.Fragment>
			{data ? (
				<>
					<Section countColumns={10}>
						<Box>
							<PageTitle
								title={data.displayName}
								before={
									<Breadcrumbs
										customLabels={[data.displayName]}
										selectLanguage={language}
									/>
								}
							/>
						</Box>
					</Section>

					<Section countColumns={10}>
						{data.data.map((item) => (
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

						<PageNavigation
							selectLanguage={language}
							previousPage={{ title: 'Проф. навыки', pathname: '/hard-skills' }}
							nextPage={{ title: 'Контакты', pathname: '/contacts' }}
						/>
					</Section>
				</>
			) : (
				<>
					<Section countColumns={10}>
						<Box>
							<PageTitle.Skeleton before={<Breadcrumbs.Skeleton />} />
						</Box>
					</Section>

					<Section countColumns={10}>
						{[...Array(2)].map((_, index) => (
							<Tile key={index}>
								<Box YPadding>
									<Spinner
										className="ui-mx-auto ui-py-48-px"
										width={36}
										height={36}
									/>
								</Box>
							</Tile>
						))}

						<PageNavigation.Skeleton />
					</Section>
				</>
			)}
		</React.Fragment>
	)
}

export { Education }
