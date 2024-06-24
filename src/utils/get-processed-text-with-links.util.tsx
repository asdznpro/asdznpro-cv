import { AppLink } from 'components/ui'

type ProcessedPart = string | JSX.Element

const getProcessedTextWithLinks = (text: string): ProcessedPart[] => {
	const linkPattern = /\{\{([^|]+)\|([^|]+)\|([^}]+)\}\}/g
	const parts = text.split(linkPattern)

	return parts
		.map((part, index) => {
			if (index % 4 === 0) {
				return part
			}

			if (index % 4 === 1) {
				const url = parts[index + 1]
				const target = parts[index + 2]

				return (
					<AppLink href={url} target={target} key={index}>
						{part}
					</AppLink>
				)
			}
			return null
		})
		.filter((part): part is ProcessedPart => part !== null)
}

export { getProcessedTextWithLinks }
