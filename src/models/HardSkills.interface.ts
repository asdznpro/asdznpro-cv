export default interface HardSkillsModel {
	data: HardSkills[]
	displayName?: string
	id?: string
	version?: number
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
	description?: string
	examples?: string[]
}
