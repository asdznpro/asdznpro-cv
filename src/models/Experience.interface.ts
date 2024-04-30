import { CommonInfoModel } from 'models'

export interface ExperienceModel {
	data: Experience[]
	displayName: string
	pathname: string
	id: string
}

interface Experience {
	id: number
	employerInfo: EmployerInfo
	pathname: string
	labels: CommonInfoModel[]
	info: CommonInfoModel[]
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
