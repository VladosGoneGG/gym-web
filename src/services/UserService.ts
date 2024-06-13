import { AxiosResponse } from 'axios'
import $api from '../http'
import { IUser } from '../models/IUser'

export default class UserService {
	static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
		return $api.get<IUser[]>('/users')
	}

	static async getUserProfile(userId: string): Promise<AxiosResponse<IUser>> {
		return $api.get<IUser>(`/profile/${userId}`)
	}

	static async updateUserProfile(
		userId: string,
		updateData: Partial<IUser>
	): Promise<AxiosResponse<IUser>> {
		return $api.put<IUser>(`/profile/${userId}`, updateData)
	}
}
