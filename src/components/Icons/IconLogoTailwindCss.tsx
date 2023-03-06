// @ts-ignore
import src from '../../static/icons/tools/tailwind-css.svg'

const IconLogoTailwindCss = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img
				src={src}
				alt='Tailwind CSS'
				style={{ width: width, height: height }}
			/>
		</>
	)
}

export { IconLogoTailwindCss }
