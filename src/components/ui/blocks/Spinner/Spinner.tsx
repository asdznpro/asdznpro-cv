import styles from './Spinner.module.scss'
import SpinnerProps from './Spinner.interface'

import { Icon24Spinner } from '@vkontakte/icons'

const Spinner: React.FC<SpinnerProps> = props => {
	const { width, height, color, style } = props

	return (
		<div className={styles.root} style={style}>
			<Icon24Spinner
				width={width}
				height={height}
				color={color ? color : 'hsl(241 10% 64%)'}
				className={styles.wrapper}
			/>
		</div>
	)
}

export { Spinner }
