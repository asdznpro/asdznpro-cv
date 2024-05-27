import { useState, useEffect } from 'react'
import { throttle } from 'lodash'

function useDocumentScrollThrottled(callback: any) {
	const [, setScrollPosition] = useState(0)
	let previousScrollTop = 0

	function handleDocumentScroll() {
		const { scrollTop: currentScrollTop } =
			document.documentElement || document.body

		setScrollPosition(previousPosition => {
			previousScrollTop = previousPosition
			return currentScrollTop
		})

		callback({ previousScrollTop, currentScrollTop })
	}

	useEffect(() => {
		const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 50)

		window.addEventListener('scroll', handleDocumentScrollThrottled)

		return () =>
			window.removeEventListener('scroll', handleDocumentScrollThrottled)
	}, [])
}

export { useDocumentScrollThrottled }
