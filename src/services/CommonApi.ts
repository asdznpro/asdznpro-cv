import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from './BaseQuery'

import ContactsModel from 'models/Contacts.interface'
import EducationModel from 'models/Education.interface'
import ExperienceModel from 'models/Experience.interface'
import HardSkillsModel from 'models/HardSkills.interface'
import PersonalModel from 'models/Personal.interface'
import PortfolioModel from 'models/Portfolio.interface'

export const commonApi = createApi({
	reducerPath: 'commonApi',
	baseQuery: axiosBaseQuery(),
	endpoints: builder => ({
		getContacts: builder.query<ContactsModel, void>({
			query: () => ({
				url: 'contacts.json',
				method: 'GET',
			}),
		}),

		getEducation: builder.query<EducationModel, void>({
			query: () => ({
				url: 'education.json',
				method: 'GET',
			}),
		}),

		getExperience: builder.query<ExperienceModel, void>({
			query: () => ({
				url: 'experience.json',
				method: 'GET',
			}),
		}),

		getHardSkills: builder.query<HardSkillsModel, void>({
			query: () => ({
				url: 'hard-skills.json',
				method: 'GET',
			}),
		}),

		getPersonal: builder.query<any, void>({
			query: () => ({
				url: 'personal.json',
				method: 'GET',
			}),
		}),

		getPortfolio: builder.query<PortfolioModel, void>({
			query: () => ({
				url: 'portfolio.json',
				method: 'GET',
			}),
		}),
	}),
})

export const {
	useGetContactsQuery,
	useGetEducationQuery,
	useGetExperienceQuery,
	useGetHardSkillsQuery,
	useGetPersonalQuery,
	useGetPortfolioQuery,
} = commonApi
