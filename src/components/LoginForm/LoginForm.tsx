import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import { checkAuth, login, logout } from '../../features/authSlice/authSlice'

const LoginForm: React.FC = () => {
	const dispatch: AppDispatch = useDispatch()
	const { isAuth, loading, user } = useSelector(
		(state: RootState) => state.auth
	)

	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	useEffect(() => {
		dispatch(checkAuth())
	}, [dispatch])

	const handleLogin = () => {
		dispatch(login({ email, password }))
	}

	const handleLogout = () => {
		dispatch(logout())
	}

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
			{loading && <p className='text-blue-500'>Loading...</p>}
			{isAuth ? (
				<div className='bg-white p-6 rounded shadow-md w-full max-w-xs text-center'>
					<button
						onClick={handleLogout}
						className='w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition'
					>
						<h3>{user?.email} Пользователь в сети</h3>
						Logout
					</button>
				</div>
			) : (
				<div className='bg-white p-6 rounded shadow-md w-full max-w-xs'>
					<div className='mb-4'>
						<input
							type='email'
							placeholder='Email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							className='w-full p-2 border border-gray-300 rounded mt-1'
						/>
					</div>
					<div className='mb-4'>
						<input
							type='password'
							placeholder='Password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							className='w-full p-2 border border-gray-300 rounded mt-1'
						/>
					</div>
					<button
						onClick={handleLogin}
						className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition mb-2'
					>
						Login
					</button>
					<Link
						to={'/registration'}
						className='w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition'
					>
						Register
					</Link>
					<Link
						to={'/forgot-password'}
						className='w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-green-600 transition'
					>
						Забыл пароль
					</Link>
				</div>
			)}
		</div>
	)
}

export default LoginForm
