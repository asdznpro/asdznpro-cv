import { useDocumentTitle } from 'hooks'

import styles from './HardSkills.module.scss'

import { Layout } from 'components/layout'
import {
	Fontbody,
	Section,
	PageTitle,
	Heading,
	SectionGroup,
} from 'components/ui'

const HardSkills = () => {
	useDocumentTitle('Проф. навыки — Андрей Сухушин // Curriculum Vitae')

	return (
		<Layout>
			<Section countColumns={8}>
				<PageTitle>Проф. навыки</PageTitle>
			</Section>

			<SectionGroup gap='sm'>
				<Section countColumns={8} field>
					<Heading level={3}>Графический & UI/UX дизайн</Heading>

					<Fontbody level={2}>
						Идейные соображения высшего порядка, а также консультация с широким
						активом играет определяющее значение для форм воздействия. Господа,
						разбавленное изрядной долей эмпатии, рациональное мышление, а также
						свежий взгляд на привычные вещи — безусловно открывает новые
						горизонты для вывода текущих активов.
					</Fontbody>
				</Section>

				<Section countColumns={8} field>
					<Heading level={3}>Фронтенд</Heading>

					<Fontbody level={2}>
						Господа,
						разбавленное изрядной долей эмпатии, рациональное мышление, а также
						свежий взгляд на привычные вещи — безусловно открывает новые
						горизонты для вывода текущих активов.
					</Fontbody>
				</Section>

				<Section countColumns={8} field>
					<Heading level={3}>Бэкенд</Heading>

					<Fontbody level={2}>
						Идейные соображения высшего порядка, а также консультация с широким
						активом играет определяющее значение для форм воздействия. Господа,
						разбавленное изрядной долей эмпатии, рациональное мышление.
					</Fontbody>
				</Section>
			</SectionGroup>
		</Layout>
	)
}

export { HardSkills }
