import { useDocumentTitle } from 'hooks'

import styles from './Education.module.scss'

import { Layout } from 'components/layout'
import { Fontbody, Section, PageTitle, Breadcrumbs } from 'components/ui'

const Education = () => {
	useDocumentTitle('Образование — Андрей Сухушин // Curriculum Vitae')

	return (
		<Layout>
			<Section>
				<Breadcrumbs customLabels={['Образование']} />
				<PageTitle title='Образование' />
			</Section>

			<Section field>
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

export { Education }
