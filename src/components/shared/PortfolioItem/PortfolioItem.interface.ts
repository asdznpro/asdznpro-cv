import Award from 'models/Awards.interface'

export default interface PortfolioItemProps {
	name: string | undefined
	to: string
	tags: string | undefined
	date?: string | undefined

	preview?: string | undefined
	award?: Award | null

	children?: React.ReactNode
	style?: React.CSSProperties
}
