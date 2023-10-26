import styles from './Layout.module.scss'

import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
	children: React.ReactNode
	style?: React.CSSProperties
}

const Layout: React.FC<LayoutProps> = ({ children, style }) => {
	return (
		<div className={styles.root}>
			<Header />
            
			<main className={styles.main} style={style}>
				{children}
			</main>
            
			<Footer />

			<div id='portal'></div>
		</div>
	)
}

export { Layout }
