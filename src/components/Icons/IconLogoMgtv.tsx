// @ts-ignore
import src from '../../static/icons/logos/mgtv.svg'

const IconLogoMgtv = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img src={src} alt='MGTV' style={{ width: width, height: height }} />
		</>
	)
}

export { IconLogoMgtv }
