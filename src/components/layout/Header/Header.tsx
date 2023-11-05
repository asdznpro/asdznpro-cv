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

				<div
					className={styles['header-part']}
					style={{ display: 'flex', gap: 12 }}
				>
					<AppLink to='/about'>
						<h5>#обо_мне</h5>
					</AppLink>
					<AppLink to='/experience'>
						<h5>#опыт_работы</h5>
					</AppLink>
					<AppLink to='/portfolio'>
						<h5>#портфолио</h5>
					</AppLink>
					<AppLink to='/hard-skills'>
						<h5>#проф_навыки</h5>
					</AppLink>
					<AppLink to='/education'>
						<h5>#образование</h5>
					</AppLink>
					<AppLink to='/contacts'>
						<h5>#контакты</h5>
					</AppLink>
				</div>
			</div>
		</div>
	)
}

export { Header }
