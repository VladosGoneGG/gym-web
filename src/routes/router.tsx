import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import AboutUs from '../components/AboutUs/AboutUs'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import ForgotPassword from '../components/ForgotPassword/ForgotPassword'
import LoginForm from '../components/LoginForm/LoginForm'
import Registration from '../components/Registration/Registration'
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
			{ path: 'login', element: <LoginForm /> },
			{ path: 'registration', element: <Registration /> },
			{ path: 'forgot-password', element: <ForgotPassword /> },
		],
	},
])
