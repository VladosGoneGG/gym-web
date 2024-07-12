import QRCode from 'qrcode.react'
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
		dispatch(checkAuth())
	}, [dispatch])

	if (status === 'loading') {
		return <div className='flex-1 text-center text-orange-400'>Загрузка...</div>
	}

	if (error) {
		return (
			<div className='flex-1 text-center text-red-500'>Ошибка: {error}</div>
		)
	}

	return (
		<div className='flex-1 bg-neutral-950 p-6 text-white'>
			<div className='flex flex-col gap-10 items-center'>
				{user?.role === 'admin' && (
					<h3 className='text-3xl font-bold mb-6'>
						Профиль пользователя{' '}
						<span className='text-orange-400'>{user.role}</span>
					</h3>
				)}
				{profile && (
					<div className='flex flex-col text-[16px] sm:text-[24px]'>
						<p>
							<span className='font-semibold text-orange-400'>Email:</span>{' '}
							{profile.email}
						</p>
						<p>
							<span className='font-semibold text-orange-400'>Имя:</span>{' '}
							{profile.firstName}
						</p>
						<p>
							<span className='font-semibold text-orange-400'>Фамилия:</span>{' '}
							{profile.lastName}
						</p>
						<p>
							<span className='font-semibold text-orange-400'>
								Статус абонемента:
							</span>{' '}
							{profile.subscriptionStatus}
						</p>
						<p>
							<span className='font-semibold text-orange-400'>
								Дата окончания абонемента:
							</span>{' '}
							{profile.subscriptionExpiry
								? new Date(profile.subscriptionExpiry).toLocaleDateString()
								: ''}
						</p>
						<div className='flex justify-center mt-6'>
							{
								<QRCode
									value={`${window.location.origin}/profile/${user?._id}`}
								/>
							}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default UserProfile
