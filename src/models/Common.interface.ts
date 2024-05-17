export interface CommonInfoModel {
	id?: string
	title?: string
	icon?: string
	iconLight?: string
	value: string
	href?: string
}

export interface LanguageModel {
	lang: 'ru' | 'en'
}

export interface ThemeModel {
	mode: 'dark' | 'light'
}
