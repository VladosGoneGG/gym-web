import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import {
	fetchUsers,
	updateUserProfile,
} from '../../features/usersSlice/usersSlice'
import { IUser } from '../../models/IUser'

const EditUserProfile: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { id } = useParams<{ id: string }>()
	const { users } = useSelector((state: RootState) => state.users)
	const user = users.find(user => user._id === id)
	const [formData, setFormData] = useState<Partial<IUser>>({
		email: '',
		firstName: '',
		lastName: '',
		role: 'user',
	})

	useEffect(() => {
		if (!user) {
			dispatch(fetchUsers())
		} else {
			setFormData({
				email: user.email,
				firstName: user.firstName,
				lastName: user.lastName,
				role: user.role,
			})
		}
	}, [user, dispatch])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (id) {
			dispatch(updateUserProfile({ id, data: formData }))
		}
	}

	return (
		<div className='max-w-3xl mx-auto p-6 bg-gray-900 text-yellow-500 rounded-lg shadow-md'>
			<h1 className='text-3xl font-bold mb-6'>Редактирование пользователя</h1>
			{user ? (
				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label className='block text-sm font-semibold mb-2' htmlFor='email'>
							Email
						</label>
						<input
							className='w-full px-3 py-2 text-gray-900 rounded'
							id='email'
							name='email'
							type='email'
							value={formData.email}
							onChange={handleChange}
						/>
					</div>
					<div className='mb-4'>
						<label
							className='block text-sm font-semibold mb-2'
							htmlFor='firstName'
						>
							Имя
						</label>
						<input
							className='w-full px-3 py-2 text-gray-900 rounded'
							id='firstName'
							name='firstName'
							type='text'
							value={formData.firstName}
							onChange={handleChange}
						/>
					</div>
					<div className='mb-4'>
						<label
							className='block text-sm font-semibold mb-2'
							htmlFor='lastName'
						>
							Фамилия
						</label>
						<input
							className='w-full px-3 py-2 text-gray-900 rounded'
							id='lastName'
							name='lastName'
							type='text'
							value={formData.lastName}
							onChange={handleChange}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-sm font-semibold mb-2' htmlFor='role'>
							Роль
						</label>
						<input
							className='w-full px-3 py-2 text-gray-900 rounded'
							id='role'
							name='role'
							type='text'
							value={formData.role}
							onChange={handleChange}
						/>
					</div>
					<button
						type='submit'
						className='px-4 py-2 bg-yellow-500 text-gray-900 rounded font-semibold hover:bg-yellow-600'
					>
						Обновить
					</button>
				</form>
			) : (
				<p>Загрузка данных пользователя...</p>
			)}
		</div>
	)
}

export default EditUserProfile
