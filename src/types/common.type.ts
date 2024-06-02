export interface CommonInfoType {
	id?: string
	title?: string
	icon?: string
	iconLight?: string
	value: string
	href?: string
}

export interface LanguageType {
	lang: 'ru' | 'en'
}

export interface ThemeType {
	mode: 'dark' | 'light'
}
