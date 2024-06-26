import { YMaps } from '@pbe/react-yandex-maps'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from './app/store.ts'
import './index.css'
import { router } from './routes/router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<YMaps>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</YMaps>
)
