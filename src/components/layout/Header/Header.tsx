import { useDynamicAlignment } from 'hooks'

import styles from './Header.module.scss'

import { AppLink, CvLogo, CvLogoAbbreviated, CvLogoIcon } from 'components/ui'

const Header: React.FC = () => {
	const { screenWidth } = useDynamicAlignment()

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<div className={styles['header-part']}>
					<AppLink to='/' flex>
						{/* {screenWidth >= 880 ? (
							<CvLogo />
						) : screenWidth >= 528 ? (
							<CvLogoAbbreviated />
						) : (
							<CvLogoIcon />
						)} */}

						{screenWidth >= 880 ? <CvLogo /> : <CvLogoAbbreviated />}
					</AppLink>
				</div>

				<div className={styles['header-part']}>
					<h4>Navigation</h4>
				</div>
			</div>
		</div>
	)
}

export { Header }
