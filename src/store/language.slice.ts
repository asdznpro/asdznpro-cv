import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store'

import { LanguageType } from 'types'

interface LanguageState {
	lang: LanguageType
}

const initialState: LanguageState = {
	lang: { lang: 'ru' },
}

export const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		setLanguage: (state, action: PayloadAction<LanguageType>) => {
			state.lang = action.payload
		},
	},
})

export const { setLanguage } = languageSlice.actions
export const selectLanguage = (state: RootState) => state.language.lang

export default languageSlice.reducer
