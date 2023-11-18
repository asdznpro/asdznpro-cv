export default interface ExperienceItemProps {
	title: string | undefined
	describe: string | undefined
	logoPath?: string | undefined
	preview?: string | undefined
	children?: React.ReactNode
	style?: React.CSSProperties

	to?: string | undefined
	href?: string | undefined
	target?: 'self' | 'blank' | 'parent' | 'top' | undefined
}
