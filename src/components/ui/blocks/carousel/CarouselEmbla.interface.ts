import { EmblaOptionsType } from 'embla-carousel'
import { AutoplayType } from 'embla-carousel-autoplay'

export default interface CarouselEmblaProps
	extends React.AllHTMLAttributes<HTMLElement> {
	options?: EmblaOptionsType
	autoplay?: (autoplay: AutoplayType) => void
	prevNextButtons?: false
}
