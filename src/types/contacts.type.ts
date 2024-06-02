export interface ContactsType {
	data: Contacts[]
	displayName: string
	pathname: string
	id: string
}

interface Contacts {
	name: string
	href: string
	image: string
}
