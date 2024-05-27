import * as React from 'react'

import { useEffect } from 'react'
import { useDocumentTitle, useAppDispatch, useAppSelector } from 'hooks'

import { useGetContactsQuery } from 'services'
import { selectLanguage, setContactsData } from 'store'

import styles from './Contacts.module.scss'

import {
	Section,
	PageTitle,
	Breadcrumbs,
	PageNavigation,
	Box,
	Spinner,
} from 'components/ui'
import { CvLinkItem } from 'components/shared'

const Contacts = () => {
	const dispatch = useAppDispatch()

	const language = useAppSelector(selectLanguage)

	const { data: contactsData } = useGetContactsQuery({ language })
	const storeContactsData = useAppSelector((state) => state.common.contacts)

	useEffect(() => {
		if (contactsData) {
			dispatch(setContactsData(contactsData))
		}
	}, [contactsData, dispatch])

	useDocumentTitle(
		storeContactsData ? storeContactsData.displayName : '',
		language.lang,
	)

	return (
		<React.Fragment>
			{storeContactsData ? (
				<>
					<Section>
						<Box>
							<PageTitle
								title={storeContactsData.displayName}
								before={
									<Breadcrumbs
										customLabels={[storeContactsData.displayName]}
										selectLanguage={language.lang}
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
							{storeContactsData.data.map((link, index) => (
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

						<PageNavigation />
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
