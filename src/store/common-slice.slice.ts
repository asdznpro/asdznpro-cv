import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
	AboutType,
	ContactsType,
	CvMapType,
	EducationType,
	ExperienceType,
	FeedbackType,
	HardSkillsType,
	PortfolioType,
} from 'types'

interface CommonState {
	about: AboutType | null
	contacts: ContactsType | null
	cvMap: CvMapType | null
	education: EducationType | null
	experience: ExperienceType | null
	feedback: FeedbackType | null
	hardSkills: HardSkillsType | null
	portfolio: PortfolioType | null
}

const initialState: CommonState = {
	about: null,
	contacts: null,
	cvMap: null,
	education: null,
	experience: null,
	feedback: null,
	hardSkills: null,
	portfolio: null,
}

const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		setAboutData: (state, action: PayloadAction<AboutType | null>) => {
			state.about = action.payload
		},
		setContactsData: (state, action: PayloadAction<ContactsType | null>) => {
			state.contacts = action.payload
		},
		setCvMapData: (state, action: PayloadAction<CvMapType | null>) => {
			state.cvMap = action.payload
		},
		setEducationData: (state, action: PayloadAction<EducationType | null>) => {
			state.education = action.payload
		},
		setExperienceData: (
			state,
			action: PayloadAction<ExperienceType | null>,
		) => {
			state.experience = action.payload
		},
		setFeedbackData: (state, action: PayloadAction<FeedbackType | null>) => {
			state.feedback = action.payload
		},
		setHardSkillsData: (
			state,
			action: PayloadAction<HardSkillsType | null>,
		) => {
			state.hardSkills = action.payload
		},
		setPortfolioData: (state, action: PayloadAction<PortfolioType | null>) => {
			state.portfolio = action.payload
		},
	},
})

export const {
	setAboutData,
	setContactsData,
	setCvMapData,
	setEducationData,
	setExperienceData,
	setFeedbackData,
	setHardSkillsData,
	setPortfolioData,
} = commonSlice.actions
export default commonSlice.reducer
