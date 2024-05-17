import { EmblaOptionsType } from 'embla-carousel'

export default interface CarouselEmblaProps
	extends React.AllHTMLAttributes<HTMLElement> {
	options?: EmblaOptionsType
	prevNextButtons?: false
}
