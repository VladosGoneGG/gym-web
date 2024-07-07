import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import { fetchUsers } from '../../features/usersSlice/usersSlice'

const AdminPanel: React.FC = () => {
	const dispatch: AppDispatch = useDispatch()
	const navigate = useNavigate()
	const { users, error } = useSelector((state: RootState) => state.users)
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		dispatch(fetchUsers())
	}, [dispatch])

	const handleUserClick = (userId: string) => {
		navigate(`/profile/${userId}`)
	}

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
	}

	const filteredUsers = users.filter(
		user =>
			`${user.firstName} ${user.lastName}`
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			user.email.toLowerCase().includes(searchTerm.toLowerCase())
	)

	if (error) return <p>{error}</p>

	return (
		<div className='flex-1 p-3 text-white bg-neutral-950 text-[16px] sm:text-[20px]'>
			<h3 className='text-orange-400'>Панель Администратора</h3>
			<input
				type='text'
				placeholder='Поиск по имени или почте'
				value={searchTerm}
				onChange={handleSearchChange}
				className='mb-4 p-2 text-black'
			/>
			<div className='max-h-[500px] overflow-y-auto'>
				<ul className='flex flex-col gap-2'>
					{filteredUsers.map(user => (
						<li
							key={user._id}
							onClick={() => handleUserClick(user._id)}
							className={`cursor-pointer hover:bg-gray-700 p-2 ${
								user.subscriptionStatus === 'Неактивна' ? 'text-red-500' : ''
							}`}
						>
							{user.firstName} {user.lastName} ({user.email})
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default AdminPanel
