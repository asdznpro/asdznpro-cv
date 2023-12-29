export default interface TileProps {
	children: React.ReactNode
	style?: React.CSSProperties

	padding?: boolean | undefined

	to?: string | undefined
	href?: string | undefined
	target?: 'self' | 'blank' | 'parent' | 'top' | undefined
}
