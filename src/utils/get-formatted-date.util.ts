import { format, differenceInCalendarDays } from 'date-fns'
import { ru } from 'date-fns/locale'

type FormatDate = {
	full: string
	short: string
	relative: string
}

function getFormattedDate(
	timestamp: string,
	includeTime: boolean = true,
): FormatDate {
	const date = new Date(timestamp)
	const now = new Date()

	// const fullDateFormat = includeTime
	// 	? "d MMMM yyyy 'г. в' HH:mm"
	// 	: "d MMMM yyyy 'г.'"
	const fullDateFormat = includeTime ? "d MMMM yyyy 'в' HH:mm" : 'd MMMM yyyy'
	const shortDateFormat = includeTime ? 'dd.MM.yy, HH:mm' : 'dd.MM.yy'

	const full = format(date, fullDateFormat, { locale: ru })
	const short = format(date, shortDateFormat)
	const relative = getRelativeDate(date, now)

	return { full, short, relative }
}

function getRelativeDate(date: Date, now: Date) {
	const dayDiff = differenceInCalendarDays(now, date)

	if (dayDiff === 0) {
		return 'Сегодня'
	} else if (dayDiff === 1) {
		return 'Вчера'
	} else if (dayDiff === 2) {
		return 'Позавчера'
	} else if (dayDiff <= 4) {
		return `${dayDiff} дня назад`
	} else if (dayDiff <= 6) {
		return `${dayDiff} дней назад`
	} else if (dayDiff <= 13) {
		return 'неделю назад'
	} else if (dayDiff <= 27) {
		return `${Math.ceil(dayDiff / 7)} недели назад`
	} else if (dayDiff <= 45) {
		return 'месяц назад'
	} else if (dayDiff <= 345) {
		return `${Math.ceil(dayDiff / 30)} месяцев назад`
	} else {
		return `${Math.ceil(dayDiff / 365)} лет назад`
	}
}

export { getFormattedDate }
