import * as React from 'react'

import styles from './Layout.module.scss'

import { Header, Footer } from 'components/layout'
import { AppRouter } from 'components/router'
import { Box, Heading } from 'components/ui'

import { ParallaxText } from 'views/home/ParallaxText'

interface LayoutProps {
	style?: React.CSSProperties
}

const Layout: React.FC<LayoutProps> = (props) => {
	const { style } = props

	return (
		<div className={styles.root}>
			<div className={styles.warning}>
				<Box YPadding>
					<ParallaxText baseVelocity={6}>
						<Heading
							level={4}
							style={{
								whiteSpace: 'nowrap',
							}}
							className="ui-text-uppercase"
						>
							{[...Array(36)].map((_, index) => (
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
