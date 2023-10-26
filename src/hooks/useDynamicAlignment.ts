import { useState, useEffect } from 'react'

const useDynamicAlignment = () => {
	const [screenDimensions, setScreenDimensions] = useState({
		screenWidth: window.innerWidth,
		screenHeight: window.innerHeight,
	})

	useEffect(() => {
		const handleResize = () => {
			setScreenDimensions({
				screenWidth: window.innerWidth,
				screenHeight: window.innerHeight,
			})
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return screenDimensions
}

export { useDynamicAlignment }
