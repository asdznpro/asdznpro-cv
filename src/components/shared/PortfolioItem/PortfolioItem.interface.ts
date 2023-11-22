export default interface PortfolioItemProps {
	projectName: string | undefined
	to: string
	tags: string | undefined
	date?: string | undefined
	preview?: string | undefined
	award?: string | undefined
	children?: React.ReactNode
	style?: React.CSSProperties
}
