import { useEffect, useState } from 'react'

interface UseMountProps {
	isActive: boolean
	ANIMATION_TIME: number
}

function useMount({ isActive, ANIMATION_TIME }: UseMountProps) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		if (isActive && !mounted) {
			setMounted(true)
		} else if (!isActive && mounted) {
			setTimeout(() => {
				setMounted(false)
			}, ANIMATION_TIME)
		}
	}, [isActive])

	return { mounted }
}

export { useMount }
