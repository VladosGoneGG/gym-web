import Logo from '../../components/Logo/Logo'
import SvgCopyRight from '../../components/SvgCopyRight/SvgCopyRight'

const Footer = () => {
	return (
		<div className='min-h-40 bg-black'>
			<div className='text-white flex justify-between items-center p-10'>
				<ul className='flex items-center gap-6'>
					<li>
						<Logo />
					</li>

					<li className='text-[20px] font-bold'>
						Помогаем достижению <br /> ваших фитнес целей!
					</li>
				</ul>
				<div className='hidden md:block'></div>
				<ul className='flex justify-center items-center gap-1 md:absolute md:left-1/2 md:transform md:-translate-x-1/2'>
					<li>
						<SvgCopyRight />
					</li>
					<li className='text-[20px] font-bold'>2024 All Rights Reserved</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer
