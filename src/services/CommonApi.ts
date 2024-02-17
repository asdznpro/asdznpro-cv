import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from './BaseQuery'

import AboutModel from 'models/About.interface'
import ContactsModel from 'models/Contacts.interface'
import CvMapModel from 'models/CvMap.interface'
import EducationModel from 'models/Education.interface'
import ExperienceModel from 'models/Experience.interface'
import HardSkillsModel from 'models/HardSkills.interface'
import PortfolioModel from 'models/Portfolio.interface'

export const commonApi = createApi({
	reducerPath: 'commonApi',
	baseQuery: axiosBaseQuery(),
	endpoints: builder => ({
		getAbout: builder.query<AboutModel, { language: 'ru' | 'en' }>({
			query: ({ language }) => ({
				url: `${language}/about.json`,
				method: 'GET',
			}),
		}),

		getContacts: builder.query<ContactsModel, { language: 'ru' | 'en' }>({
			query: ({ language }) => ({
				url: `${language}/contacts.json`,
				method: 'GET',
			}),
		}),

		getCvMap: builder.query<CvMapModel, { language: 'ru' | 'en' }>({
			query: ({ language }) => ({
				url: `${language}/cv-map.json`,
				method: 'GET',
			}),
		}),

		getEducation: builder.query<EducationModel, { language: 'ru' | 'en' }>({
			query: ({ language }) => ({
				url: `${language}/education.json`,
				method: 'GET',
			}),
		}),

		getExperience: builder.query<ExperienceModel, { language: 'ru' | 'en' }>({
			query: ({ language }) => ({
				url: `${language}/experience.json`,
				method: 'GET',
			}),
		}),

		getHardSkills: builder.query<HardSkillsModel, { language: 'ru' | 'en' }>({
			query: ({ language }) => ({
				url: `${language}/hard-skills.json`,
				method: 'GET',
			}),
		}),

		getPortfolio: builder.query<PortfolioModel, { language: 'ru' | 'en' }>({
			query: ({ language }) => ({
				url: `${language}/portfolio.json`,
				method: 'GET',
			}),
		}),
	}),
})

export const {
	useGetAboutQuery,
	useGetContactsQuery,
	useGetCvMapQuery,
	useGetEducationQuery,
	useGetExperienceQuery,
	useGetHardSkillsQuery,
	useGetPortfolioQuery,
} = commonApi
