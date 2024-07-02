import Logo from '../../components/Logo/Logo'
import SvgCopyRight from '../../components/SvgCopyRight/SvgCopyRight'

const Footer = () => {
	return (
		<div className='min-h-40 bg-black'>
			<div className='text-white flex justify-between items-center p-5 sm:p-10'>
				<ul className='flex   sm:flex-row items-center gap-6'>
					<li>
						<Logo />
					</li>
					<li className='text-[10px] sm:text-[16px] font-bold'>
						МЕЧТЫ НЕ РАБОТАЮТ,
						<br /> ПОКА НЕ РАБОТАЕШЬ ТЫ!
					</li>
				</ul>
				<ul className='flex justify-center items-center  gap-1 '>
					<li>
						<SvgCopyRight />
					</li>
					<li className='text-[10px] sm:text-[14px]'>
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
