export default interface FeedbackItemProps
	extends React.AllHTMLAttributes<HTMLElement> {
	avatar: string
	fullName: string
	jobTitle: string
	value: string

	children?: React.ReactNode
}
