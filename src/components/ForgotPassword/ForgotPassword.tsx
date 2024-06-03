import axios from 'axios'
import { useState } from 'react'
import { API_URL } from '../../http'

const ForgotPassword = () => {
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const handleForgotPassword = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		try {
			const response = await axios.post(`${API_URL}/forgot-password`, { email })
			setMessage(response.data.message)
		} catch (error: any) {
			setMessage(error.response.data.message || 'Ошибка при сбросе пароля')
		}
	}

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
			<div className='bg-white p-6 rounded shadow-md w-full max-w-xs'>
				<form onSubmit={handleForgotPassword} className='flex flex-col'>
					<label htmlFor='email' className='mb-2 text-lg font-medium'>
						Введите ваш email:
					</label>
					<input
						type='email'
						id='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						className='w-full p-2 mb-4 border border-gray-300 rounded'
						required
					/>
					<button
						type='submit'
						className='w-full bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition'
					>
						Сбросить пароль
					</button>
				</form>
				{message && <p className='mt-4 text-center text-lg'>{message}</p>}
			</div>
		</div>
	)
}

export default ForgotPassword
