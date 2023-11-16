import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CommonState {
	personal: any
	experience: any
	portfolio: any
	hardSkills: any
	education: any
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
		setExperienceData: (state, action: PayloadAction<any>) => {
			state.experience = action.payload
		},
		setPortfolioData: (state, action: PayloadAction<any>) => {
			state.portfolio = action.payload
		},
		setHardSkillsData: (state, action: PayloadAction<any>) => {
			state.hardSkills = action.payload
		},
		setEducationData: (state, action: PayloadAction<any>) => {
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
