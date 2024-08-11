export interface FeedbackType {
	data: FeedbackItem[]
	displayName: string
	pathname: string
	id: string
}

interface FeedbackItem {
	id: string
	feedback: FeedbackDetail[]
}

interface FeedbackDetail {
	id: number
	author: FeedbackAuthor
	date: string
	value: string
	socialNetworks?: SocialNetwork[]
}

interface FeedbackAuthor {
	avatar: string
	fullName: string
	jobTitle: string
}

interface SocialNetwork {
	icon: string
	href: string
}
