import styles from './PageTitle.module.scss'
import PageTitleProps from './PageTitle.interface'

import { Fontbody, Heading } from 'components/ui'

const PageTitle: React.FC<PageTitleProps> = props => {
	const { width } = props

	return (
		<div className={styles.root}>
			<Fontbody level={2}>breadcrumbs-item / breadcrumbs-item</Fontbody>

			<Heading>Page Title</Heading>

			<Fontbody>
				Но глубокий уровень погружения требует определения и уточнения системы
				массового участия. Однозначно, некоторые особенности внутренней политики
				объединены в целые кластеры себе подобных.
			</Fontbody>
		</div>
	)
}

export { PageTitle }
