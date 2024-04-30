import { CommonInfoModel } from 'models'

export interface EducationModel {
	data: Education[]
	displayName: string
	pathname: string
	id: string
}

export interface Education {
	id: number
	info: CommonInfoModel[]
}
