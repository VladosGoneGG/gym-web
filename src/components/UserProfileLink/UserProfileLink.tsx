import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import {
	fetchUserProfile,
	updateUserProfile,
} from '../../features/userProfileSlice/userProfileSlice'
import { IUser } from '../../models/IUser'

interface UpdateUserProfileParams {
	userId: string
	updateData: Partial<IUser>
}

const UserProfileLink: React.FC = () => {
	const { id } = useParams<{ id: string }>()
	const dispatch: AppDispatch = useDispatch()
	const { user, loading, error } = useSelector(
		(state: RootState) => state.userProfile
	)
	const [formData, setFormData] = useState<Partial<IUser>>({})

	useEffect(() => {
		if (id) {
			dispatch(fetchUserProfile(id))
		}
	}, [id, dispatch])

	useEffect(() => {
		if (user) {
			setFormData(user)
			checkSubscriptionStatus(user.subscriptionExpiry)
		}
	}, [user])

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value, type, checked } = e.target as HTMLInputElement &
			HTMLSelectElement
		setFormData(prevData => ({
			...prevData,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}

	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: new Date(value),
		}))
		if (name === 'subscriptionExpiry') {
			checkSubscriptionStatus(new Date(value))
		}
	}

	const checkSubscriptionStatus = (expiryDate: Date) => {
		const isActive = new Date(expiryDate) > new Date()
		setFormData(prevData => ({
			...prevData,
			isActivated: isActive,
		}))
	}

	const handleUpdateProfile = () => {
		if (id) {
			const params: UpdateUserProfileParams = {
				userId: id,
				updateData: formData,
			}
			dispatch(updateUserProfile(params))
		}
	}

	if (loading) return <p>Loading...</p>
	if (error) return <p>{error}</p>

	return (
		<div className='container mx-auto p-4'>
			{user ? (
				<div className='max-w-md mx-auto bg-white p-6 rounded-md shadow-md'>
					<h1 className='text-2xl font-semibold mb-4'>
						{user.firstName} {user.lastName}
					</h1>
					<p>Email: {user.email}</p>
					<p>Subscription Status: {user.subscriptionStatus}</p>
					<p>
						Subscription Expiry:{' '}
						{new Date(user.subscriptionExpiry).toLocaleDateString()}
					</p>
					<input
						type='text'
						name='firstName'
						value={formData.firstName || ''}
						onChange={handleInputChange}
						className='w-full p-2 border border-gray-300 rounded mt-2'
					/>
					<input
						type='text'
						name='lastName'
						value={formData.lastName || ''}
						onChange={handleInputChange}
						className='w-full p-2 border border-gray-300 rounded mt-2'
					/>
					<input
						type='email'
						name='email'
						value={formData.email || ''}
						onChange={handleInputChange}
						className='w-full p-2 border border-gray-300 rounded mt-2'
					/>
					<div className='mt-4'>
						<label className='inline-flex items-center'>
							<input
								type='checkbox'
								name='isActivated'
								checked={formData.isActivated || false}
								onChange={handleInputChange}
								className='form-checkbox'
							/>
							<span className='ml-2'>Активна</span>
						</label>
					</div>
					<div className='mt-4'>
						<label>Subscription Status</label>
						<select
							name='subscriptionStatus'
							value={formData.subscriptionStatus || ''}
							onChange={handleInputChange}
							className='w-full p-2 border border-gray-300 rounded mt-2'
						>
							<option value='active'>Активна</option>
							<option value='inactive'>Неактивна</option>
						</select>
					</div>
					<div className='mt-4'>
						<label>Subscription Expiry</label>
						<input
							type='date'
							name='subscriptionExpiry'
							value={
								formData.subscriptionExpiry
									? new Date(formData.subscriptionExpiry)
											.toISOString()
											.split('T')[0]
									: ''
							}
							onChange={handleDateChange}
							className='w-full p-2 border border-gray-300 rounded mt-2'
						/>
					</div>
					<button
						onClick={handleUpdateProfile}
						className='w-full bg-blue-500 text-white p-2 rounded mt-4'
					>
						Обновить профиль
					</button>
				</div>
			) : (
				<p>Пользователь не найден</p>
			)}
		</div>
	)
}

export default UserProfileLink
