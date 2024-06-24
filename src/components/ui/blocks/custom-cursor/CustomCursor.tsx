import * as React from 'react'
import { useRef, useEffect } from 'react'

import styles from './CustomCursor.module.scss'
import CustomCursorProps from './CustomCursor.interface'

import { Button } from 'components/ui'

import { Icon28LinkOutline } from '@vkontakte/icons'

const CustomCursor: React.FC<CustomCursorProps> = (props) => {
	const { appearance, ...restProps } = props

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

		if (cursorRef.current) {
			cursorRect.current = cursorRef.current.getBoundingClientRect()
		}

		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return (
		<div {...restProps} ref={cursorRef} className={styles.root}>
			{React.cloneElement(
				<Button
					className={styles.content}
					before={<Icon28LinkOutline />}
					rounded
					noneAction
				/>,
				{ appearance },
			)}
		</div>
	)
}

export { CustomCursor }
