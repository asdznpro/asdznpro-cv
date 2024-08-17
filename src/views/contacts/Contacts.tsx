import * as React from 'react'
import { useEffect } from 'react'

import { useGetContactsQuery } from 'services'
import { selectLanguage, setContactsData } from 'store'

import { useDocumentHead, useAppDispatch, useAppSelector } from 'hooks'

import styles from './Contacts.module.scss'

import {
	Section,
	PageTitle,
	Breadcrumbs,
	PageNavigation,
	Box,
} from 'components/ui'
import { CvLinkItem } from 'components/shared'

const Contacts = () => {
	const dispatch = useAppDispatch()

	const language = useAppSelector(selectLanguage)

	const { data: contactsData } = useGetContactsQuery({ language })
	const data = useAppSelector((state) => state.common.contacts) // storeContactsData

	useEffect(() => {
		if (contactsData) {
			dispatch(setContactsData(contactsData))
		}
	}, [contactsData, dispatch])

	useDocumentHead(
		language,
		data ? data.displayName : '',
		data ? data.pathname : '',
	)

	return (
		<React.Fragment>
			{data ? (
				<>
					<Section>
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

					<Section>
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: '1fr 1fr',
								gap: 'clamp(8px, 1vmax, 20px)',
							}}
						>
							{data.data.map((link, index) => (
								<CvLinkItem
									key={index}
									href={link.href}
									target="_blank"
									backgroundColor={link.name.toLowerCase().replace(/\s+/g, '-')}
								>
									<img
										src={link.image}
										alt={link.name}
										width={72}
										height={72}
									/>
								</CvLinkItem>
							))}
						</div>

						<PageNavigation
							selectLanguage={language}
							previousPage={{ name: 'Образование', pathname: '/education' }}
							nextPage={{ name: 'Резюме', pathname: '/' }}
						/>
					</Section>
				</>
			) : (
				<>
					<Section>
						<Box>
							<PageTitle.Skeleton before={<Breadcrumbs.Skeleton />} />
						</Box>
					</Section>

					<Section>
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: '1fr 1fr',
								gap: 'clamp(8px, 1vmax, 20px)',
							}}
						>
							{[...Array(6)].map((_, index) => (
								<CvLinkItem.Skeleton key={index} />
							))}
						</div>

						<PageNavigation.Skeleton />
					</Section>
				</>
			)}
		</React.Fragment>
	)
}

export { Contacts }
