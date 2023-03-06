// @ts-ignore
import src from '../../static/icons/tools/redshift.svg'

const IconLogoRedShift = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img src={src} alt='RedShift' style={{ width: width, height: height }} />
		</>
	)
}

export { IconLogoRedShift }
