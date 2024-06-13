import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import { fetchUsers } from '../../features/usersSlice/usersSlice'

const AdminPanel: React.FC = () => {
	const dispatch: AppDispatch = useDispatch()
	const navigate = useNavigate()
	const { users, error } = useSelector((state: RootState) => state.users)

	useEffect(() => {
		dispatch(fetchUsers())
	}, [dispatch])

	const handleUserClick = (userId: string) => {
		navigate(`/profile/${userId}`)
	}

	if (error) return <p>{error}</p>

	return (
		<div>
			<h1>Admin Panel</h1>
			<ul>
				{users.map(user => (
					<li key={user._id} onClick={() => handleUserClick(user._id)}>
						{user.firstName} {user.lastName} ({user.email})
					</li>
				))}
			</ul>
		</div>
	)
}

export default AdminPanel
