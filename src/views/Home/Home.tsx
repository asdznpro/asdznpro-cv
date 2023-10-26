import styles from './Home.module.scss'

import { Layout } from 'components/layout'
import { Section, Spinner } from 'components/ui'

const Home = () => {
	return (
		<Layout>
			<Section>
				<div
					className={styles.root}
					style={{ display: 'flex', flexDirection: 'column', gap: 32 }}
				>
					<Spinner width={44} height={44} style={{ margin: '0 auto' }} />

					<h1>Home Page Font Check</h1>
					<h2>Home Page Font Check</h2>
					<h3>Home Page Font Check</h3>

					<Spinner width={44} height={44} style={{ margin: '0 auto' }} />

					<h4>Home Page Font Check</h4>
					<h5>Home Page Font Check</h5>
					<h6>Home Page Font Check</h6>
				</div>
			</Section>
		</Layout>
	)
}

export { Home }
