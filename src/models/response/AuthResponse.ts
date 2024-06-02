import { IUser } from '../IUser'

export interface AuthResponse {
	accessToken: string
	refreshToken: string
	user: IUser
}

export interface AuthState {
	user: IUser | null
	isAuth: boolean
	loading: boolean
	error: string | null
}
