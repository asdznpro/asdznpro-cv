import { useEffect } from 'react'

import { useDocumentTitle, useAppDispatch, useAppSelector } from 'hooks'
import { useGetContactsQuery } from 'services/CommonApi'
import { selectLanguage, setContactsData } from 'store'

import styles from './Contacts.module.scss'

import { Layout } from 'components/layout'
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
	const storeContactsData = useAppSelector(state => state.common.contacts)

	useEffect(() => {
		if (contactsData) {
			dispatch(setContactsData(contactsData))
		}
	}, [contactsData, dispatch])

	useDocumentTitle(
		storeContactsData ? storeContactsData.displayName : '',
		language
	)

	return (
		<Layout>
			{storeContactsData ? (
				<>
					<Section>
						<Box>
							<PageTitle
								title={storeContactsData.displayName}
								breadcrumbs={
									<Breadcrumbs
										customLabels={[storeContactsData.displayName]}
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
								gap: 'clamp(8px, 1.2vw, 20px)',
							}}
						>
							{storeContactsData.data.map((link, index) => (
								<CvLinkItem
									key={index}
									href={link.href}
									target='blank'
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
				<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
			)}
		</Layout>
	)
}

export { Contacts }
