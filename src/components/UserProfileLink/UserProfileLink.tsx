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

	if (error) return <p>{error}</p>

	return (
		<div className='flex-1 bg-neutral-950 p-4 text-[16px] md:text-[24px]'>
			{user ? (
				<div className='flex justify-start sm:justify-center'>
					<div className='flex flex-col w-auto sm:w-[50%] text-white justify-start sm:justify-center p-6'>
						<h3 className='text-orange-400 mb-4'>
							{user.firstName} {user.lastName}
						</h3>
						<p className='text-orange-400'>
							Email: <span className='text-white'>{user.email}</span>
						</p>
						<p className='text-orange-400'>
							Статус подписки:{' '}
							<span className='text-white'>{user.subscriptionStatus}</span>
						</p>
						<p className='text-orange-400'>
							Окончание подписки:
							<span className='text-white'>
								{' '}
								{user.subscriptionExpiry
									? new Date(user.subscriptionExpiry).toLocaleDateString()
									: ''}
							</span>
						</p>
						<input
							type='text'
							name='firstName'
							value={formData.firstName || ''}
							onChange={handleInputChange}
							className='w-full p-2 border text-black border-gray-300 rounded mt-2'
						/>
						<input
							type='text'
							name='lastName'
							value={formData.lastName || ''}
							onChange={handleInputChange}
							className='w-full p-2 border text-black border-gray-300 rounded mt-2'
						/>
						<input
							type='email'
							name='email'
							value={formData.email || ''}
							onChange={handleInputChange}
							className='w-full p-2 border text-black border-gray-300 rounded mt-2'
						/>

						<div className='mt-4'>
							<label className='text-orange-400'>Статус подписки:</label>
							<select
								name='subscriptionStatus'
								value={formData.subscriptionStatus || ''}
								onChange={handleInputChange}
								className='w-full p-2 border text-black border-gray-300 rounded mt-2'
							>
								<option value='Активна'>Активна</option>
								<option value='Неактивна'>Неактивна</option>
							</select>
						</div>
						<div className='mt-4'>
							<label className='text-orange-400'>Подписка активна до:</label>
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
								className='w-full p-2 border text-black border-gray-300 rounded mt-2'
							/>
						</div>
						<button
							onClick={handleUpdateProfile}
							className='w-full bg-orange-500 hover:bg-orange-500/50 text-white  p-2 rounded mt-4'
						>
							{loading ? <p>Обновление...</p> : <p>Обновить профиль</p>}
						</button>
					</div>
				</div>
			) : (
				<p className='text-red-600'>Пользователь не найден</p>
			)}
		</div>
	)
}

export default UserProfileLink
