import { EmblaOptionsType } from 'embla-carousel'
import { AutoplayType } from 'embla-carousel-autoplay'

export default interface CarouselProps
	extends React.AllHTMLAttributes<HTMLElement> {
	options?: EmblaOptionsType
	autoplay?: (autoplay: AutoplayType) => void
	dotButton?: boolean
	prevNextButtons?: boolean
}
