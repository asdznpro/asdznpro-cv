// @ts-ignore
import src from '../../static/icons/logos/eml.svg'

const IconLogoEml = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img src={src} alt='EML' style={{ width: width, height: height }} />
		</>
	)
}

export { IconLogoEml }
