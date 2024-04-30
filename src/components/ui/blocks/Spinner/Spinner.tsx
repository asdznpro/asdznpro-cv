import styles from './Spinner.module.scss'
import SpinnerProps from './Spinner.interface'

import { Icon24Spinner } from '@vkontakte/icons'

const Spinner: React.FC<SpinnerProps> = props => {
	const { width, height, color, ...restProps } = props

	return (
		<div
			{...restProps}
			className={[styles.root, color ? color : 'ui-text-secondary'].join(' ')}
		>
			<Icon24Spinner
				width={width}
				height={height}
				className='ui-animate-spin'
			/>
		</div>
	)
}

export { Spinner }
