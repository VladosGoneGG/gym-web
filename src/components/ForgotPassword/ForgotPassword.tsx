import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { API_URL } from '../../http'
import { IFormInput } from '../../models/IFormInput'

const ForgotPassword = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<IFormInput>()
	const [message, setMessage] = useState<string | null>(null)

	const onSubmit: SubmitHandler<IFormInput> = async data => {
		try {
			const response = await axios.post(`${API_URL}/forgot-password`, {
				email: data.email,
			})
			setMessage(response.data.message)
		} catch (error: any) {
			setMessage(error.response?.data?.message || 'Ошибка при сбросе пароля')
		}
	}

	const watchEmail = watch('email')

	return (
		<div className='flex justify-center items-center min-h-screen bg-gray-100'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-white p-6 rounded shadow-md w-full max-w-md'
			>
				<h2 className='text-2xl font-bold mb-4'>Восстановление пароля</h2>

				<div className='mb-4'>
					<label htmlFor='email' className='block text-gray-700'>
						Email:
					</label>
					<input
						type='email'
						id='email'
						{...register('email', {
							required: 'Email обязателен',
							pattern: /^\S+@\S+$/i,
						})}
						className='w-full p-2 border border-gray-300 rounded mt-1'
					/>
					{errors.email && (
						<p className='text-red-500 text-sm'>{errors.email.message}</p>
					)}
				</div>

				<div className='mb-4'>
					<label htmlFor='confirmEmail' className='block text-gray-700'>
						Повторите Email:
					</label>
					<input
						type='email'
						id='confirmEmail'
						{...register('confirmEmail', {
							required: 'Повторите email',
							validate: value => value === watchEmail || 'Email не совпадают',
						})}
						className='w-full p-2 border border-gray-300 rounded mt-1'
					/>
					{errors.confirmEmail && (
						<p className='text-red-500 text-sm'>
							{errors.confirmEmail.message}
						</p>
					)}
				</div>

				<button
					type='submit'
					className='w-full bg-yellow-500 text-black p-2 rounded mt-4 hover:bg-yellow-600 transition-colors'
				>
					Отправить
				</button>

				{message && <p className='mt-4 text-center'>{message}</p>}
			</form>
		</div>
	)
}

export default ForgotPassword
