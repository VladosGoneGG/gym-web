import { Map, Placemark } from '@pbe/react-yandex-maps'

const Contacts = () => {
	return (
		<div className='flex items-center justify-center flex-1 bg-fon-img text-white text-[16px] sm:text-[24px] p-5'>
			<div className='flex flex-col items-center gap-20'>
				<h3 className='text-orange-400 font-bold'>Наши Контакты</h3>
				<div className='flex flex-wrap justify-center gap-28'>
					<ul>
						<li>
							<span className='text-orange-400 font-bold'>Телефон:</span>{' '}
							000-000-000
						</li>
						<li>
							<span className='text-orange-400 font-bold'>Адресс:</span> улица
							Дзержинского, 47
						</li>
					</ul>
					<div>
						<Map
							width={450}
							height={450}
							defaultState={{ center: [47.273405, 29.151822], zoom: 17 }}
						>
							<Placemark geometry={[47.273405, 29.151822]} />
						</Map>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts
