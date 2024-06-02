import { AwardType, CommonInfoType } from 'types'

export interface PortfolioType {
	data: PortfolioProject[]
	tags: PortfolioProjectTag[]
	displayName: string
	pathname: string
	id: string
}

interface PortfolioProject {
	id: number
	client?: CommonInfoType[]
	project: {
		fullName: string
		shortName: string
		pathname: string
		preview: string
		date: string
	}
	tags: PortfolioProjectTag[]
	awards?: AwardType[]
}

interface PortfolioProjectTag {
	name?: string
	type: string
}
