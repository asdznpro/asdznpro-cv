import * as React from 'react'

import { useState, useEffect } from 'react'
import { useDocumentHead, useDynamicAlignment } from 'hooks'

import { EmblaOptionsType } from 'embla-carousel'

import styles from './Portfolio.module.scss'
import { LanguageModel, PortfolioModel, ThemeModel } from 'models'

import { Portfolio } from './Portfolio'

import {
	Section,
	PageTitle,
	Breadcrumbs,
	Button,
	Spinner,
	PageNavigation,
	Box,
	Counter,
	Tile,
	Fontbody,
	Carousel,
} from 'components/ui'

interface PortfolioListProps {
	data: PortfolioModel | null
	language: LanguageModel
	theme: ThemeModel
}

const PortfolioList: React.FC<PortfolioListProps> = (props) => {
	const { data, language, theme } = props
	const { screenWidth } = useDynamicAlignment()

	useDocumentHead(
		language,
		data ? data.displayName : '',
		data ? data.pathname : '',
	)

	// tag-based filtering with auto-reset

	const [selectedTags, setSelectedTags] = useState<string[]>([])

	const toggleTag = (tagType: string) => {
		if (data && data.tags) {
			if (selectedTags.includes(tagType)) {
				setSelectedTags((prevTags) => prevTags.filter((tag) => tag !== tagType))
			} else {
				setSelectedTags((prevTags) => [...prevTags, tagType])
			}
		}
	}

	useEffect(() => {
		if (data && data.tags) {
			if (selectedTags.length === data.tags.length) {
				setSelectedTags([])
			}
		}
	}, [selectedTags, data])

	// carousel options

	const OPTIONS: EmblaOptionsType = { dragFree: true }

	return (
		<>
			{data ? (
				<>
					<Section>
						<Box>
							<PageTitle
								title={data.displayName}
								before={
									<Breadcrumbs
										customLabels={[data.displayName]}
										selectLanguage={language}
									/>
								}
							/>
						</Box>
					</Section>

					<div className="ui-max-w-full ui-overflow-x-hidden">
						<Section>
							<Box className="ui-max-w-12-cols">
								<Carousel.Embla options={OPTIONS}>
									{data.data.length > 1 ? (
										<>
											<Button
												onClick={() => setSelectedTags([])}
												buttonSize="md"
												mode={
													selectedTags.length > 0
														? theme.mode === 'light'
															? 'secondary'
															: 'outline'
														: 'primary'
												}
												appearance={
													selectedTags.length > 0 ? 'neutral' : 'accent'
												}
												after={
													<Counter appearance="neutral">
														{data.data.length}
													</Counter>
												}
												rounded={selectedTags.length > 0 ? false : true}
											>
												{language.lang === 'en' ? 'All' : 'Все работы'}
											</Button>

											{data.tags.map((tag, index) => {
												const projectsWithTag = data.data.filter((item) =>
													item.tags.some(
														(tagItem) => tagItem.type === tag.type,
													),
												)

												return (
													<Button
														key={index}
														onClick={() => toggleTag(tag.type)}
														buttonSize="md"
														mode={
															selectedTags.includes(tag.type)
																? 'primary'
																: theme.mode === 'light'
																	? 'secondary'
																	: 'outline'
														}
														appearance={
															selectedTags.includes(tag.type)
																? 'accent'
																: 'neutral'
														}
														after={
															<Counter appearance="neutral">
																{projectsWithTag.length}
															</Counter>
														}
														rounded={selectedTags.includes(tag.type)}
													>
														{tag.name}
													</Button>
												)
											})}
										</>
									) : (
										<>
											<Button
												buttonSize="md"
												after={
													<Counter appearance="neutral">
														{data.data.length}
													</Counter>
												}
												rounded
												disabled
											>
												{language.lang === 'en' ? 'All' : 'Все работы'}
											</Button>

											{[...Array(3)].map((_, index) => (
												<Button
													key={index}
													buttonSize="md"
													mode={
														theme.mode === 'light' ? 'secondary' : 'outline'
													}
													appearance="neutral"
													after={
														<Spinner
															className="ui-px-56-px"
															width={28}
															height={28}
														/>
													}
													disabled
												/>
											))}
										</>
									)}
								</Carousel.Embla>
							</Box>
						</Section>
					</div>

					{data.data.length > 1 && (
						<div className="ui-max-w-full ui-overflow-hidden">
							<Section>
								<Box style={screenWidth <= 768 ? { padding: '0' } : {}}>
									<div
										className={styles.list}
										style={{
											gridTemplateColumns: screenWidth <= 768 ? '1fr' : '',
										}}
									>
										{data.data
											.filter((item) => {
												if (selectedTags.length === 0) return true
												return item.tags.some((tag) =>
													selectedTags.includes(tag.type),
												)
											})
											.map((item) => (
												<Portfolio.Item
													key={item.id}
													to={item.project.pathname}
													award={
														item.awards && item.awards.length > 0
															? item.awards[0]
															: null
													}
													src={item.project.preview}
													name={item.project.fullName}
													tags={item.tags
														.map((tag) => tag.name)
														.filter((name) => name)
														.join(', ')}
													date={'\u00A0• от\u00A0' + item.project.date}
												/>
											))}
									</div>
								</Box>
							</Section>
						</div>
					)}

					<Section>
						{data.data.length < 1 && (
							<Tile>
								<Box YPadding>
									<Fontbody
										className="ui-text-secondary ui-text-center"
										style={{ padding: '28px 0' }}
									>
										{language.lang === 'en'
											? 'Projects in development'
											: 'Проекты в разработке'}
									</Fontbody>
								</Box>
							</Tile>
						)}

						<PageNavigation
							selectLanguage={language}
							previousPage={{ name: 'Опыт работы', pathname: '/experience' }}
							nextPage={{ name: 'Проф. навыки', pathname: '/hard-skills' }}
						/>
					</Section>
				</>
			) : (
				<>
					<Section>
						<Box>
							<PageTitle.Skeleton before={<Breadcrumbs.Skeleton />} />
						</Box>
					</Section>

					<div className="ui-max-w-full ui-overflow-hidden">
						<Section>
							<Box className="ui-max-w-12-cols">
								<Carousel.Embla options={OPTIONS}>
									<Button
										buttonSize="md"
										after={<Counter appearance="neutral">0</Counter>}
										rounded
										disabled
									>
										{language.lang === 'en' ? 'All' : 'Все работы'}
									</Button>

									{[...Array(3)].map((_, index) => (
										<Button
											key={index}
											buttonSize="md"
											mode={theme.mode === 'light' ? 'secondary' : 'outline'}
											appearance="neutral"
											after={
												<Spinner
													width={28}
													height={28}
													style={{ padding: '0 56px' }}
												/>
											}
											disabled
										/>
									))}
								</Carousel.Embla>
							</Box>
						</Section>
					</div>

					<Section>
						<Box style={screenWidth <= 768 ? { padding: '0' } : {}}>
							<div
								className={styles.list}
								style={{
									gridTemplateColumns: screenWidth <= 768 ? '1fr' : '',
								}}
							>
								{[...Array(4)].map((_, index) => (
									<Portfolio.ItemSkeleton key={index} tags={''} />
								))}
							</div>
						</Box>
					</Section>

					<Section>
						<PageNavigation.Skeleton />
					</Section>
				</>
			)}
		</>
	)
}

export { PortfolioList }
