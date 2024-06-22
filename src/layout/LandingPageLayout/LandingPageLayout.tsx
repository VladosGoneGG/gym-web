import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export const LandingPageLayout = () => {
	return (
		<div className='min-h-screen flex flex-col font-custom bg-black'>
			<Header />

			<Outlet />

			<Footer />
		</div>
	)
}
