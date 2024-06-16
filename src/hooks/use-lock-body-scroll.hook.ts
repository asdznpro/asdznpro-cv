import { useEffect, useRef } from 'react'

interface UseLockBodyScrollProps {
	isLocked: boolean
	timeout?: number
}

const useLockBodyScroll = ({
	isLocked,
	timeout = 240,
}: UseLockBodyScrollProps): void => {
	const scrollTopRef = useRef(0)

	useEffect(() => {
		const handleScroll = () => {
			if (!isLocked) {
				scrollTopRef.current = window.scrollY
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [isLocked])

	useEffect(() => {
		if (isLocked) {
			const currentScrollY = window.scrollY
			scrollTopRef.current = currentScrollY

			document.body.style.position = 'fixed'
			document.body.style.top = `-${currentScrollY}px`
			document.body.classList.add('ui-scrollbar-stable')
		} else {
			setTimeout(() => {
				document.body.style.position = ''
				document.body.style.top = ''
				document.body.classList.remove('ui-scrollbar-stable')

				requestAnimationFrame(() => {
					window.scrollTo(0, scrollTopRef.current)
				})
			}, timeout)
		}
	}, [isLocked, timeout])
}

export { useLockBodyScroll }
