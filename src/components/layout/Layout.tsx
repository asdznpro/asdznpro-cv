import styles from './Layout.module.scss'

import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
	children: React.ReactNode
	paddingTop?: 'sm' | 'lg' | undefined
	style?: React.CSSProperties
}

const Layout: React.FC<LayoutProps> = props => {
	const { children, paddingTop, style } = props

	return (
		<div className={styles.root}>
			<Header />

			<main
				className={[
					styles.main,
					styles[`padding-top-${paddingTop ? paddingTop : 'lg'}`],
				].join(' ')}
				style={style}
			>
				{children}
			</main>

			<Footer />
		</div>
	)
}

export { Layout }
