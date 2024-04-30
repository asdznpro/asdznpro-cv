export interface CvMapModel {
	data: CvMap[]
	displayName: string
	id: string
}

interface CvMap {
	name: string
	pathname: string
}
