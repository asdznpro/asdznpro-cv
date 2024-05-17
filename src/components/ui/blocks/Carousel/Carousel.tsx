import OriginalCarousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import styles from './Carousel.module.scss'
import CarouselProps from './Carousel.interface'

import { CarouselEmbla } from './CarouselEmbla'

import { Button } from 'components/ui'

import {
	Icon28ArrowLeftOutline,
	Icon28ArrowRightOutline,
} from '@vkontakte/icons'

const Carousel = (props: CarouselProps) => {
	const { children, className, ...restProps } = props

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	}

	const CustomDotList = ({ ...rest }) => {
		const { onClick, index, active } = rest

		return (
			<button
				data-index={index}
				aria-label={'Go to slide ' + (index + 1)}
				className={[
					styles.carouselDotItem,
					active ? styles.carouselDotItemActive : '',
				]
					.join(' ')
					.trim()}
				onClick={() => onClick()}
			></button>
		)
	}

	const CustomArrow = ({ ...rest }) => {
		const { onClick, before, style } = rest

		return (
			<Button
				buttonSize="md"
				onClick={onClick}
				before={before}
				style={{ position: 'absolute', ...style }}
				rounded
			/>
		)
	}

	return (
		<div {...restProps} className={[styles.root, className].join(' ').trim()}>
			<OriginalCarousel
				responsive={responsive}
				swipeable
				draggable
				focusOnSelect
				// infinite
				autoPlay
				autoPlaySpeed={3600}
				rewind
				rewindWithAnimation
				// additionalTransfrom={-4}
				showDots
				containerClass={styles.carouselContainer}
				sliderClass={styles.carouselSlider}
				itemClass={styles.carouselItem}
				removeArrowOnDeviceType={['tablet', 'mobile']}
				customLeftArrow={
					<CustomArrow
						before={<Icon28ArrowLeftOutline width={32} height={32} />}
						style={{ left: '-28px' }}
					/>
				}
				customRightArrow={
					<CustomArrow
						before={<Icon28ArrowRightOutline width={32} height={32} />}
						style={{ right: '-28px' }}
					/>
				}
				customDot={<CustomDotList />}
				dotListClass={styles.carouselDotList}
			>
				{children}
			</OriginalCarousel>
		</div>
	)
}

Carousel.Embla = CarouselEmbla
Carousel.Embla.displayName = 'Carousel.Embla'

Carousel.displayName = 'Carousel'

export { Carousel }
