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
	SectionGroup,
	AppLink,
	PageNavigation,
} from 'components/ui'

const Education = () => {
	useDocumentTitle('Образование — Андрей Сухушин // Curriculum Vitae')

	const dispatch = useAppDispatch()

	const theme = useAppSelector(selectTheme)

	const { data: educationData } = useGetEducationQuery()
	const storeEducationData = useAppSelector(state => state.common.education)

	useEffect(() => {
		if (educationData) {
			dispatch(setEducationData(educationData))
		}
	}, [educationData, dispatch])

	return (
		<Layout>
			<Section>
				<Breadcrumbs customLabels={['Образование']} />
				<PageTitle title='Образование' />
			</Section>

			<SectionGroup gap='sm'>
				{storeEducationData ? (
					<>
						{storeEducationData.data.map(item => (
							<Section key={item.id} field>
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
													alt={info.title}
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
							</Section>
						))}

						<Section field>
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

export { Education }
