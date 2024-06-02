import { CommonInfoType } from 'types'

export interface EducationType {
	data: Education[]
	displayName: string
	pathname: string
	id: string
}

export interface Education {
	id: number
	info: CommonInfoType[]
}
