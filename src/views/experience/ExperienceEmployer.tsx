import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { useDocumentHead } from 'hooks'

import { BREAKPOINTS_TAILWIND, useBreakpoints } from '@siberiacancode/reactuse'

import { EmblaOptionsType } from 'embla-carousel'
import scrollIntoView from 'smooth-scroll-into-view-if-needed'

import { ExperienceType, FeedbackType, LanguageType, ThemeType } from 'types'

import styles from './Experience.module.scss'

import { Experience } from './Experience'
import { FeedbackItem } from 'components/shared'
import {
	Fontbody,
	Section,
	Button,
	Heading,
	PageNavigation,
	Box,
	Tile,
	Carousel,
	BriefInfo,
	AppLink,
} from 'components/ui'

import {
	Icon28LockOutline,
	Icon24LinkCircleFilled,
	Icon28PictureOutline,
	Icon28CalendarCheckOutline,
	Icon28ArrowLeftOutline,
	Icon28ArrowUpOutline,
} from '@vkontakte/icons'
import { getFormattedDate } from 'utils/get-formatted-date.util'

interface ExperienceEmployerProps {
	employerData: ExperienceType['data'][number]
	feedbackData: FeedbackType['data'][number]['feedback']
	language: LanguageType
	theme: ThemeType
}

const ExperienceEmployer: React.FC<ExperienceEmployerProps> = (props) => {
	const { employerData, feedbackData, language, theme } = props
	const [hasError, setHasError] = useState(false)

	useDocumentHead(
		language,
		employerData.employerInfo.name,
		'experience/' + employerData.pathname,
	)

	const { smallerOrEqual } = useBreakpoints(BREAKPOINTS_TAILWIND)

	// go back

	const navigate = useNavigate()
	const location = useLocation()

	const handleClick = () => {
		const currentPath = window.location.pathname
		const newPath = currentPath.split('/').slice(0, -1).join('/')
		navigate(newPath)
	}

	useEffect(() => {
		const hash = location.hash.replace('#', '')
		if (hash) {
			setTimeout(() => {
				const element = document.getElementById(hash)
				if (element) {
					scrollIntoView(element, {
						behavior: 'smooth',
						block: 'nearest',
					})
				}
			}, 200)
		}
	}, [location])

	const handleButtonClick = (id: string) => {
		navigate(`#${id}`)
		setTimeout(() => {
			const element = document.getElementById(id)
			if (element) {
				scrollIntoView(element, {
					behavior: 'smooth',
					block: 'nearest',
				})
			}
		}, 200)
	}

	//

	const NAVIGATION_DATA = [
		{
			id: 'what-i-doing',
			ru: 'Чем я занимался?',
			en: 'What was I doing?',
		},
		{
			id: 'work-examples',
			ru: 'Примеры работ',
			en: 'Work Examples',
		},
		{
			id: 'reviews',
			ru: 'Отзывы о работе',
			en: 'Reviews',
		},
	]

	const sectionRefs = useRef<(HTMLElement | null)[]>([])
	const [buttonModes, setButtonModes] = useState<boolean[]>(
		new Array(NAVIGATION_DATA.length).fill(false),
	)

	useEffect(() => {
		const observers: IntersectionObserver[] = []

		sectionRefs.current.forEach((element, index) => {
			if (element) {
				const observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							setButtonModes((prevModes) => {
								const newModes = [...prevModes]
								newModes[index] = entry.isIntersecting
								return newModes
							})
						})
					},
					{ threshold: 0.1 },
				)

				observer.observe(element)
				observers.push(observer)
			}
		})

		return () => {
			observers.forEach((observer) => observer.disconnect())
		}
	}, [])

	// carousel options

	const OPTIONS: EmblaOptionsType = { dragFree: true }

	return (
		<>
			<Section countColumns={10}>
				{employerData.employerInfo.preview && (
					<Tile>
						<div className={styles.preview}>
							{!hasError ? (
								<img
									src={employerData.employerInfo.preview}
									alt={employerData.employerInfo.name}
									onError={() => setHasError(true)}
								/>
							) : (
								<Icon28PictureOutline width={40} height={40} />
							)}
						</div>
					</Tile>
				)}

				<Experience.Item
					key={employerData.id}
					title={employerData.employerInfo.name}
					logoPath={
						theme.mode === 'dark' && employerData.employerInfo.logoLight
							? employerData.employerInfo.logoLight
							: employerData.employerInfo.logo
					}
				>
					<Fontbody level={3} className="ui-text-secondary">
						{employerData.employerInfo.shortDescription}
					</Fontbody>

					<div className="ui-flex ui-gap-6-px ui-flex-wrap">
						{employerData.employerInfo.website && (
							<Button
								href={employerData.employerInfo.website}
								target="_blank"
								before={<Icon24LinkCircleFilled width={24} height={24} />}
							>
								{employerData.employerInfo.website.split('https://')}
							</Button>
						)}

						{employerData.labels.map((label, index) => (
							<Button
								key={employerData.id + '-' + index}
								appearance={
									label.id && label.id.includes('project-closed')
										? 'negative'
										: 'neutral'
								}
								before={
									label.id && label.id.includes('project-closed') ? (
										<Icon28LockOutline width={24} height={24} />
									) : label.id && label.id.includes('date') ? (
										<Icon28CalendarCheckOutline width={24} height={24} />
									) : (
										label.icon && (
											<img
												src={
													theme.mode === 'dark' && label.iconLight
														? label.iconLight
														: label.icon
												}
												alt={label.value}
											/>
										)
									)
								}
								rounded={label.id && label.id.includes('date') ? true : false}
								noneAction
							>
								{label.value}
							</Button>
						))}
					</div>
				</Experience.Item>
			</Section>

			<Section
				id={NAVIGATION_DATA[0].id}
				ref={(el) => (sectionRefs.current[0] = el)}
				countColumns={10}
			>
				<Box>
					<Heading level={2} className="ui-text-uppercase ui-mb-12-px">
						Чем я занимался?
					</Heading>
				</Box>

				{employerData.info && (
					<Tile>
						<Box YPadding>
							<BriefInfo.Box>
								{employerData.info.map((itemInfo, index) => (
									<BriefInfo.Item
										key={index}
										title={itemInfo.title}
										icon={
											theme.mode === 'dark' && itemInfo.iconLight
												? itemInfo.iconLight
												: itemInfo.icon
										}
										value={itemInfo.value}
										href={itemInfo.href}
										level={2}
									/>
								))}
							</BriefInfo.Box>
						</Box>
					</Tile>
				)}

				<Tile>
					<Box YPadding>
						<Fontbody level={2}>В разработке</Fontbody>
					</Box>
				</Tile>
			</Section>

			<Section
				id={NAVIGATION_DATA[1].id}
				ref={(el) => (sectionRefs.current[1] = el)}
				countColumns={10}
			>
				<Box>
					<Heading level={2} className="ui-text-uppercase ui-mb-12-px">
						Примеры работ
					</Heading>
				</Box>

				<Tile>
					<Box YPadding>
						<Fontbody level={2}>В разработке</Fontbody>
					</Box>
				</Tile>
			</Section>

			{feedbackData && feedbackData.length > 0 && (
				<div className="ui-max-w-full ui-overflow-hidden">
					<Section
						id={NAVIGATION_DATA[2].id}
						ref={(el) => (sectionRefs.current[2] = el)}
						countColumns={10}
					>
						<Box>
							<Heading level={2} className="ui-text-uppercase ui-mb-12-px">
								Отзывы о работе
							</Heading>
						</Box>

						<Carousel.Embla>
							{feedbackData.map((item) => (
								<FeedbackItem
									key={item.id + item.id}
									avatar={item.author.avatar}
									fullName={item.author.fullName}
									jobTitle={
										item.author.jobTitle +
										'\u00A0• от\u00A0' +
										getFormattedDate(item.date, false).short
									}
									value={item.value}
									style={{
										flex:
											feedbackData.length === 1 || smallerOrEqual('md')
												? '0 0 100%'
												: '0 0 calc(50% - 3px)',
									}}
								>
									{item.socialNetworks && (
										<div className="ui-flex ui-gap-6-px ui-flex-wrap">
											{item.socialNetworks &&
												item.socialNetworks.map((network, index) => (
													<Button
														key={item.id + '-' + index}
														href={network.href}
														target="_blank"
														appearance="neutral"
														before={
															<img
																src={network.icon}
																alt={
																	'@' +
																	network.href
																		.replace(/^\//, '')
																		.split('/')
																		.pop()
																}
															/>
														}
													>
														{'@' +
															network.href.replace(/^\//, '').split('/').pop()}
													</Button>
												))}
										</div>
									)}
								</FeedbackItem>
							))}
						</Carousel.Embla>
					</Section>
				</div>
			)}

			<Section
				countColumns={10}
				className="ui-sticky"
				style={{ bottom: 6 }}
				data-theme="light"
			>
				<Tile
					className="ui-mx-auto"
					style={{ maxWidth: '100%', borderRadius: 60 }}
				>
					<Carousel.Embla options={OPTIONS} className="ui-p-6-px">
						<Button
							onClick={handleClick}
							buttonSize="md"
							appearance="neutral"
							before={<Icon28ArrowLeftOutline />}
							rounded
						/>

						{NAVIGATION_DATA.map((item, index) => {
							if (item.id === 'reviews') {
								if (feedbackData && feedbackData.length > 0) {
									return (
										<Button
											key={item.id}
											onClick={() => handleButtonClick(item.id)}
											buttonSize="md"
											mode={buttonModes[index] ? 'primary' : 'ghost'}
											appearance={buttonModes[index] ? 'accent' : 'neutral'}
											rounded
										>
											{item[language.lang]}
										</Button>
									)
								}

								return null
							}

							return (
								<Button
									key={item.id}
									onClick={() => handleButtonClick(item.id)}
									buttonSize="md"
									mode={buttonModes[index] ? 'primary' : 'ghost'}
									appearance={buttonModes[index] ? 'accent' : 'neutral'}
									rounded
								>
									{item[language.lang]}
								</Button>
							)
						})}

						<Button
							buttonSize="md"
							appearance="neutral"
							before={<Icon28ArrowUpOutline />}
							rounded
						/>
					</Carousel.Embla>
				</Tile>
			</Section>
		</>
	)
}

export { ExperienceEmployer }
