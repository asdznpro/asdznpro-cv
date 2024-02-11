import CommonInfo from './Common.interface'

export default interface ExperienceModel {
	data: Experience[]
	displayName: string
	pathname: string
	id: string
}

interface Experience {
	id: number
	employerInfo: EmployerInfo
	pathname: string
	labels: CommonInfo[]
	info: CommonInfo[]
	execute: string[]
	examples: string[]
	feedback?: Feedback[]
}

interface EmployerInfo {
	name: string
	logo: string
	logoLight?: string
	website?: string
	preview?: string
	shortDescription: string
	fullDescription?: string
}

interface Feedback {
	id: number
	avatar: string
	fullName: string
	jobTitle: string
	value: string
	socialNetworks: {
		icon: string
		href: string
	}[]
}
