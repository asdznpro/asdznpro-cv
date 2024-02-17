import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import AboutModel from 'models/About.interface'
import ContactsModel from 'models/Contacts.interface'
import CvMapModel from 'models/CvMap.interface'
import EducationModel from 'models/Education.interface'
import ExperienceModel from 'models/Experience.interface'
import HardSkillsModel from 'models/HardSkills.interface'
import PortfolioModel from 'models/Portfolio.interface'

interface CommonState {
	about: AboutModel | null
	contacts: ContactsModel | null
	cvMap: CvMapModel | null
	education: EducationModel | null
	experience: ExperienceModel | null
	hardSkills: HardSkillsModel | null
	portfolio: PortfolioModel | null
}

const initialState: CommonState = {
	about: null,
	contacts: null,
	cvMap: null,
	education: null,
	experience: null,
	hardSkills: null,
	portfolio: null,
}

const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		setAboutData: (state, action: PayloadAction<AboutModel | null>) => {
			state.about = action.payload
		},
		setContactsData: (state, action: PayloadAction<ContactsModel | null>) => {
			state.contacts = action.payload
		},
		setCvMapData: (state, action: PayloadAction<CvMapModel | null>) => {
			state.cvMap = action.payload
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
		setPortfolioData: (state, action: PayloadAction<PortfolioModel | null>) => {
			state.portfolio = action.payload
		},
	},
})

export const {
	setContactsData,
	setCvMapData,
	setEducationData,
	setExperienceData,
	setHardSkillsData,
	setAboutData,
	setPortfolioData,
} = commonSlice.actions
export default commonSlice.reducer
