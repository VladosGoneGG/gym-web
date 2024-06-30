export interface IUser {
	// id: any
	email: string
	_id: string
	isActivated: boolean
	firstName: string
	lastName: string
	subscriptionStatus: string
	subscriptionExpiry: Date
	role: string
}
