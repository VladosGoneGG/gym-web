import { Link } from 'react-router-dom'
import SvgPlayIco from '../SvgPlayIco/SvgPlayIco'

const EntryBanner = () => {
	return (
		<div className='flex flex-col justify-evenly w-auto sm:w-[530px] h-[410px] sm:ml-4 p-5 text-white bg-gradient-to-t from-black/25 to-white/5 backdrop-blur-md'>
			<h1 className='font-bold text-[36px] md:text-6xl'>
				Трансформируй своё тело
			</h1>
			<p className='text-white/50'>
				Мы стремимся помочь вам преобразовать ваше тело и разум посредством
				фитнеса.
			</p>
			<div className='flex flex-row gap-[18px]'>
				<Link
					to={'/login'}
					className='flex justify-center items-center w-[136px] h-[44px]  bg-orange-500'
				>
					Начать
				</Link>
				<Link
					to={'https://www.tiktok.com/discover/fitform-pmr'}
					target='_blank'
					className='flex flex-row justify-center items-center w-[174px] h-[44px] gap-3 border-solid border-2 border-orange-500'
				>
					{' '}
					<SvgPlayIco /> <p>Обзор зала</p>
				</Link>
			</div>
		</div>
	)
}

export default EntryBanner
