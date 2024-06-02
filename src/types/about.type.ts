import { CommonInfoType } from 'types'

export interface AboutType {
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
	brief: CommonInfoType[]
	possibleJobs: {
		title: string
		list: string[]
		caption: string
	}
}
