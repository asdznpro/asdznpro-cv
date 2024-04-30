import * as React from 'react'

import { useState } from 'react'
import { useDynamicAlignment } from 'hooks'

import styles from './PortfolioItem.module.scss'
import PortfolioItemProps from './PortfolioItem.interface'

import {
	AppLink,
	Fontbody,
	Heading,
	RouterLink,
	Spinner,
	CustomCursor,
} from 'components/ui'

import { Icon28PictureOutline } from '@vkontakte/icons'

const PortfolioItem: React.FC<PortfolioItemProps> = props => {
	const { name, to, tags, date, award, src, ...restProps } = props

	const { screenWidth } = useDynamicAlignment()
	const [hasError, setHasError] = useState(false)
	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	return (
		<div {...restProps} className={styles.root}>
			{screenWidth >= 768 && isHovered && <CustomCursor />}

			{to && (
				<RouterLink
					to={to}
					className={styles.link}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				/>
			)}

			<div className={styles.preview}>
				{award && (
					<AppLink href={award.href} target='_blank' className={styles.award}>
						{!hasError ? (
							<img
								src={award.image}
								alt={award.name}
								onError={() => setHasError(true)}
							/>
						) : (
							<div className={styles['award-placeholder']}>
								<Spinner width={40} height={40} />
							</div>
						)}
					</AppLink>
				)}

				<div className={styles.image}>
					{!hasError && src ? (
						<img src={src} alt={name} onError={() => setHasError(true)} />
					) : (
						<Icon28PictureOutline width={40} height={40} />
					)}
				</div>
			</div>

			<div
				className={[styles.info, screenWidth <= 768 && styles['x-padding']]
					.join(' ')
					.trim()}
			>
				<span className={styles.caption}>
					<Fontbody level={3} className='ui-text-truncate ui-text-secondary'>
						{tags}
					</Fontbody>

					<Fontbody
						level={3}
						className='ui-text-secondary'
						style={{ whiteSpace: 'nowrap' }}
					>
						{date}
					</Fontbody>
				</span>

				<Heading
					className={[styles['project-name'], 'ui-text-uppercase'].join(' ')}
					level={4}
				>
					{name}
				</Heading>
			</div>
		</div>
	)
}

export { PortfolioItem }