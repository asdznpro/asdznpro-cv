import { useEffect } from 'react'

import { useDocumentTitle, useAppDispatch, useAppSelector } from 'hooks'
import { useGetHardSkillsQuery } from 'services/CommonApi'
import { setHardSkillsData } from 'store/СommonSlice'

import styles from './HardSkills.module.scss'

import { Layout } from 'components/layout'
import {
	Fontbody,
	Section,
	PageTitle,
	Heading,
	SectionGroup,
	Breadcrumbs,
	Spinner,
} from 'components/ui'

const HardSkills = () => {
	useDocumentTitle('Проф. навыки — Андрей Сухушин // Curriculum Vitae')

	const dispatch = useAppDispatch()

	const { data: hardSkillsData } = useGetHardSkillsQuery()
	const storeHardSkillsData = useAppSelector(state => state.common.hardSkills)

	useEffect(() => {
		if (hardSkillsData) {
			dispatch(setHardSkillsData(hardSkillsData))
		}
	}, [hardSkillsData, dispatch])

	useEffect(() => {
		console.log(storeHardSkillsData)
	}, [storeHardSkillsData])

	return (
		<Layout>
			<Section countColumns={8}>
				<Breadcrumbs customLabels={['Проф. навыки']} />
				<PageTitle title='Проф. навыки' />
			</Section>

			<SectionGroup gap='sm'>
				{storeHardSkillsData ? (
					<>
						<Section countColumns={8} field>
							<Heading level={3}>Графический & UI/UX дизайн</Heading>

							<Fontbody level={2}>
								Идейные соображения высшего порядка, а также консультация с
								широким активом играет определяющее значение для форм
								воздействия. Господа, разбавленное изрядной долей эмпатии,
								рациональное мышление, а также свежий взгляд на привычные вещи —
								безусловно открывает новые горизонты для вывода текущих активов.
							</Fontbody>
						</Section>

						<Section countColumns={8} field>
							<Heading level={3}>Фронтенд</Heading>

							<Fontbody level={2}>
								Господа, разбавленное изрядной долей эмпатии, рациональное
								мышление, а также свежий взгляд на привычные вещи — безусловно
								открывает новые горизонты для вывода текущих активов.
							</Fontbody>
						</Section>

						<Section countColumns={8} field>
							<Heading level={3}>Бэкенд</Heading>

							<Fontbody level={2}>
								Идейные соображения высшего порядка, а также консультация с
								широким активом играет определяющее значение для форм
								воздействия. Господа, разбавленное изрядной долей эмпатии,
								рациональное мышление.
							</Fontbody>
						</Section>
					</>
				) : (
					<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
				)}
			</SectionGroup>
		</Layout>
	)
}

export { HardSkills }
