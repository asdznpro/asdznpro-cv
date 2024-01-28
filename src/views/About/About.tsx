import { useEffect } from 'react'

import { useDocumentTitle, useAppDispatch, useAppSelector } from 'hooks'
import { useGetPersonalQuery } from 'services/CommonApi'
import { setPersonalData } from 'store/СommonSlice'

import styles from './About.module.scss'

import { Layout } from 'components/layout'
import {
	Fontbody,
	Section,
	PageTitle,
	Breadcrumbs,
	Spinner,
	PageNavigation,
	Box,
	Tile,
} from 'components/ui'

const About = () => {
	useDocumentTitle('Обо мне — Андрей Сухушин // Curriculum Vitae')

	const dispatch = useAppDispatch()
	const { data: personalData } = useGetPersonalQuery()
	const storePersonalData = useAppSelector(state => state.common.personal)

	useEffect(() => {
		if (personalData) {
			dispatch(setPersonalData(personalData))
		}
	}, [personalData, dispatch])

	return (
		<Layout>
			<Section countColumns={10}>
				<Box>
					<PageTitle
						title='Обо мне'
						breadcrumbs={<Breadcrumbs customLabels={['Обо мне']} />}
					/>
				</Box>
			</Section>

			{storePersonalData ? (
				<Section countColumns={10}>
					<Tile>
						<Box YPadding>
							<Fontbody level={2}>
								Сложно сказать, почему представители современных социальных
								резервов освещают чрезвычайно интересные особенности картины в
								целом, однако конкретные выводы, разумеется, превращены в
								посмешище, хотя само их существование приносит несомненную
								пользу обществу.
							</Fontbody>

							<Fontbody level={2}>
								Идейные соображения высшего порядка, а также консультация с
								широким активом играет определяющее значение для форм
								воздействия. Господа, разбавленное изрядной долей эмпатии,
								рациональное мышление, а также свежий взгляд на привычные вещи —
								безусловно открывает новые горизонты для вывода текущих активов.
							</Fontbody>
						</Box>
					</Tile>

					<PageNavigation />
				</Section>
			) : (
				<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
			)}
		</Layout>
	)
}

export { About }
