import { useDocumentTitle } from 'hooks'

import styles from './Contacts.module.scss'

import { Layout } from 'components/layout'
import {
	Fontbody,
	Section,
	PageTitle,
	Breadcrumbs,
	PageNavigation,
	SectionGroup,
} from 'components/ui'

const Contacts = () => {
	useDocumentTitle('Контакты — Андрей Сухушин // Curriculum Vitae')

	return (
		<Layout>
			<Section>
				<Breadcrumbs customLabels={['Контакты']} />
				<PageTitle title='Контакты' />
			</Section>

			<SectionGroup gap='sm'>
				<Section field>
					<Fontbody level={2}>
						Сложно сказать, почему представители современных социальных резервов
						освещают чрезвычайно интересные особенности картины в целом, однако
						конкретные выводы, разумеется, превращены в посмешище, хотя само их
						существование приносит несомненную пользу обществу.
					</Fontbody>
				</Section>

				<Section field>
					<PageNavigation>PageNavigation</PageNavigation>
				</Section>
			</SectionGroup>
		</Layout>
	)
}

export { Contacts }
