import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

export const useGoBack = (level = -1) => {
	const navigate = useNavigate()

	const goBack = useCallback(() => {
		navigate(level)
	}, [navigate, level])

	return goBack
}
