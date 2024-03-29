export default interface CvLinkItemProps {
	children?: React.ReactNode
	style?: React.CSSProperties

	to?: string | undefined
	href?: string | undefined
	target?: 'self' | 'blank' | 'parent' | 'top' | undefined

	backgroundColor?: string | undefined
}
