import { Map, Placemark } from '@pbe/react-yandex-maps'
import { FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa'

const Contacts = () => {
	return (
		<div className='flex items-center justify-center flex-1 bg-neutral-950 text-white text-[16px] sm:text-[24px] p-5'>
			<div className='flex flex-col items-center gap-20'>
				<h3 className='text-white font-bold'>Наши Контакты</h3>
				<div className='flex flex-wrap justify-center gap-28'>
					<ul className='flex gap-10 flex-col'>
						<li>
							<span className='text-orange-400 font-bold'>Телефон:</span>{' '}
							000-000-000
						</li>
						<li>
							<span className='text-orange-400 font-bold'>Адресс:</span>{' '}
							Дубоссары улица Дзержинского, 47
						</li>
						<li>
							<ul className='flex gap-10'>
								<li>
									<a
										href='https://www.instagram.com/fitform_pmr_md/'
										target='_blank'
									>
										<FaInstagram size={40} color='orange' />
									</a>
								</li>
								<li>
									<a
										href='https://www.tiktok.com/discover/fitform-pmr'
										target='_blank'
									>
										<FaTiktok size={40} color='orange' />
									</a>
								</li>
								<li>
									<a href='/' target='_blank'>
										<FaTelegram size={40} color='orange' />
									</a>
								</li>
							</ul>
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
