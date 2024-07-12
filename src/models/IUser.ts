export interface IUser {
	email: string
	id: string
	_id: string
	isActivated: boolean
	firstName: string
	lastName: string
	subscriptionStatus: string
	subscriptionExpiry: Date
	role: 'user' | 'admin'
}
