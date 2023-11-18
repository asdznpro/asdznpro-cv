import { useEffect } from 'react'

import { useDocumentTitle, useAppDispatch, useAppSelector } from 'hooks'
import { useGetEducationQuery } from 'services/CommonApi'
import { setEducationData } from 'store/СommonSlice'

import styles from './Education.module.scss'

import { Layout } from 'components/layout'
import { Fontbody, Section, PageTitle, Breadcrumbs } from 'components/ui'

const Education = () => {
	useDocumentTitle('Образование — Андрей Сухушин // Curriculum Vitae')

	const dispatch = useAppDispatch()
	const { data: educationData } = useGetEducationQuery()
	const storeEducationData = useAppSelector(state => state.common.education)

	useEffect(() => {
		if (educationData) {
			dispatch(setEducationData(educationData))

			console.log(storeEducationData)
		}
	}, [educationData, dispatch])

	useEffect(() => {
		console.log(storeEducationData)
	}, [storeEducationData])

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
