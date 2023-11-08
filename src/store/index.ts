import { combineReducers, configureStore } from '@reduxjs/toolkit'

import themeSlice from './ThemeSlice'

const rootReducer = combineReducers({
	theme: themeSlice,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
