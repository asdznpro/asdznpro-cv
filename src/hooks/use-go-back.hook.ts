import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useGoBack = (level = -1) => {
	const navigate = useNavigate()

	const goBack = useCallback(() => {
		navigate(level)
	}, [navigate, level])

	return goBack
}
