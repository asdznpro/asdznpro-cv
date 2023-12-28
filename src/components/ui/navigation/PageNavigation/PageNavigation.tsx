import styles from './PageNavigation.module.scss'
import PageNavigationProps from './PageNavigation.interface'

import { Button, Footnote, Fontbody } from 'components/ui'

import {
	Icon28ArrowLeftOutline,
	Icon28ArrowRightOutline,
} from '@vkontakte/icons'

const PageNavigation: React.FC<PageNavigationProps> = props => {
	const { children } = props

	return (
		<div className={[styles.root].join(' ')}>
			<Button
				size='lg'
				before={<Icon28ArrowLeftOutline width={36} height={36} />}
				disabled
				stretched
			/>

			<div className={styles.route}>
				<Footnote ellipsis secondary>
					Предыдущий раздел
				</Footnote>
				<Fontbody ellipsis>previous-page-title</Fontbody>
			</div>

			<div className={styles.route} style={{ textAlign: 'end' }}>
				<Footnote ellipsis secondary>
					Следующий раздел
				</Footnote>
				<Fontbody ellipsis>next-page-title</Fontbody>
			</div>

			<Button
				size='lg'
				before={<Icon28ArrowRightOutline width={36} height={36} />}
				disabled
				stretched
			/>
		</div>
	)
}

export { PageNavigation }
