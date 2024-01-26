export default interface CounterProps {
	children?: React.ReactNode

	mode?: 'primary' | 'secondary' | 'tertiary' | 'outline' | undefined
	appearance?:
		| 'accent'
		| 'positive'
		| 'negative'
		| 'neutral'
		| 'contrast'
		| undefined
	size?: 'xlg' | 'lg' | 'md' | 'sm' | 'xsm' | undefined

	className?: string | undefined

	style?: React.CSSProperties
}
