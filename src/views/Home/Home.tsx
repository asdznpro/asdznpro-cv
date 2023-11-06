import styles from './Home.module.scss'

import { Layout } from 'components/layout'
import {
	Fontbody,
	Footnote,
	Section,
	SectionGroup,
	AppLink,
	PageTitle,
	Button,
} from 'components/ui'

import { Icon28AddOutline, Icon28ChevronRightCircle } from '@vkontakte/icons'

const Home = () => {
	return (
		<Layout>
			<Section noField>
				<PageTitle />
			</Section>

			<SectionGroup gap='sm'>
				<Section>
					<div
						style={{
							display: 'flex',
							gap: 12,
						}}
					>
						<Button to='/about' after={<Icon28ChevronRightCircle />}>
							<Fontbody level={3}>Go link</Fontbody>
						</Button>

						<Button
							href='https://vk.com/im'
							target='blank'
							mode='secondary'
							after={<Icon28ChevronRightCircle />}
							disabled
						>
							<Fontbody level={3}>Go link</Fontbody>
						</Button>
					</div>

					<div
						style={{
							display: 'flex',
							gap: 12,
						}}
					>
						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 12,
								flexDirection: 'column',
							}}
						>
							<Footnote>Accent</Footnote>

							<Button
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								<Fontbody level={3} ellipsis>
									Button
								</Fontbody>
							</Button>

							<Button
								mode='secondary'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								<Fontbody level={3} ellipsis>
									Button
								</Fontbody>
							</Button>

							<Button
								mode='tertiary'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								<Fontbody level={3} ellipsis>
									Button
								</Fontbody>
							</Button>

							<Button
								mode='outline'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								<Fontbody level={3} ellipsis>
									Button
								</Fontbody>
							</Button>
						</div>

						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 12,
								flexDirection: 'column',
							}}
						>
							<Footnote>Positive</Footnote>

							<Button
								appearance='positive'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								<Fontbody level={3} ellipsis>
									Button
								</Fontbody>
							</Button>

							<Button
								appearance='positive'
								mode='secondary'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								<Fontbody level={3} ellipsis>
									Button
								</Fontbody>
							</Button>

							<Button
								appearance='positive'
								mode='tertiary'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								<Fontbody level={3} ellipsis>
									Button
								</Fontbody>
							</Button>

							<Button
								appearance='positive'
								mode='outline'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								<Fontbody level={3} ellipsis>
									Button
								</Fontbody>
							</Button>
						</div>

						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 12,
								flexDirection: 'column',
							}}
						>
							<Footnote>Negative</Footnote>

							<Button
								appearance='negative'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								<Fontbody level={3} ellipsis>
									Button
								</Fontbody>
							</Button>

							<Button
								appearance='negative'
								mode='secondary'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								<Fontbody level={3} ellipsis>
									Button
								</Fontbody>
							</Button>

							<Button
								appearance='negative'
								mode='tertiary'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								<Fontbody level={3} ellipsis>
									Button
								</Fontbody>
							</Button>

							<Button
								appearance='negative'
								mode='outline'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								<Fontbody level={3} ellipsis>
									Button
								</Fontbody>
							</Button>
						</div>

						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 12,
								flexDirection: 'column',
							}}
						>
							<Footnote>Neutral</Footnote>

							<Button
								appearance='neutral'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								<Fontbody level={3} ellipsis>
									Button
								</Fontbody>
							</Button>

							<Button
								appearance='neutral'
								mode='secondary'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								<Fontbody level={3} ellipsis>
									Button
								</Fontbody>
							</Button>

							<Button
								appearance='neutral'
								mode='tertiary'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								<Fontbody level={3} ellipsis>
									Button
								</Fontbody>
							</Button>

							<Button
								appearance='neutral'
								mode='outline'
								before={<Icon28AddOutline />}
								after={<Icon28ChevronRightCircle />}
							>
								<Fontbody level={3} ellipsis>
									Button
								</Fontbody>
							</Button>
						</div>
					</div>
				</Section>

				<Section>
					<Fontbody level={2}>
						Сложно сказать, почему представители современных социальных резервов
						освещают чрезвычайно интересные особенности картины в целом, однако
						конкретные выводы, разумеется, превращены в посмешище, хотя само их
						существование приносит несомненную пользу обществу.
					</Fontbody>

					<Fontbody level={2}>
						Идейные соображения высшего порядка, а{' '}
						<AppLink>также консультация с широким активом</AppLink> играет
						определяющее значение для форм воздействия. Господа, разбавленное
						изрядной долей эмпатии, рациональное мышление, а также свежий взгляд
						на привычные вещи — безусловно открывает новые горизонты для вывода
						текущих активов.
					</Fontbody>
				</Section>

				<Section>
					<Fontbody level={2}>
						Сложно сказать, почему представители современных социальных резервов
						освещают чрезвычайно интересные особенности картины в целом, однако
						конкретные выводы, разумеется, превращены в посмешище, хотя само их
						существование приносит несомненную пользу обществу. Идейные
						соображения высшего порядка, а{' '}
						<AppLink>также консультация с широким активом</AppLink> играет
						определяющее значение для форм воздействия. Господа, разбавленное
						изрядной долей эмпатии, рациональное мышление, а также свежий взгляд
						на привычные вещи — безусловно открывает новые горизонты для вывода
						текущих активов.
					</Fontbody>
				</Section>

				<Section>
					<Fontbody level={2}>
						Сложно сказать, почему представители современных социальных резервов
						освещают чрезвычайно интересные особенности картины в целом, однако
						конкретные выводы, разумеется, превращены в посмешище, хотя само их
						существование приносит несомненную пользу обществу.
					</Fontbody>
				</Section>
			</SectionGroup>
		</Layout>
	)
}

export { Home }
