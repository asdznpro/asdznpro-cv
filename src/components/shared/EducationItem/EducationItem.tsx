import styles from './EducationItem.module.scss'
import EducationItemProps from './EducationItem.interface'

import { Fontbody } from 'components/ui'

const EducationItem: React.FC<EducationItemProps> = props => {
	const { children } = props

	return <Fontbody>EducationItem</Fontbody>
}

export { EducationItem }
