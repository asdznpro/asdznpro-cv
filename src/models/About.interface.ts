import CommonInfo from './Common.interface'

export default interface AboutModel {
	data: About
	displayName: string
	pathname: string
	id: string
}

interface About {
	fullName: string
	firstName: string
	lastName: string
	photo: string
	bio: string[]
	brief: CommonInfo[]
	possibleJobs: {
		title: string
		list: string[]
		caption: string
	}
}
