import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import ContactsModel from 'models/Contacts.interface'
import EducationModel from 'models/Education.interface'
import ExperienceModel from 'models/Experience.interface'
import HardSkillsModel from 'models/HardSkills.interface'
import PersonalModel from 'models/Personal.interface'
import PortfolioModel from 'models/Portfolio.interface'

interface CommonState {
	contacts: ContactsModel | null
	education: EducationModel | null
	experience: ExperienceModel | null
	hardSkills: HardSkillsModel | null
	personal: any | null
	portfolio: PortfolioModel | null
}

const initialState: CommonState = {
	contacts: null,
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
		setContactsData: (state, action: PayloadAction<ContactsModel | null>) => {
			state.contacts = action.payload
		},
		setEducationData: (state, action: PayloadAction<EducationModel | null>) => {
			state.education = action.payload
		},
		setExperienceData: (
			state,
			action: PayloadAction<ExperienceModel | null>
		) => {
			state.experience = action.payload
		},
		setHardSkillsData: (
			state,
			action: PayloadAction<HardSkillsModel | null>
		) => {
			state.hardSkills = action.payload
		},
		setPersonalData: (state, action: PayloadAction<any | null>) => {
			state.personal = action.payload
		},
		setPortfolioData: (state, action: PayloadAction<PortfolioModel | null>) => {
			state.portfolio = action.payload
		},
	},
})

export const {
	setContactsData,
	setEducationData,
	setExperienceData,
	setHardSkillsData,
	setPersonalData,
	setPortfolioData,
} = commonSlice.actions
export default commonSlice.reducer
