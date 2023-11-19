import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import PersonalModel from 'models/Personal.interface'
import ExperienceModel from 'models/Experience.interface'
import PortfolioModel from 'models/Portfolio.interface'
import HardSkillsModel from 'models/HardSkills.interface'
import EducationModel from 'models/Education.interface'

interface CommonState {
	personal: any
	experience: ExperienceModel | null
	portfolio: PortfolioModel | null
	hardSkills: HardSkillsModel | null
	education: EducationModel | null
}

const initialState: CommonState = {
	personal: null,
	experience: null,
	portfolio: null,
	hardSkills: null,
	education: null,
}

const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		setPersonalData: (state, action: PayloadAction<any>) => {
			state.personal = action.payload
		},
		setExperienceData: (
			state,
			action: PayloadAction<ExperienceModel | null>
		) => {
			state.experience = action.payload
		},
		setPortfolioData: (state, action: PayloadAction<PortfolioModel | null>) => {
			state.portfolio = action.payload
		},
		setHardSkillsData: (
			state,
			action: PayloadAction<HardSkillsModel | null>
		) => {
			state.hardSkills = action.payload
		},
		setEducationData: (state, action: PayloadAction<EducationModel | null>) => {
			state.education = action.payload
		},
	},
})

export const {
	setPersonalData,
	setExperienceData,
	setPortfolioData,
	setHardSkillsData,
	setEducationData,
} = commonSlice.actions
export default commonSlice.reducer
