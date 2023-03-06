// @ts-ignore
import src from '../../static/icons/tools/ts.svg'

const IconLogoTypeScript = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img
				src={src}
				alt='TypeScript'
				style={{ width: width, height: height }}
			/>
		</>
	)
}

export { IconLogoTypeScript }
