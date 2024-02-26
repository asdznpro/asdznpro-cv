import React, { useRef } from 'react'
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	useMotionValue,
	useVelocity,
	useAnimationFrame,
} from 'framer-motion'
import { wrap } from '@motionone/utils'

import { Heading } from 'components/ui'

interface ParallaxProps {
	children: string
	baseVelocity: number
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
	const baseX = useMotionValue(0)
	const { scrollY } = useScroll()
	const scrollVelocity = useVelocity(scrollY)
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	})
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	})

	const x = useTransform(baseX, v => `${wrap(-200, -45, v)}%`)

	const directionFactor = useRef<number>(1)
	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

		if (velocityFactor.get() < 0) {
			directionFactor.current = -1
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get()

		baseX.set(baseX.get() + moveBy)
	})

	return (
		<div className='parallax'>
			<motion.div className='scroller' style={{ x }}>
				<Heading
					level={4}
					style={{
						whiteSpace: 'nowrap',
					}}
				>
					{[...Array(13)].map((_, index) => (
						<React.Fragment key={index}>
							{children} &nbsp;//&nbsp;{' '}
						</React.Fragment>
					))}

					{children}
				</Heading>
			</motion.div>
		</div>
	)
}

export { ParallaxText }
