import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store'

interface ThemeState {
	theme: 'light' | 'dark'
}

const initialState: ThemeState = {
	theme: 'light',
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
			state.theme = action.payload
		},
	},
})

export const { setTheme } = themeSlice.actions
export const selectTheme = (state: RootState) => state.theme.theme

export default themeSlice.reducer
