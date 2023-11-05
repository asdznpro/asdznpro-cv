import styles from './Home.module.scss'

import { Layout } from 'components/layout'
import {
	Heading,
	Fontbody,
	Footnote,
	Section,
	AppLink,
	PageTitle,
} from 'components/ui'

const Home = () => {
	return (
		<Layout>
			<Section noField>
				<PageTitle />
			</Section>

			<Section>
				<Heading>Воистину радостный звук</Heading>
				<Heading level={2}>
					Воистину радостный звук: старческий скрип Амстердама
				</Heading>
				<Heading level={3}>
					Воистину радостный звук: старческий скрип Амстердама
				</Heading>
				<Heading level={4} noCaps>
					Воистину радостный звук: старческий скрип Амстердама
				</Heading>
			</Section>

			<Section>
				<Fontbody>Home Page Font Check</Fontbody>
				<Fontbody level={2}>
					Сложно сказать, почему представители современных социальных резервов
					освещают чрезвычайно интересные особенности картины в целом, однако
					конкретные выводы, разумеется, превращены в посмешище, хотя само их
					существование приносит несомненную пользу обществу. Идейные
					соображения высшего порядка, а{' '}
					<AppLink>также консультация с широким активом</AppLink> играет
					определяющее значение для форм воздействия. Господа, разбавленное
					изрядной долей эмпатии, рациональное мышление, а также свежий взгляд
					на привычные вещи — безусловно открывает новые горизонты для вывода
					текущих активов.
				</Fontbody>
				<Fontbody level={2} caps>
					Home Page Font Check
				</Fontbody>
				<Fontbody level={3}>Home Page Font Check</Fontbody>
			</Section>

			<Section>
				<Footnote>Home Page Font Check</Footnote>
				<Footnote level={2}>Home Page Font Check</Footnote>
				<Footnote level={3} caps>
					Home Page Font Check
				</Footnote>

				<Footnote level={3}>
					Сложно сказать, почему представители{' '}
					<AppLink to='/'>современных социальных резервов</AppLink> освещают
					чрезвычайно интересные особенности картины в целом, однако конкретные
					выводы, разумеется, превращены в посмешище, хотя само их существование
					приносит несомненную пользу обществу.{' '}
					<AppLink>Идейные соображения высшего порядка</AppLink>, а также
					консультация с широким активом играет определяющее значение для форм
					воздействия. Господа, разбавленное изрядной долей эмпатии,
					рациональное мышление, а также свежий взгляд на привычные вещи —
					безусловно открывает новые горизонты для вывода текущих активов.
				</Footnote>
			</Section>
		</Layout>
	)
}

export { Home }
