// @ts-ignore
import src from '../../static/icons/logos/mybonus.svg'

const IconLogoMybonus = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img src={src} alt='MYBONUS' style={{ width: width, height: height }} />
		</>
	)
}

export { IconLogoMybonus }
