import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { commonApi } from 'services/common-api.service'

import commonSlice from './common-slice.slice'
import languageSlice from './language-slice.slice'
import themeSlice from './theme-slice.slice'

const rootReducer = combineReducers({
	common: commonSlice,
	language: languageSlice,
	theme: themeSlice,

	[commonApi.reducerPath]: commonApi.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat([commonApi.middleware]),
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export * from './common-slice.slice'
export * from './language-slice.slice'
export * from './theme-slice.slice'
