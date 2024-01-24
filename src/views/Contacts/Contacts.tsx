import { useDocumentTitle } from 'hooks'

import styles from './Contacts.module.scss'

import { Layout } from 'components/layout'
import {
	Section,
	PageTitle,
	Breadcrumbs,
	PageNavigation,
	Box,
} from 'components/ui'
import { CvLinkItem } from 'components/shared'

const Contacts = () => {
	useDocumentTitle('Контакты — Андрей Сухушин // Curriculum Vitae')

	const links = [
		{
			name: 'VK',
			href: 'https://vk.com/asdznpro',
			image:
				'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/icons/products/logo_vk_28.svg',
		},
		{
			name: 'Telegram',
			href: 'https://t.me/asdznpro',
			image:
				'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/icons/products/symbol_telegram_28.svg',
		},
		{
			name: 'VK Mail',
			href: 'mailto:asdznpro@vk.com',
			image:
				'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/icons/products/logo_vk-mail_28.svg',
		},
		{
			name: 'Yandex',
			href: 'https://yandex.ru/search/?text=%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9+%D0%A1%D1%83%D1%85%D1%83%D1%88%D0%B8%D0%BD+%D0%93%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B5%D1%80&lr=67',
			image:
				'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/icons/products/logo_yandex_28.svg',
		},
		{
			name: 'GitHub',
			href: 'https://github.com/asdzn',
			image:
				'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/icons/products/logo_github_28.svg',
		},
		{
			name: 'GitLab',
			href: 'https://gitlab.com/asdzn',
			image:
				'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/icons/products/logo_gitlab_28.svg',
		},
		{
			name: 'HeadHunter',
			href: 'https://hh.ru/applicant/resumes/view?resume=1492c513ff09411f580039ed1f5150736b4d4e',
			image:
				'https://asdznpro-cv.hb.ru-msk.vkcs.cloud/assets/icons/products/logo_headhunter_28.svg',
		},
	]

	return (
		<Layout>
			<Section>
				<Box>
					<PageTitle
						title='Контакты'
						breadcrumbs={<Breadcrumbs customLabels={['Контакты']} />}
					/>
				</Box>
			</Section>

			<Section>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: 'clamp(8px, 1.2vw, 20px)',
					}}
				>
					{links.map((link, index) => (
						<CvLinkItem
							key={index}
							href={link.href}
							target='blank'
							backgroundColor={link.name.toLowerCase().replace(/\s+/g, '-')}
						>
							<img src={link.image} alt={link.name} width={72} height={72} />
						</CvLinkItem>
					))}
				</div>

				<PageNavigation>PageNavigation</PageNavigation>
			</Section>
		</Layout>
	)
}

export { Contacts }
