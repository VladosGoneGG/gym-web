import { FaInstagram, FaTelegram, FaVk } from 'react-icons/fa'
import PlanGroup from '../PlanGroup/PlanGroup'

const SectionOne = () => {
	return (
		<div className=' flex flex-col justify-center   w-auto h-auto  '>
			<div className='flex w-[245px] h-[60px] p-3 items-center bg-fon-img bg-cover bg-no-repeat relative bottom-6'>
				<ul className='flex gap-10 '>
					<li>
						<a href='https://www.instagram.com/fitform_pmr_md/' target='_blank'>
							<FaInstagram size={40} color='white' />
						</a>
					</li>
					<li>
						<a href='/' target='_blank'>
							<FaVk size={40} color='white' />
						</a>
					</li>
					<li>
						<a href='/' target='_blank'>
							<FaTelegram size={40} color='white' />{' '}
						</a>
					</li>
				</ul>
			</div>
			<h2 className='text-white md:text-[40px] font-bold pl-10 md:my-[50px]'>
				Фитнес-планы и <span className='text-orange-500'>питание</span>
			</h2>
			<div className='flex justify-center'>
				<PlanGroup />
			</div>
		</div>
	)
}

export default SectionOne
