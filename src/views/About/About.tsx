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
	const dispatch = useAppDispatch()
	const { data: personalData } = useGetPersonalQuery()
	const storePersonalData = useAppSelector(state => state.common.personal)

	useEffect(() => {
		if (personalData) {
			dispatch(setPersonalData(personalData))
		}
	}, [personalData, dispatch])

	useDocumentTitle(storePersonalData ? storePersonalData.displayName : '')

	return (
		<Layout>
			{storePersonalData ? (
				<>
					<Section countColumns={10}>
						<Box>
							<PageTitle
								title={storePersonalData.displayName}
								breadcrumbs={
									<Breadcrumbs customLabels={[storePersonalData.displayName]} />
								}
							/>
						</Box>
					</Section>

					<Section countColumns={10}>
						<Tile>
							<Box YPadding>
								<Fontbody level={2} role='paragraph'>
									Сложно сказать, почему представители современных социальных
									резервов освещают чрезвычайно интересные особенности картины в
									целом, однако конкретные выводы, разумеется, превращены в
									посмешище, хотя само их существование приносит несомненную
									пользу обществу.
								</Fontbody>
							</Box>
						</Tile>

						<PageNavigation />
					</Section>
				</>
			) : (
				<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
			)}
		</Layout>
	)
}

export { About }
