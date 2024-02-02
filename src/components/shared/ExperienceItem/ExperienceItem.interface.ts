export default interface ExperienceItemProps {
	title: string | undefined
	describe: string | undefined
	logoPath?: string | undefined
	preview?: string | undefined

	children?: React.ReactNode

	ellipsis?: boolean | undefined

	to?: string | undefined
}
