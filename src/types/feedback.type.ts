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
	avatar: string
	fullName: string
	jobTitle: string
	value: string
	socialNetworks?: SocialNetwork[]
}

interface SocialNetwork {
	icon: string
	href: string
}
