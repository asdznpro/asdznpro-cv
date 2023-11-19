import Award from './Awards.interface'

export default interface PortfolioModel {
	data: PortfolioProject[]
	displayName?: string
	id?: string
	version?: number
}

interface PortfolioProject {
	id: number
	client: string[]
	projectName: string
	projectShortName: string
	projectPreview: string
	projectDate: string
	pathname: string
	tags: PortfolioProjectTag[]
	awards?: Award[]
}

interface PortfolioProjectTag {
	name?: string
	type: string
}
