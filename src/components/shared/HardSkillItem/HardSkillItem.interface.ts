export default interface HardSkillItemProps {
	name: string | undefined
	image: string | undefined

	children?: React.ReactNode | undefined

	onClick?: React.MouseEventHandler<HTMLElement>
}
