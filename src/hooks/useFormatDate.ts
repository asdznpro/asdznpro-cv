import { useState } from 'react'

interface FormatDateHook {
	formatDate: (
		dateString: string | undefined,
		includeTime: boolean,
		includeDate: boolean
	) => string
	error: string | null
}

function useFormatDate(): FormatDateHook {
	const [error, setError] = useState<string | null>(null)

	const formatDate = (
		dateString: string | undefined,
		includeTime: boolean,
		includeDate: boolean
	) => {
		try {
			if (!dateString) {
				return ''
			}

			const now = new Date()
			const dateToShow = new Date(dateString)
			let formatDateString = ''

			const timeZoneOptions: Intl.DateTimeFormatOptions = {
				timeZoneName: 'short',
			}

			const isSameDay = now.toDateString() === dateToShow.toDateString()
			const isYesterday = now.getDate() - dateToShow.getDate() === 1

			if (includeDate) {
				if (isSameDay) {
					formatDateString = 'Сегодня'
				} else if (isYesterday) {
					formatDateString = 'Вчера'
				} else {
					formatDateString = dateToShow.toLocaleDateString(undefined)
				}
			}

			if (includeTime) {
				const options: Intl.DateTimeFormatOptions = {
					hour: '2-digit',
					minute: '2-digit',
					second: undefined,
					timeZoneName: undefined,
				}

				const timeString = dateToShow.toLocaleTimeString(undefined, options)

				if (formatDateString !== '') {
					formatDateString += ', '
				}

				formatDateString += timeString
			}

			return formatDateString
		} catch (error) {
			setError('Ошибка форматирования даты')
			return ''
		}
	}

	return { formatDate, error }
}

export { useFormatDate }
