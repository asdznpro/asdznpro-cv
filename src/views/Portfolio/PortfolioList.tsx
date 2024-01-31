import React, { useState, useEffect } from 'react'

import { useDocumentTitle, useDynamicAlignment } from 'hooks'

import styles from './Portfolio.module.scss'
import PortfolioModel from 'models/Portfolio.interface'

import {
	Section,
	PageTitle,
	Breadcrumbs,
	Button,
	Spinner,
	PageNavigation,
	Box,
	Counter,
} from 'components/ui'
import { PortfolioItem } from 'components/shared'

interface PortfolioListProps {
	storePortfolioData: PortfolioModel | null
	theme: 'dark' | 'light' | undefined
}

const PortfolioList: React.FC<PortfolioListProps> = props => {
	const { storePortfolioData, theme } = props
	const { screenWidth } = useDynamicAlignment()

	useDocumentTitle(storePortfolioData ? storePortfolioData.displayName : '')

	// tag-based filtering with auto-reset

	const [selectedTags, setSelectedTags] = useState<string[]>([])

	const toggleTag = (tagType: string) => {
		if (storePortfolioData && storePortfolioData.tags) {
			if (selectedTags.includes(tagType)) {
				setSelectedTags(prevTags => prevTags.filter(tag => tag !== tagType))
			} else {
				setSelectedTags(prevTags => [...prevTags, tagType])
			}
		}
	}

	useEffect(() => {
		if (storePortfolioData && storePortfolioData.tags) {
			if (selectedTags.length === storePortfolioData.tags.length) {
				setSelectedTags([])
			}
		}
	}, [selectedTags, storePortfolioData])

	return (
		<>
			{storePortfolioData ? (
				<>
					<Section>
						<Box>
							<PageTitle
								title={storePortfolioData.displayName}
								breadcrumbs={
									<Breadcrumbs
										customLabels={[storePortfolioData.displayName]}
									/>
								}
							/>
						</Box>
					</Section>

					<Section>
						<Box>
							<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
								<Button
									onClick={() => setSelectedTags([])}
									mode={
										selectedTags.length > 0
											? theme === 'light'
												? 'secondary'
												: 'outline'
											: 'primary'
									}
									appearance={selectedTags.length > 0 ? 'neutral' : 'accent'}
									after={
										<Counter appearance='neutral'>
											{storePortfolioData.data.length}
										</Counter>
									}
									rounded={selectedTags.length > 0 ? false : true}
								>
									Все работы
								</Button>

								{storePortfolioData.tags.map((tag, index) => {
									const projectsWithTag = storePortfolioData.data.filter(item =>
										item.tags.some(tagItem => tagItem.type === tag.type)
									)

									return (
										<Button
											key={index}
											onClick={() => toggleTag(tag.type)}
											mode={
												selectedTags.includes(tag.type)
													? 'primary'
													: theme === 'light'
													? 'secondary'
													: 'outline'
											}
											appearance={
												selectedTags.includes(tag.type) ? 'accent' : 'neutral'
											}
											after={
												<Counter appearance='neutral'>
													{projectsWithTag.length}
												</Counter>
											}
											rounded={selectedTags.includes(tag.type)}
										>
											{tag.name}
										</Button>
									)
								})}
							</div>
						</Box>
					</Section>

					<Section>
						<Box style={screenWidth <= 768 ? { padding: '0' } : {}}>
							<div
								className={styles.list}
								style={{ gridTemplateColumns: screenWidth <= 768 ? '1fr' : '' }}
							>
								{storePortfolioData.data
									.filter(item => {
										if (selectedTags.length === 0) return true
										return item.tags.some(tag =>
											selectedTags.includes(tag.type)
										)
									})
									.map(item => (
										<PortfolioItem
											key={item.id}
											to={item.project.pathname}
											award={
												item.awards && item.awards.length > 0
													? item.awards[0]
													: null
											}
											preview={item.project.preview}
											name={item.project.fullName}
											tags={item.tags
												.map(tag => tag.name)
												.filter(name => name)
												.join(', ')}
											date={'\u00A0• от\u00A0' + item.project.date}
										/>
									))}
							</div>
						</Box>
					</Section>

					<Section>
						<PageNavigation />
					</Section>
				</>
			) : (
				<Spinner width={48} height={48} style={{ margin: '0 auto' }} />
			)}
		</>
	)
}

export { PortfolioList }
