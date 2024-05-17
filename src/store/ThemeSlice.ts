import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ThemeModel } from 'models/Common.interface'
import { RootState } from 'store'

interface ThemeState {
	mode: ThemeModel
}

const initialState: ThemeState = {
	mode: { mode: 'light' },
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<ThemeModel>) => {
			state.mode = action.payload
		},
	},
})

export const { setTheme } = themeSlice.actions
export const selectTheme = (state: RootState) => state.theme.mode

export default themeSlice.reducer
