import CommonInfo from './Common.interface'

export default interface PersonalModel {
	data: Personal
	displayName: string
	pathname: string
	id: string
}

interface Personal {
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
