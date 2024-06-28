import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import { checkAuth, login } from '../../features/authSlice/authSlice'

const LoginForm: React.FC = () => {
	const dispatch: AppDispatch = useDispatch()
	const navigate = useNavigate()
	const { isAuth, loading, user } = useSelector(
		(state: RootState) => state.auth
	)

	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	useEffect(() => {
		dispatch(checkAuth())
	}, [dispatch])

	useEffect(() => {
		if (isAuth && user) {
			navigate(`/profile/`)
		}
	}, [isAuth, user, navigate])

	const handleLogin = () => {
		dispatch(login({ email, password }))
	}

	return (
		<div className='flex justify-center flex-1 flex-col bg-fon-img p-4'>
			<div className='flex justify-center items-center'>
				{loading && <p className='text-blue-500'>Loading...</p>}
				{!isAuth && (
					<div className='p-6 rounded w-[500px]'>
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
							className='w-full bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-300 transition mb-2'
						>
							Войти
						</button>
						<div className='flex flex-col gap-2 text-center '>
							<Link
								to={'/registration'}
								className='w-full bg-gray-800 text-white py-2 px-4 rounded '
							>
								Регистрация
							</Link>
							<Link
								to={'/forgot-password'}
								className='w-full bg-gray-800/25 text-white py-2 px-4 rounded '
							>
								Забыл пароль
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default LoginForm
