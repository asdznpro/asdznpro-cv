// @ts-ignore
import src from '../../static/icons/tools/figma.svg'

const IconLogoFigma = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img src={src} alt='Figma' style={{ width: width, height: height }} />
		</>
	)
}

export { IconLogoFigma }
