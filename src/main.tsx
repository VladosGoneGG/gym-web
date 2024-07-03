import { YMaps } from '@pbe/react-yandex-maps'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from './app/store.ts'
import './index.css'
import { router } from './routes/router.tsx'
import { API_KEY_YMAP } from './utils/variables.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<YMaps query={{ apikey: API_KEY_YMAP }}>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</YMaps>
)
