export default interface ContactsModel {
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
