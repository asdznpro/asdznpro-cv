import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from 'services/base-query.service'

import {
	AboutModel,
	ContactsModel,
	CvMapModel,
	EducationModel,
	ExperienceModel,
	FeedbackModel,
	HardSkillsModel,
	LanguageModel,
	PortfolioModel,
} from 'models'

export const commonApi = createApi({
	reducerPath: 'commonApi',
	baseQuery: axiosBaseQuery(),
	endpoints: (builder) => ({
		getAbout: builder.query<AboutModel, { language: LanguageModel }>({
			query: ({ language }) => ({
				url: `${language.lang}/about.json`,
				method: 'GET',
			}),
		}),

		getContacts: builder.query<ContactsModel, { language: LanguageModel }>({
			query: ({ language }) => ({
				url: `${language.lang}/contacts.json`,
				method: 'GET',
			}),
		}),

		getCvMap: builder.query<CvMapModel, { language: LanguageModel }>({
			query: ({ language }) => ({
				url: `${language.lang}/cv-map.json`,
				method: 'GET',
			}),
		}),

		getEducation: builder.query<EducationModel, { language: LanguageModel }>({
			query: ({ language }) => ({
				url: `${language.lang}/education.json`,
				method: 'GET',
			}),
		}),

		getExperience: builder.query<ExperienceModel, { language: LanguageModel }>({
			query: ({ language }) => ({
				url: `${language.lang}/experience.json`,
				method: 'GET',
			}),
		}),

		getFeedback: builder.query<FeedbackModel, { language: LanguageModel }>({
			query: ({ language }) => ({
				url: `${language.lang}/feedback.json`,
				method: 'GET',
			}),
		}),

		getHardSkills: builder.query<HardSkillsModel, { language: LanguageModel }>({
			query: ({ language }) => ({
				url: `${language.lang}/hard-skills.json`,
				method: 'GET',
			}),
		}),

		getPortfolio: builder.query<PortfolioModel, { language: LanguageModel }>({
			query: ({ language }) => ({
				url: `${language.lang}/portfolio.json`,
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
	useGetFeedbackQuery,
	useGetHardSkillsQuery,
	useGetPortfolioQuery,
} = commonApi
