import styles from './Header.module.scss'

import { CvLogo } from 'assets/images/svg'
import { AppLink } from 'components/ui'

const Header: React.FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<div className={styles['header-part']}>
					<AppLink to='/' flex>
						<CvLogo />
					</AppLink>
				</div>

				<div className={styles['header-part']}>
					<h3>Header Navigation</h3>
				</div>
			</div>
		</div>
	)
}

export { Header }
