// @ts-ignore
import src from '../../static/icons/tools/cinema.png'

const IconLogoCinema = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img src={src} alt='Cinema 4D' style={{ width: width, height: height }} />
		</>
	)
}

export { IconLogoCinema }
