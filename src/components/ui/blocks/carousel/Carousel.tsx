import * as React from 'react'

import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import styles from './Carousel.module.scss'
import CarouselProps from './Carousel.interface'

import { DotButton, useDotButton } from './useDotButton'
import { usePrevNextButtons } from './usePrevNextButtons'
import { Button } from 'components/ui'

import {
	Icon28ArrowLeftOutline,
	Icon28ArrowRightOutline,
} from '@vkontakte/icons'

const Carousel = (props: CarouselProps) => {
	const {
		children,
		options,
		autoplay,
		dotButton = false,
		prevNextButtons = false,
		className,
		...restProps
	} = props

	const autoplayOptions = {
		delay: 3200,
		stopOnInteraction: false,
		stopOnMouseEnter: true,
	}

	const optionsBase: EmblaOptionsType = {
		...options,
	}

	const [emblaRef, emblaApi] = useEmblaCarousel(optionsBase, [
		Autoplay(autoplayOptions),
	])

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi)

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi)

	return (
		<div
			{...restProps}
			ref={emblaRef}
			className={[styles.root, className].join(' ').trim()}
		>
			<div className={styles.container}>{children}</div>

			{dotButton && (
				<div className={styles.controls}>
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={[
								styles.dotItem,
								index === selectedIndex ? styles.dotItemActive : '',
							].join(' ')}
						/>
					))}
				</div>
			)}

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

Carousel.displayName = 'Carousel'

export { Carousel }
