import React from 'react'

import styles from './TemplateName.module.scss'
import TemplateNameProps from './TemplateName.interface'

const TemplateName: React.FC<TemplateNameProps> = props => {
	const { children, className, ...restProps } = props

	return (
		<div {...restProps} className={[styles.root, className].join(' ').trim()}>
			TemplateName Component
		</div>
	)
}

export { TemplateName }
