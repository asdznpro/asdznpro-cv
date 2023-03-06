// @ts-ignore
import src from '../../static/icons/tools/js.svg'

const IconLogoJavaScript = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img
				src={src}
				alt='JavaScript'
				style={{ width: width, height: height }}
			/>
		</>
	)
}

export { IconLogoJavaScript }
