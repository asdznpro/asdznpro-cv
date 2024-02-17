import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store'

interface LanguageState {
	language: 'ru' | 'en'
}

const initialState: LanguageState = {
	language: 'ru',
}

export const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		setLanguage: (state, action: PayloadAction<'ru' | 'en'>) => {
			state.language = action.payload
		},
	},
})

export const { setLanguage } = languageSlice.actions
export const selectLanguage = (state: RootState) => state.language.language

export default languageSlice.reducer
