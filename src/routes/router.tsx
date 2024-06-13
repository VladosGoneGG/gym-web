import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import AboutUs from '../components/AboutUs/AboutUs'
import AdminPanel from '../components/AdminPanel/AdminPanel'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import ForgotPassword from '../components/ForgotPassword/ForgotPassword'
import LoginForm from '../components/LoginForm/LoginForm'
import Registration from '../components/Registration/Registration'
import UserProfile from '../components/UserProfile/UserProfile'
import UserProfileLink from '../components/UserProfileLink/UserProfileLink'
import { LandingPageLayout } from '../layout/LandingPageLayout/LandingPageLayout'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPageLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <App />,
			},
			{
				path: '/about',
				element: <AboutUs />,
			},
			{
				path: '/login',
				element: <LoginForm />,
			},
			{
				path: '/registration',
				element: <Registration />,
			},
			{
				path: '/forgot-password',
				element: <ForgotPassword />,
			},
			{
				path: '/profile',
				element: <UserProfile />,
			},
			{
				path: '/profile/:id',
				element: <UserProfileLink />,
			},
			{
				path: '/admin/users',
				element: <AdminPanel />,
			},
		],
	},
	// {
	// 	path: '*',
	// 	element: <Navigate to='/' replace />,
	// },
])
