import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from 'services/base-query.service'

import {
	AboutType,
	ContactsType,
	CvMapType,
	EducationType,
	ExperienceType,
	FeedbackType,
	HardSkillsType,
	LanguageType,
	PortfolioType,
} from 'types'

export const commonApi = createApi({
	reducerPath: 'commonApi',
	baseQuery: axiosBaseQuery(),
	endpoints: (builder) => ({
		getAbout: builder.query<AboutType, { language: LanguageType }>({
			query: ({ language }) => ({
				url: `${language.lang}/about.json`,
				method: 'GET',
			}),
		}),

		getContacts: builder.query<ContactsType, { language: LanguageType }>({
			query: ({ language }) => ({
				url: `${language.lang}/contacts.json`,
				method: 'GET',
			}),
		}),

		getCvMap: builder.query<CvMapType, { language: LanguageType }>({
			query: ({ language }) => ({
				url: `${language.lang}/cv-map.json`,
				method: 'GET',
			}),
		}),

		getEducation: builder.query<EducationType, { language: LanguageType }>({
			query: ({ language }) => ({
				url: `${language.lang}/education.json`,
				method: 'GET',
			}),
		}),

		getExperience: builder.query<ExperienceType, { language: LanguageType }>({
			query: ({ language }) => ({
				url: `${language.lang}/experience.json`,
				method: 'GET',
			}),
		}),

		getFeedback: builder.query<FeedbackType, { language: LanguageType }>({
			query: ({ language }) => ({
				url: `${language.lang}/feedback.json`,
				method: 'GET',
			}),
		}),

		getHardSkills: builder.query<HardSkillsType, { language: LanguageType }>({
			query: ({ language }) => ({
				url: `${language.lang}/hard-skills.json`,
				method: 'GET',
			}),
		}),

		getPortfolio: builder.query<PortfolioType, { language: LanguageType }>({
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
