import Award from './Awards.interface'
import CommonInfo from './Common.interface'

export default interface PortfolioModel {
	data: PortfolioProject[]
	tags: PortfolioProjectTag[]
	displayName: string
	pathname: string
	id: string
}

interface PortfolioProject {
	id: number
	client?: CommonInfo[]
	project: {
		fullName: string
		shortName: string
		pathname: string
		preview: string
		date: string
	}
	tags: PortfolioProjectTag[]
	awards?: Award[]
}

interface PortfolioProjectTag {
	name?: string
	type: string
}
