import CommonInfo from './Common.interface'

export default interface EducationModel {
	data: Education[]
	displayName: string
	pathname: string
	id: string
}

export interface Education {
	id: number
	info: CommonInfo[]
}
