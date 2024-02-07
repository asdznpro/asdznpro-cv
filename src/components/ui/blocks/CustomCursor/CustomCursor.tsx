import { useRef, useEffect } from 'react'

import styles from './CustomCursor.module.scss'
import CustomCursorProps from './CustomCursor.interface'

import { Button } from 'components/ui'

import { Icon28LinkOutline } from '@vkontakte/icons'

const CustomCursor: React.FC<CustomCursorProps> = props => {
	const { appearance } = props

	const cursorRef = useRef<HTMLDivElement>(null)
	const cursorRect = useRef<DOMRect | null>(null)

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event

			if (cursorRef.current && cursorRect.current) {
				const mouseX =
					clientX - cursorRef.current.clientWidth / 2 - cursorRect.current.left
				const mouseY =
					clientY - cursorRef.current.clientHeight / 2 - cursorRect.current.top

				cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
			}
		}

		document.addEventListener('mousemove', handleMouseMove)

		// Get the initial position of cursorRef
		if (cursorRef.current) {
			cursorRect.current = cursorRef.current.getBoundingClientRect()
		}

		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return (
		<div ref={cursorRef} className={styles.root}>
			<Button
				className={styles.content}
				appearance={appearance}
				size='sm'
				before={<Icon28LinkOutline />}
				rounded
				noneAction
			/>
		</div>
	)
}

export { CustomCursor }
