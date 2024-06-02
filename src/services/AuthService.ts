import { AxiosResponse } from 'axios'
import $api from '../http'
import { IFormInput } from '../models/IFormInput'
import { AuthResponse } from '../models/response/AuthResponse'

export default class AuthService {
	static async login(
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/login', { email, password })
	}
	static async registration(
		data: IFormInput
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/registration', data)
	}
	static async logout(): Promise<void> {
		return $api.post('/logout')
	}

	static async checkAuth() {
		return $api.get(`/refresh`)
	}
}
