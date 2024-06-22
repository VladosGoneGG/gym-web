import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import Logo from '../../components/Logo/Logo'
import { logout } from '../../features/authSlice/authSlice'

const Header = () => {
	const dispatch: AppDispatch = useDispatch()
	const { isAuth, user } = useSelector((state: RootState) => state.auth)

	const handleLogout = () => {
		dispatch(logout())
	}

	return (
		<div className='flex flex-row items-center justify-between  h-32 bg-black'>
			<Link to={'/'} className='ml-16'>
				<Logo />
			</Link>
			<nav className='w-[800px] ml-14 mr-14 text-white'>
				<ul className='flex flex-row justify-between items-center'>
					<Link to={'/'}>Главная</Link>
					<Link to={'/'}>Услуги</Link>
					<Link to={'/'}>О Нас</Link>
					<Link to={'/'}>Контакты</Link>

					{isAuth && <Link to={'/profile'}>Профиль</Link>}

					<Link to={'/login'}>
						{isAuth ? (
							<span
								onClick={handleLogout}
								className='w-[71px] h-[34px] flex justify-center items-center bg-orange-500'
							>
								Выйти
							</span>
						) : (
							<span className='w-[71px] h-[34px] flex justify-center items-center  bg-orange-500'>
								Войти
							</span>
						)}
					</Link>

					{isAuth && user?.role === 'admin' && (
						<Link to={'/admin/users'}>АДМИН панель</Link>
					)}
				</ul>
			</nav>
		</div>
	)
}

export default Header
