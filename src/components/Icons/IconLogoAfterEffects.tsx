// @ts-ignore
import src from '../../static/icons/tools/after-effects.svg'

const IconLogoAfterEffects = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img
				src={src}
				alt='Adobe After Effects'
				style={{ width: width, height: height }}
			/>
		</>
	)
}

export { IconLogoAfterEffects }
