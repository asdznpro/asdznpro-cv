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
	Box,
	Tile,
} from 'components/ui'

const Contacts = () => {
	useDocumentTitle('Контакты — Андрей Сухушин // Curriculum Vitae')

	return (
		<Layout>
			<Section>
				<Box>
					<PageTitle
						title='Контакты'
						breadcrumbs={<Breadcrumbs customLabels={['Контакты']} />}
					/>
				</Box>
			</Section>

			<SectionGroup gap='sm'>
				<Section>
					<Tile>
						<Box YPadding>
							<Fontbody level={2}>
								Сложно сказать, почему представители современных социальных
								резервов освещают чрезвычайно интересные особенности картины в
								целом, однако конкретные выводы, разумеется, превращены в
								посмешище, хотя само их существование приносит несомненную
								пользу обществу.
							</Fontbody>
						</Box>
					</Tile>
				</Section>

				<Section>
					<PageNavigation>PageNavigation</PageNavigation>
				</Section>
			</SectionGroup>
		</Layout>
	)
}

export { Contacts }
