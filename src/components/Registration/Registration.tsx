import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFormInput } from '../../models/IFormInput'
import AuthService from '../../services/AuthService'

const Registration: React.FC = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<IFormInput>()
	const onSubmit: SubmitHandler<IFormInput> = data => {
		AuthService.registration(data)
			.then(response => {
				console.log(response.data)
			})
			.catch(error => {
				console.error(error.response?.data)
			})
	}

	const password = watch('password')

	return (
		<div className='flex items-center justify-center min-h-screen bg-black'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-yellow-500 p-8 rounded-lg shadow-lg max-w-md w-full'
			>
				<h2 className='text-2xl font-bold mb-6 text-center text-black'>
					Регистрация
				</h2>

				<div className='mb-4'>
					<label className='block text-black font-bold mb-2'>Имя:</label>
					<input
						className='w-full p-2 border border-black rounded'
						{...register('firstName', {
							required: true,
							maxLength: {
								value: 20,
								message: 'Максимальная длина - 20 символов',
							},
						})}
					/>
					{errors.firstName && (
						<p className='text-red-600'>{errors.firstName.message}</p>
					)}
				</div>

				<div className='mb-4'>
					<label className='block text-black font-bold mb-2'>Фамилия:</label>
					<input
						className='w-full p-2 border border-black rounded'
						{...register('lastName', {
							required: true,
							pattern: {
								value: /^[A-Za-zА-Яа-я]+$/i,
								message: 'Неверный формат фамилии',
							},
						})}
					/>
					{errors.lastName && (
						<p className='text-red-600'>{errors.lastName.message}</p>
					)}
				</div>

				<div className='mb-4'>
					<label className='block text-black font-bold mb-2'>Email:</label>
					<input
						className='w-full p-2 border border-black rounded'
						{...register('email', {
							required: true,
							pattern: {
								value: /^\S+@\S+$/i,
								message: 'Неверный формат email',
							},
						})}
					/>
					{errors.email && (
						<p className='text-red-600'>{errors.email.message}</p>
					)}
				</div>

				<div className='mb-6'>
					<label className='block text-black font-bold mb-2'>Пароль:</label>
					<input
						type='password'
						className='w-full p-2 border border-black rounded'
						{...register('password', {
							required: true,
							minLength: {
								value: 6,
								message: 'Минимальная длина пароля - 6 символов',
							},
						})}
					/>
					{errors.password && (
						<p className='text-red-600'>{errors.password.message}</p>
					)}
				</div>

				<div className='mb-6'>
					<label className='block text-black font-bold mb-2'>
						Повторите пароль:
					</label>
					<input
						type='password'
						className='w-full p-2 border border-black rounded'
						{...register('confirmPassword', {
							required: 'Повтор пароля обязателен',
							validate: value =>
								value === password || 'Пароли должны совпадать',
						})}
					/>
					{errors.confirmPassword && (
						<p className='text-red-600'>{errors.confirmPassword.message}</p>
					)}
				</div>

				<button
					type='submit'
					className='w-full bg-black text-white p-2 rounded hover:bg-green-600 transition'
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	)
}

export default Registration
