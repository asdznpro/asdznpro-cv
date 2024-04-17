import * as React from 'react'

import styles from './Layout.module.scss'

import { Header, Footer } from 'components/layout'
import { AppRouter } from 'components/router'
import { ParallaxText } from 'views/Home/ParallaxText'
import { Box, Heading, Tile } from 'components/ui'

interface LayoutProps {
	style?: React.CSSProperties
}

const Layout: React.FC<LayoutProps> = props => {
	const { style } = props

	return (
		<div className={styles.root}>
			<div className={styles.warning}>
				<Box YPadding>
					<ParallaxText baseVelocity={8}>
						<Heading
							level={4}
							style={{
								whiteSpace: 'nowrap',
							}}
						>
							{[...Array(20)].map((_, index) => (
								<React.Fragment key={index}>
									In development &nbsp;//&nbsp;{' '}
								</React.Fragment>
							))}
						</Heading>
					</ParallaxText>
				</Box>
			</div>

			<Header />

			<main className={styles.main} style={style}>
				<AppRouter />
			</main>

			<Footer />
		</div>
	)
}

export { Layout }
