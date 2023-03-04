import { Link } from 'react-router-dom'

import { Button } from '../Button'
import styles from './OverlayButton.module.scss'

// @ts-ignore
import CvPdf from '../../static/cv.pdf'

function OverlayButton() {
	return (
		<>
			<Link to={CvPdf} target='_blank' className={styles.root}>
				<svg
					width='46'
					height='54'
					viewBox='0 0 46 54'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g clipPath='url(#clip0_1309_27416-411038)'>
						<path
							d='M0 0H45.999V54H0V0ZM31.2718 0L45.999 14.7273V0H31.2718Z'
							fill='#FF3B3B'
						/>
						<path
							d='M45.999 14.7273H36.1808C34.8788 14.7273 33.6302 14.2101 32.7096 13.2894C31.7889 12.3688 31.2717 11.1202 31.2717 9.81818V0L45.999 14.7273Z'
							fill='black'
							fillOpacity='0.3'
						/>
						<path
							d='M11.1844 33V29.583H12.9319C15.3816 29.583 17.1291 27.9915 17.1291 25.7915C17.1291 23.5603 15.3816 22 12.9319 22H9V33H11.1844ZM11.1844 23.9504H12.9319C14.1645 23.9504 14.8979 24.6993 14.8979 25.7915C14.8979 26.8837 14.1645 27.6326 12.9319 27.6326H11.1844V23.9504Z'
							fill='white'
						/>
						<path
							d='M22.937 33C26.2604 33 28.6632 30.722 28.6632 27.4922C28.6632 24.278 26.2604 22 22.937 22H18.5994V33H22.937ZM20.7838 23.9972H22.937C24.9654 23.9972 26.3852 25.4326 26.3852 27.4922C26.3852 29.5674 24.9654 31.0028 22.937 31.0028H20.7838V23.9972Z'
							fill='white'
						/>
						<path
							d='M32.5469 33V28.7248H37.0249V26.7277H32.5469V23.9972H37.5242V22H30.3625V33H32.5469Z'
							fill='white'
						/>
					</g>
					<defs>
						<clipPath id='clip0_1309_27416-411038'>
							<rect width='46' height='54' fill='white' />
						</clipPath>
					</defs>
				</svg>
				<Button text='Резюме в PDF' state='' />
			</Link>
		</>
	)
}

export { OverlayButton }
