import * as React from 'react'

import { useState, useEffect } from 'react'
import { useDocumentHead } from 'hooks'

import Masonry from 'react-masonry-css'

import { LanguageModel, PortfolioModel, ThemeModel } from 'models'

import styles from './Portfolio.module.scss'

import {
	Fontbody,
	Section,
	Breadcrumbs,
	Heading,
	PageNavigation,
	Box,
	Tile,
	Button,
} from 'components/ui'

import {
	Icon28StarsOutline,
	Icon28CalendarCheckOutline,
	Icon28PictureOutline,
} from '@vkontakte/icons'

interface PortfolioProjectProps {
	item: PortfolioModel['data'][number]
	language: LanguageModel
	theme: ThemeModel
}

const PortfolioProject: React.FC<PortfolioProjectProps> = (props) => {
	const { item, language, theme } = props

	useDocumentHead(
		language,
		item.project.shortName,
		'portfolio/' + item.project.pathname,
	)

	// useEffect(() => {
	// 	window.scrollTo(0, 0)
	// }, [])

	//

	const [hasError, setHasError] = useState(false)
	const [activeImage, setActiveImage] = useState<string | null>(null)

	const handleImageClick = (image: string) => {
		setActiveImage(image === activeImage ? null : image)
	}

	const images = [
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/1st-april.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/1st-september.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/23-february.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/activity2.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/activity-graduate.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/1st-may-2.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/lineup-vk-play-cup_2_2022.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/atomic-heart.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/chat_vk-play_2.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/get-purchase.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/1st-may-3.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/giveaway_rtx-3060.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/legendary-loot.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/activity-nostalgia.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/lineup-pro-summer-2022.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/promo-impossible-cashback.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/mega-sale.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/summer-contest.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/safe2_vk-play.png',
		'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/portfolio/all/teamfinder.png',
	]

	const breakpointColumnsObj = {
		default: 3,
		768: 2,
	}

	return (
		<>
			<Section countColumns={10}>
				<Box>
					<Breadcrumbs
						customLabels={['Портфолио', item.project.shortName]}
						selectLanguage={language}
					/>
				</Box>
			</Section>

			<Section countColumns={10}>
				<Tile>
					<Box YPadding>
						<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
							{item.tags.map((tag, index) => (
								<Button
									key={index}
									appearance={
										tag.name && tag.name.includes('Новое')
											? 'negative'
											: 'neutral'
									}
									before={
										tag.name &&
										tag.name.includes('Новое') && (
											<Icon28StarsOutline width={24} height={24} />
										)
									}
									rounded={tag.type && tag.type.includes('new') ? true : false}
									noneAction
								>
									{tag.name}
								</Button>
							))}

							<Button
								appearance="neutral"
								noneAction
								before={<Icon28CalendarCheckOutline width={24} height={24} />}
								rounded
							>
								{'от ' + item.project.date}
							</Button>

							{item.client &&
								item.client.map((client, index) => (
									<Button
										key={index}
										appearance="neutral"
										before={
											client.id && client.id.includes('date') ? (
												<Icon28CalendarCheckOutline width={24} height={24} />
											) : (
												client.icon && (
													<img
														src={
															theme.mode === 'dark' && client.iconLight
																? client.iconLight
																: client.icon
														}
														alt={client.value}
													/>
												)
											)
										}
										noneAction
									>
										{client.value}
									</Button>
								))}
						</div>

						<Heading level={3} className="ui-text-uppercase ui-clamp-3">
							{item.project.fullName}
						</Heading>
					</Box>
				</Tile>

				{item.project.preview && (
					<Tile>
						<div className={styles.preview}>
							{!hasError ? (
								<img
									src={item.project.preview}
									alt={item.project.fullName}
									onError={() => setHasError(true)}
								/>
							) : (
								<Icon28PictureOutline width={40} height={40} />
							)}
						</div>
					</Tile>
				)}

				<Tile>
					<Box YPadding>
						<Heading level={3} className="ui-text-uppercase">
							Paragraph
						</Heading>

						<Fontbody level={2} role="paragraph">
							Сложно сказать, почему представители современных социальных
							резервов освещают чрезвычайно интересные особенности картины в
							целом, однако конкретные выводы, разумеется, превращены в
							посмешище, хотя само их существование приносит несомненную пользу
							обществу.
						</Fontbody>
					</Box>
				</Tile>

				<Masonry
					breakpointCols={breakpointColumnsObj}
					className={styles.gridMasonry}
					columnClassName={styles.gridMasonryColumn}
				>
					{images.map((image, index) => (
						<div
							key={index}
							onClick={() => handleImageClick(image)}
							className={styles.gridMasonryItem}
						>
							<div className={styles.image}>
								<div
									className={[
										styles.imageVisible,
										activeImage === image ? styles.imageExpanded : '',
									].join(' ')}
								>
									<img
										src={image}
										alt={image.split('/').pop()?.split('.').shift()}
									/>
								</div>

								<div className={styles.imageGhost}>
									<img
										src={image}
										alt={image.split('/').pop()?.split('.').shift()}
									/>
								</div>
							</div>
						</div>
					))}
				</Masonry>

				{/* <PageNavigation /> */}
			</Section>
		</>
	)
}

export { PortfolioProject }
