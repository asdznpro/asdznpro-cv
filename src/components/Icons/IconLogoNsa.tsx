// @ts-ignore
import src from '../../static/icons/logos/nsa.svg'

const IconLogoNsa = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img
				src={src}
				alt='No Sleep Agency'
				style={{ width: width, height: height }}
			/>
		</>
	)
}

export { IconLogoNsa }
