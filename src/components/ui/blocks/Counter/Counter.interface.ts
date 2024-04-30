export default interface CounterProps
	extends React.AllHTMLAttributes<HTMLElement> {
	appearance?:
		| 'accent'
		| 'positive'
		| 'negative'
		| 'neutral'
		| 'contrast'
		| undefined

	counterSize?: 'xlg' | 'lg' | 'md' | 'sm' | 'xsm' | undefined
}
