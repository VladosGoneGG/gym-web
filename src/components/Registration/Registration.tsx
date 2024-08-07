import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { IFormInput } from '../../models/IFormInput'
import AuthService from '../../services/AuthService'
import SvgLoading from '../SvgLoading/SvgLoading'

const Registration: React.FC = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<IFormInput>()
	const [loading, setLoading] = useState(false)
	const [serverError, setServerError] = useState('')
	const navigate = useNavigate()
	const password = watch('password')

	const onSubmit: SubmitHandler<IFormInput> = data => {
		setLoading(true)
		setServerError('')
		AuthService.registration(data)
			.then(response => {
				console.log(response.data)
				navigate('/')
			})
			.catch(error => {
				if (error.response?.data?.message) {
					setServerError(error.response.data.message)
				} else {
					setServerError('Произошла ошибка, попробуйте еще раз.')
				}
			})
			.finally(() => {
				setLoading(false)
			})
	}

	return (
		<div className='flex items-center justify-center flex-1 bg-neutral-950 text-black'>
			<form onSubmit={handleSubmit(onSubmit)} className=' w-[500px] p-8'>
				<h2 className='text-2xl font-bold mb-6 text-center text-orange-400'>
					Регистрация
				</h2>

				<div className='mb-4'>
					<label className='block font-bold mb-2 text-orange-400'>Имя:</label>
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
					<label className='block font-bold mb-2 text-orange-400'>
						Фамилия:
					</label>
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
					<label className='block font-bold mb-2 text-orange-400'>Email:</label>
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
					<label className='block font-bold mb-2 text-orange-400'>
						Пароль:
					</label>
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
					<label className='block font-bold mb-2 text-orange-400'>
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

				{serverError && <p className='text-red-600 mb-4'>{serverError}</p>}

				<button
					type='submit'
					className='w-full bg-gray-800 text-white py-2 px-4 rounded'
					disabled={loading}
				>
					{loading ? <SvgLoading /> : 'Зарегистрироваться'}
				</button>
			</form>
		</div>
	)
}

export default Registration
