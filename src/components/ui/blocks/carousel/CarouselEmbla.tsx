import * as React from 'react'

import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

import styles from './CarouselEmbla.module.scss'
import CarouselEmblaProps from './CarouselEmbla.interface'

import { usePrevNextButtons } from './usePrevNextButtons'
import { Button } from 'components/ui'

import {
	Icon28ArrowLeftOutline,
	Icon28ArrowRightOutline,
} from '@vkontakte/icons'

const CarouselEmbla: React.FC<CarouselEmblaProps> = (props) => {
	const { children, options, prevNextButtons, className, ...restProps } = props

	const optionsBase: EmblaOptionsType = {
		align: 'start',
		...options,
	}
	const [emblaRef, emblaApi] = useEmblaCarousel(optionsBase)

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi)

	return (
		<div
			{...restProps}
			className={[styles.root, className].join(' ').trim()}
			ref={emblaRef}
		>
			<div className={styles.container}>{children}</div>

			{prevNextButtons && (
				<>
					<Button
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
						// buttonSize="xsm"
						// appearance="neutral"
						before={<Icon28ArrowLeftOutline width={28} height={28} />}
						style={{ position: 'absolute', left: '-22px' }}
						rounded
					/>

					<Button
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
						// buttonSize="xsm"
						// appearance="neutral"
						before={<Icon28ArrowRightOutline width={28} height={28} />}
						style={{ position: 'absolute', right: '-22px' }}
						rounded
					/>
				</>
			)}
		</div>
	)
}

export { CarouselEmbla }
