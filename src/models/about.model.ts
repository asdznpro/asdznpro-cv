import { CommonInfoModel } from 'models'

export interface AboutModel {
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
	brief: CommonInfoModel[]
	possibleJobs: {
		title: string
		list: string[]
		caption: string
	}
}
