export default interface SectionProps {
	children: React.ReactNode
	style?: React.CSSProperties

	countColumns?: 3 | 4 | 6 | 8 | 10 | 12
}
