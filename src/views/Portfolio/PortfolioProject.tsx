import { useEffect } from 'react'
import { useDocumentTitle } from 'hooks'

import PortfolioModel from 'models/Portfolio.interface'

import styles from './Portfolio.module.scss'

import {
	Fontbody,
	Section,
	Breadcrumbs,
	Heading,
	PageNavigation,
	Box,
	Tile,
} from 'components/ui'

interface PortfolioProjectProps {
	item: PortfolioModel['data'][number]
	theme: 'dark' | 'light' | undefined
}

const PortfolioProject: React.FC<PortfolioProjectProps> = props => {
	const { item, theme } = props

	useDocumentTitle(item.projectShortName)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Section countColumns={10}>
				<Box>
					<Breadcrumbs customLabels={['Портфолио', item.projectShortName]} />
				</Box>
			</Section>

			<Section countColumns={10}>
				<Tile>
					<Box YPadding>
						<Heading level={3}>{item.projectName}</Heading>

						<Fontbody level={2} role='paragraph'>
							Сложно сказать, почему представители современных социальных
							резервов освещают чрезвычайно интересные особенности картины в
							целом, однако конкретные выводы, разумеется, превращены в
							посмешище, хотя само их существование приносит несомненную пользу
							обществу.
						</Fontbody>
					</Box>
				</Tile>
			</Section>

			<Section countColumns={10}>
				<PageNavigation />
			</Section>
		</>
	)
}

export { PortfolioProject }
