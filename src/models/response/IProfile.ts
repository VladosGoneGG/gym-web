export interface ProfileState {
	profile: {
		id: string
		email: string
		firstName: string
		lastName: string
		subscriptionStatus: string
		subscriptionExpiry: Date
		role: 'user' | 'admin'
	} | null
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
	profileUrl: string | null
}

export interface IProfile {
	firstName: string
	lastName: string
	subscriptionStatus: string
	subscriptionExpiry: Date
}
