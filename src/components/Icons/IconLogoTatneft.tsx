// @ts-ignore
import src from '../../static/icons/logos/tatneft.svg'

const IconLogoTatneft = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img src={src} alt='Татнефть' style={{ width: width, height: height }} />
		</>
	)
}

export { IconLogoTatneft }
