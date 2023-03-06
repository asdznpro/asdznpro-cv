// @ts-ignore
import src from '../../static/icons/tools/git.svg'

const IconLogoGit = (props: any) => {
	let width = props.width ? props.width : 144
	let height = props.height ? props.height : 144

	return (
		<>
			<img src={src} alt='Git' style={{ width: width, height: height }} />
		</>
	)
}

export { IconLogoGit }
