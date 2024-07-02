import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import Logo from '../../components/Logo/Logo'
import { logout } from '../../features/authSlice/authSlice'
import './Header.css'

const Header = () => {
	const dispatch: AppDispatch = useDispatch()
	const { isAuth, user } = useSelector((state: RootState) => state.auth)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const navigate = useNavigate()

	const handleLogout = () => {
		dispatch(logout())
		navigate('/')
	}

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<div className='flex flex-row items-center justify-between h-32 bg-black relative'>
			<Link to={'/'} className='ml-4 sm:ml-16'>
				<Logo />
			</Link>
			<button className='md:hidden mr-10 text-white' onClick={toggleMenu}>
				<GiHamburgerMenu size={50} color='orange' />
			</button>

			<nav className='hidden md:flex w-[800px] ml-14 mr-14 text-white text-[16px] md:text-[20px]'>
				<ul className='flex flex-row justify-evenly items-center w-full'>
					<li>
						<Link to={'/'}>Главная</Link>
					</li>
					<li>
						<Link to={'/contacts'}>Контакты</Link>
					</li>
					{isAuth && (
						<li>
							<Link to={'/profile'}>Профиль</Link>
						</li>
					)}
					{isAuth && user?.role === 'admin' && (
						<li>
							<Link to={'/admin/users'}>Админ</Link>
						</li>
					)}
					<li>
						{isAuth ? (
							<button
								onClick={handleLogout}
								className='w-[80px] h-[34px] flex justify-center items-center bg-orange-500 text-white'
							>
								Выйти
							</button>
						) : (
							<Link to={'/login'}>
								<span className='w-[80px] h-[34px] flex justify-center items-center bg-orange-500'>
									Войти
								</span>
							</Link>
						)}
					</li>
				</ul>
			</nav>
			<nav className={`menu ${isMenuOpen ? 'open' : ''} md:hidden`}>
				<ul className='flex flex-col items-center justify-center'>
					<li>
						<Link to={'/'} onClick={() => setIsMenuOpen(false)}>
							Главная
						</Link>
					</li>
					<li>
						<Link to={'/contacts'} onClick={() => setIsMenuOpen(false)}>
							Контакты
						</Link>
					</li>
					{isAuth && (
						<li>
							<Link to={'/profile'} onClick={() => setIsMenuOpen(false)}>
								Профиль
							</Link>
						</li>
					)}
					{isAuth && user?.role === 'admin' && (
						<li>
							<Link to={'/admin/users'} onClick={() => setIsMenuOpen(false)}>
								Админ
							</Link>
						</li>
					)}
					<li>
						{isAuth ? (
							<button
								onClick={() => {
									handleLogout()
									setIsMenuOpen(false)
								}}
								className='w-[80px] h-[34px] flex justify-center items-center bg-orange-500 text-white'
							>
								Выйти
							</button>
						) : (
							<Link to={'/login'} onClick={() => setIsMenuOpen(false)}>
								<span className='w-[80px] h-[34px] flex justify-center items-center bg-orange-500'>
									Войти
								</span>
							</Link>
						)}
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header
