export default interface ExperienceModel {
	data: Experience[]
	displayName?: string
	id?: string
	version?: number
}

interface Experience {
	id: number
	employerName: string
	employerLogo: string
	employerLogoLight?: string
	employerWebsite?: string
	employerPreview?: string
	shortDescription: string
	fullDescription?: string
	pathname: string
	labels: string[]
	info: ExperienceInfo[]
	execute: string[]
	examples: string[]
	feedback: Feedback[]
}

interface ExperienceInfo {
	title: string
	value: string
}

interface Feedback {
	fullName: string
	avatar: string
	jobTitle: string
	socialNetworks: string[]
	value: string
}
