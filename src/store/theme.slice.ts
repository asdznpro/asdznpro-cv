import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ThemeType } from 'types'
import { RootState } from 'store'

interface ThemeState {
	mode: ThemeType
}

const initialState: ThemeState = {
	mode: { mode: 'light' },
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<ThemeType>) => {
			state.mode = action.payload
		},
	},
})

export const { setTheme } = themeSlice.actions
export const selectTheme = (state: RootState) => state.theme.mode

export default themeSlice.reducer
