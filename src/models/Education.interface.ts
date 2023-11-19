import CommonInfo from './Common.interface'

export default interface EducationModel {
	data: Education[]
	displayName?: string
	id?: string
	version?: number
}

interface Education {
	id: number
	info: CommonInfo[]
}
