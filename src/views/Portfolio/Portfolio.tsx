import styles from './Portfolio.module.scss'

import { Layout } from 'components/layout'
import { Fontbody, Section, PageTitle } from 'components/ui'

const Portfolio = () => {
	return (
		<Layout>
			<Section noField>
				<PageTitle />
			</Section>

			<Section>
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

export { Portfolio }
