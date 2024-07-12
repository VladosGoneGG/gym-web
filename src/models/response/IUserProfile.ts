export interface UserProfile {
	id: string
	email: string
	firstName: string
	lastName: string
	subscriptionStatus: string
	subscriptionExpiry: Date
	role: 'user' | 'admin'
}

export interface UserState {
	profile: UserProfile | null
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
}
