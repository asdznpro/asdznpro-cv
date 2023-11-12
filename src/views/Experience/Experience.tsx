import { Route, Routes } from 'react-router-dom'

import { useDocumentTitle } from 'hooks'

import styles from './Experience.module.scss'

import { Layout } from 'components/layout'
import {
	Fontbody,
	Section,
	PageTitle,
	Button,
	Breadcrumbs,
	SectionGroup,
} from 'components/ui'

import { Icon28ChevronRightCircle } from '@vkontakte/icons'

const Experience = () => {
	useDocumentTitle('Опыт работы — Андрей Сухушин // Curriculum Vitae')

	return (
		<Layout>
			<Section countColumns={10}>
				<Breadcrumbs customLabels={['Опыт работы', 'Warface', 'Feedback']} />
			</Section>

			<Routes>
				<Route
					path=''
					element={
						<>
							<Section countColumns={10}>
								<PageTitle
									title='Опыт работы'
									describe='Идейные соображения высшего порядка, а также консультация с
									широким активом играет определяющее значение для форм
									воздействия.'
								/>
							</Section>

							<Section countColumns={10} field>
								<Button to='warface' after={<Icon28ChevronRightCircle />}>
									<Fontbody level={3}>Go link</Fontbody>
								</Button>

								<Fontbody level={2}>
									Идейные соображения высшего порядка, а также консультация с
									широким активом играет определяющее значение для форм
									воздействия. Господа, разбавленное изрядной долей эмпатии,
									рациональное мышление, а также свежий взгляд на привычные вещи
									— безусловно открывает новые горизонты для вывода текущих
									активов.
								</Fontbody>
							</Section>
						</>
					}
				/>

				<Route
					path='warface'
					element={
						<>
							<Section countColumns={10}>
								<PageTitle title='Warface' />
							</Section>

							<Section countColumns={10} field>
								<Button to='feedback' after={<Icon28ChevronRightCircle />}>
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
					path='warface/feedback'
					element={
						<>
							<Section countColumns={10}>
								<PageTitle title='feedback' />
							</Section>

							<SectionGroup gap='sm'>
								<Section countColumns={10} field>
									<Fontbody level={2}>
										Сложно сказать, почему представители современных социальных
										резервов освещают чрезвычайно интересные особенности картины
										в целом.
									</Fontbody>
								</Section>

								<Section countColumns={10} field>
									<Fontbody level={2}>
										Однако конкретные выводы, разумеется, превращены в
										посмешище, хотя само их существование приносит несомненную
										пользу обществу.
									</Fontbody>
								</Section>
							</SectionGroup>
						</>
					}
				/>
			</Routes>
		</Layout>
	)
}

export { Experience }
