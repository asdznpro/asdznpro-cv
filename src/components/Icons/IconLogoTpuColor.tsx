// @ts-ignore
import src from '../../static/icons/logos/tpu-color.svg'

const IconLogoTpuColor = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img src={src} alt='ТПУ' style={{ width: width, height: height }} />
		</>
	)
}

export { IconLogoTpuColor }
