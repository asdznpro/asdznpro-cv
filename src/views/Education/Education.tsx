import { useEffect } from 'react'

import { useDocumentTitle, useAppDispatch, useAppSelector } from 'hooks'
import { useGetEducationQuery } from 'services/CommonApi'
import { setEducationData } from 'store/СommonSlice'
import { selectTheme } from 'store/ThemeSlice'

import styles from './Education.module.scss'

import { Layout } from 'components/layout'
import {
	Fontbody,
	Section,
	PageTitle,
	Breadcrumbs,
	Spinner,
	AppLink,
	PageNavigation,
	Box,
	Tile,
} from 'components/ui'

const Education = () => {
	const dispatch = useAppDispatch()

	const theme = useAppSelector(selectTheme)

	const { data: educationData } = useGetEducationQuery()
	const storeEducationData = useAppSelector(state => state.common.education)

	useEffect(() => {
		if (educationData) {
			dispatch(setEducationData(educationData))
		}
	}, [educationData, dispatch])

	useDocumentTitle(storeEducationData ? storeEducationData.displayName : '')

	return (
		<Layout>
			{storeEducationData ? (
				<>
					<Section>
						<Box>
							<PageTitle
								title={storeEducationData.displayName}
								breadcrumbs={
									<Breadcrumbs
										customLabels={[storeEducationData.displayName]}
									/>
								}
							/>
						</Box>
					</Section>

					<Section>
						{storeEducationData.data.map(item => (
							<Tile key={item.id}>
								<Box YPadding>
									{item.info.map((info, index) => (
										<Fontbody key={item.id + '-' + index}>
											<span style={{ color: '#9A9AAC' }}>{info.title}</span>
											&nbsp;&nbsp;
											{info.icon && (
												<>
													<img
														src={
															theme === 'dark' && info.icon
																? info.iconLight
																: info.icon
														}
														alt={info.value}
														style={{ width: 32 }}
													/>
													&nbsp;&nbsp;
												</>
											)}
											{info.value}
											&nbsp;&nbsp;
											{info.href && (
												<AppLink href={info.href} target='blank'>
													#
												</AppLink>
											)}
										</Fontbody>
									))}
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

export { Education }
