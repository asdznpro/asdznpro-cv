export default interface HardSkillsModel {
	data: HardSkills[]
	displayName: string
	pathname: string
	id: string
}

interface HardSkills {
	id: number
	jobTitle: string
	stack: HardSkillsStack[]
}

interface HardSkillsStack {
	id: number
	image: string
	name: string
	level: string
	description?: string
	examples?: string[]
}
