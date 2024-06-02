import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div className='h-28 bg-black'>
			<nav className='text-white'>
				<ul>
					<Link to={'/'}>Главная</Link>
					<li>About Us</li>
					<Link to={'/login'}>Войти в аккаунт</Link>
				</ul>
			</nav>
		</div>
	)
}

export default Header
