import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from './BaseQuery'

import ExperienceModel from 'models/Experience.interface'
import HardSkillsModel from 'models/HardSkills.interface'
import EducationModel from 'models/Education.interface'

export const commonApi = createApi({
	reducerPath: 'commonApi',
	baseQuery: axiosBaseQuery(),
	endpoints: builder => ({
		getPersonal: builder.query<any, void>({
			query: () => ({
				url: '7b59ffa1-c8e5-4bd6-9f02-92d9c13e7ed8',
				method: 'GET',
			}),
		}),

		getExperience: builder.query<ExperienceModel, void>({
			query: () => ({
				url: 'e2318210-d473-4be8-8529-a4b3bc2f870d',
				method: 'GET',
			}),
		}),

		getPortfolio: builder.query<any, void>({
			query: () => ({
				url: '14198bd7-eaa7-4840-8516-7a6cb6bbf44a',
				method: 'GET',
			}),
		}),

		getHardSkills: builder.query<HardSkillsModel, void>({
			query: () => ({
				url: '68182709-2efb-4672-9551-4c4c40148ff2',
				method: 'GET',
			}),
		}),

		getEducation: builder.query<EducationModel, void>({
			query: () => ({
				url: 'c8331cb0-61ce-4ee2-9454-363e31cc2a7c',
				method: 'GET',
			}),
		}),
	}),
})

export const {
	useGetPersonalQuery,
	useGetExperienceQuery,
	useGetPortfolioQuery,
	useGetHardSkillsQuery,
	useGetEducationQuery,
} = commonApi
