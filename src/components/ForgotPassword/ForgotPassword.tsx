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
		<div className='flex flex-1 justify-center items-center bg-neutral-950'>
			<form onSubmit={handleSubmit(onSubmit)} className=' p-6 '>
				<h2 className='text-2xl font-bold mb-4 text-orange-400'>
					Восстановление пароля
				</h2>

				<div className='mb-4'>
					<label htmlFor='email' className='block text-orange-400'>
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
					<label htmlFor='confirmEmail' className='block text-orange-400'>
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
					className='w-full bg-gray-800/25 text-white py-2 px-4 rounded '
				>
					Отправить
				</button>

				{message && <p className='mt-4 text-center'>{message}</p>}
			</form>
		</div>
	)
}

export default ForgotPassword
