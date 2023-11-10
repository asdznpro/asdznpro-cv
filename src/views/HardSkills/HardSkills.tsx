import { useDocumentTitle } from 'hooks'

import styles from './HardSkills.module.scss'

import { Layout } from 'components/layout'
import { Fontbody, Section, PageTitle } from 'components/ui'

const HardSkills = () => {
	useDocumentTitle('Проф. навыки — Андрей Сухушин // Curriculum Vitae')

	return (
		<Layout>
			<Section countColumns={8}>
				<PageTitle>Проф. навыки</PageTitle>
			</Section>

			<Section countColumns={8} field>
				<Fontbody level={2}>
					Сложно сказать, почему представители современных социальных резервов
					освещают чрезвычайно интересные особенности картины в целом, однако
					конкретные выводы, разумеется, превращены в посмешище, хотя само их
					существование приносит несомненную пользу обществу.
				</Fontbody>

				<Fontbody level={2}>
					Идейные соображения высшего порядка, а также консультация с широким
					активом играет определяющее значение для форм воздействия. Господа,
					разбавленное изрядной долей эмпатии, рациональное мышление, а также
					свежий взгляд на привычные вещи — безусловно открывает новые горизонты
					для вывода текущих активов.
				</Fontbody>
			</Section>
		</Layout>
	)
}

export { HardSkills }
