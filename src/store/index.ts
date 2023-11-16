import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { commonApi } from 'services/CommonApi'

import commonSlice from './СommonSlice'
import themeSlice from './ThemeSlice'

const rootReducer = combineReducers({
	common: commonSlice,
	theme: themeSlice,

	[commonApi.reducerPath]: commonApi.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat([commonApi.middleware]),
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
