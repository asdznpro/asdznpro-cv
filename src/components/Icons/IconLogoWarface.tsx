// @ts-ignore
import src from '../../static/icons/logos/warface.svg'

const IconLogoWarface = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img src={src} alt='Warface' style={{ width: width, height: height }} />
		</>
	)
}

export { IconLogoWarface }
