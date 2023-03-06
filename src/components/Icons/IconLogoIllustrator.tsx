// @ts-ignore
import src from '../../static/icons/tools/illustrator.svg'

const IconLogoIllustrator = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img
				src={src}
				alt='Adobe Illustrator'
				style={{ width: width, height: height }}
			/>
		</>
	)
}

export { IconLogoIllustrator }
