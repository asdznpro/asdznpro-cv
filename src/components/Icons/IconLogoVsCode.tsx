// @ts-ignore
import src from '../../static/icons/tools/vs-code.svg'

const IconLogoVsCode = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img
				src={src}
				alt='Visual Studio Code'
				style={{ width: width, height: height }}
			/>
		</>
	)
}

export { IconLogoVsCode }
