import { LinkProps } from 'react-router-dom'

export default interface ExperienceItemProps
	extends React.AllHTMLAttributes<HTMLElement> {
	logoPath?: string | undefined
	preview?: string | undefined

	to?: LinkProps['to']
}
