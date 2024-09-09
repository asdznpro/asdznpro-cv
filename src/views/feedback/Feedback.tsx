import React, { useEffect } from 'react'

import { useGetExperienceQuery, useGetFeedbackQuery } from 'services'
import {
	setExperienceData,
	setFeedbackData,
	selectLanguage,
	selectTheme,
} from 'store'

import { useAppDispatch, useAppSelector, useDocumentHead } from 'hooks'
import { getFormattedDate } from 'utils'

import Draggable from 'react-draggable'

import styles from './Feedback.module.scss'

import { FeedbackItem } from './feedback-item'
import { Box, Breadcrumbs, PageTitle, Section, Spinner } from 'components/ui'

const Feedback = () => {
	const language = useAppSelector(selectLanguage)

	// useGetFeedbackQuery

	const storeFeedbackData = useAppSelector((state) => state.common.feedback)

	useDocumentHead(
		language,
		storeFeedbackData ? storeFeedbackData.displayName : '',
		storeFeedbackData ? storeFeedbackData.pathname : '',
	)

	//
	//
	//
	//
	//

	const minWidth = 400
	const maxWidth = 720

	const getRandomWidth = () => {
		return Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth
	}

	return (
		<React.Fragment>
			{storeFeedbackData ? (
				<div
					style={{
						top: 0,
						left: 0,
						width: '100vw',
						height: '100vh',
						position: 'fixed',
						overflow: 'hidden',
						cursor: 'move',
					}}
				>
					<Draggable
						// bounds="parent"
						// handle=".handle"
						defaultPosition={{ x: 0, y: 240 }}
						scale={1}
					>
						<div>
							<Section countColumns={8}>
								<Box>
									<PageTitle
										title={storeFeedbackData.displayName}
										before={
											<Breadcrumbs
												customLabels={[storeFeedbackData.displayName]}
												selectLanguage={language}
											/>
										}
									/>
								</Box>
							</Section>

							{storeFeedbackData &&
								storeFeedbackData.data.map((item) =>
									item.feedback.map((feedbackItem, index) => (
										<Feedback.Item
											key={feedbackItem.id + index}
											avatar={feedbackItem.author.avatar}
											fullName={feedbackItem.author.fullName}
											jobTitle={
												item.id +
												'\u00A0•\u00A0' +
												feedbackItem.author.jobTitle +
												'\u00A0• от\u00A0' +
												getFormattedDate(feedbackItem.date, false).short
											}
											value={feedbackItem.value}
											style={{ maxWidth: getRandomWidth() }}
										/>
									)),
								)}
						</div>
					</Draggable>
				</div>
			) : (
				<Spinner className="ui-mx-auto ui-py-48-px" width={48} height={48} />
			)}
		</React.Fragment>
	)
}

// Feedback.ItemSkeleton = FeedbackItemSkeleton
// Feedback.ItemSkeleton.displayName = 'Feedback.ItemSkeleton'

Feedback.Item = FeedbackItem
Feedback.Item.displayName = 'Feedback.Item'

Feedback.displayName = 'Feedback'

export { Feedback }
