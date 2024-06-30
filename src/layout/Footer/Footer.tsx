import Logo from '../../components/Logo/Logo'
import SvgCopyRight from '../../components/SvgCopyRight/SvgCopyRight'

const Footer = () => {
	return (
		<div className='min-h-40 bg-black'>
			<div className='text-white flex justify-between items-end sm:items-center p-5 sm:p-10'>
				<ul className='flex flex-col sm:flex-row items-center gap-6'>
					<li>
						<Logo />
					</li>

					<li className='text-[14px] sm:text-[20px] font-bold'>
						Помогаем достижению <br /> ваших фитнес целей!
					</li>
				</ul>
				<ul className='flex justify-center items-center pt-4 gap-1 '>
					<li>
						<SvgCopyRight />
					</li>
					<li className='text-[14px] sm:text-[20px] font-bold'>
						2024 All Rights Reserved
					</li>
				</ul>
				<div className='block'></div>
				<div className='block'></div>
			</div>
		</div>
	)
}

export default Footer
