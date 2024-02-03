import styles from './BriefInfoBox.module.scss'

interface BriefInfoBoxProps {
	children: React.ReactNode
}

const BriefInfoBox: React.FC<BriefInfoBoxProps> = props => {
	const { children } = props

	return <div className={styles.root}>{children}</div>
}

export { BriefInfoBox }
