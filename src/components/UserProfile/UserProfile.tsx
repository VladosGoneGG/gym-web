import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { checkAuth } from '../../features/authSlice/authSlice'
import { fetchProfile } from '../../features/profileSlice/profileSlice'

const UserProfile: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { profile, status, error } = useSelector(
		(state: RootState) => state.profile
	)

	const { user } = useSelector((state: RootState) => state.auth)

	useEffect(() => {
		dispatch(fetchProfile())
	}, [dispatch])

	useEffect(() => {
		dispatch(checkAuth())
	}, [dispatch])

	if (status === 'loading') {
		return <div className='text-center text-yellow-500'>Загрузка...</div>
	}

	if (error) {
		return <div className='text-center text-red-500'>Ошибка: {error}</div>
	}

	return (
		<div className='max-w-3xl mx-auto p-6 bg-gray-900 text-yellow-500 rounded-lg shadow-md'>
			<h1 className='text-3xl font-bold mb-6'>
				Профиль пользователя {user?.role}
			</h1>
			{profile && (
				<div className='space-y-4'>
					<p>
						<span className='font-semibold'>Email:</span> {profile.email}
					</p>
					<p>
						<span className='font-semibold'>Имя:</span> {profile.firstName}
					</p>
					<p>
						<span className='font-semibold'>Фамилия:</span> {profile.lastName}
					</p>
					<p>
						<span className='font-semibold'>Статус абонемента:</span>{' '}
						{profile.subscriptionStatus}
					</p>
					<p>
						<span className='font-semibold'>Дата окончания абонемента:</span>{' '}
						{new Date(profile.subscriptionExpiry).toLocaleDateString()}
					</p>
				</div>
			)}
		</div>
	)
}

export default UserProfile
