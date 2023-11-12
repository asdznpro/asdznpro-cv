import { Route, Routes } from 'react-router-dom'

import { useDocumentTitle } from 'hooks'

import styles from './Portfolio.module.scss'

import { Layout } from 'components/layout'
import {
	Fontbody,
	Section,
	PageTitle,
	Button,
	Breadcrumbs,
} from 'components/ui'

import { Icon28ChevronRightCircle } from '@vkontakte/icons'

const Portfolio = () => {
	useDocumentTitle('Портфолио — Андрей Сухушин // Curriculum Vitae')

	return (
		<Layout>
			<Section>
				<Breadcrumbs customLabels={['Портфолио']} />
			</Section>

			<Routes>
				<Route
					path=''
					element={
						<>
							<Section>
								<PageTitle title='Портфолио' />
							</Section>

							<Section field>
								<Button to='upbalance' after={<Icon28ChevronRightCircle />}>
									<Fontbody level={3}>Go link</Fontbody>
								</Button>

								<Fontbody level={2}>
									Сложно сказать, почему представители современных социальных
									резервов освещают чрезвычайно интересные особенности картины в
									целом, однако конкретные выводы, разумеется, превращены в
									посмешище, хотя само их существование приносит несомненную
									пользу обществу.
								</Fontbody>
							</Section>
						</>
					}
				/>

				<Route
					path='upbalance'
					element={
						<>
							<Section countColumns={10}>
								<PageTitle title='UpBalance' />
							</Section>

							<Section countColumns={10} field>
								<Fontbody level={2}>
									Сложно сказать, почему представители современных социальных
									резервов освещают чрезвычайно интересные особенности картины в
									целом, однако конкретные выводы, разумеется, превращены в
									посмешище, хотя само их существование приносит несомненную
									пользу обществу.
								</Fontbody>
							</Section>
						</>
					}
				/>
			</Routes>
		</Layout>
	)
}

export { Portfolio }
