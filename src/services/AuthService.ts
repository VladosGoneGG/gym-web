import { AxiosResponse } from 'axios'
import $api from '../http'
import { IFormInput } from '../models/IFormInput'
import { IUser } from '../models/IUser'
import { AuthResponse } from '../models/response/AuthResponse'
import { IProfile } from '../models/response/IProfile'

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

	static async getProfile() {
		return $api.get('/profile')
	}

	static updateProfile(data: IProfile): Promise<AxiosResponse> {
		return $api.put('/profile', data)
	}

	static async getAllUsers(): Promise<AxiosResponse<IUser[]>> {
		return $api.get<IUser[]>('/admin/users')
	}

	static async updateUserProfile(
		id: string,
		data: Partial<IUser>
	): Promise<AxiosResponse<IUser>> {
		return $api.put<IUser>(`/admin/user/${id}`, data)
	}
}
