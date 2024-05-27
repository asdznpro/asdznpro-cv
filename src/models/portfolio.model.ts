import { AwardModel, CommonInfoModel } from 'models'

export interface PortfolioModel {
	data: PortfolioProject[]
	tags: PortfolioProjectTag[]
	displayName: string
	pathname: string
	id: string
}

interface PortfolioProject {
	id: number
	client?: CommonInfoModel[]
	project: {
		fullName: string
		shortName: string
		pathname: string
		preview: string
		date: string
	}
	tags: PortfolioProjectTag[]
	awards?: AwardModel[]
}

interface PortfolioProjectTag {
	name?: string
	type: string
}
