import styles from './List.module.scss'
import ListProps from './List.interface'

const ListItem: React.FC<React.AllHTMLAttributes<HTMLElement>> = (props) => {
	const { children } = props

	return <li>{children}</li>
}

export { ListItem }
