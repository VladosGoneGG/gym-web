const SectionThree = () => {
	return (
		<div className=' w-auto h-auto  font-custom flex  flex-row justify-evenly'>
			<div className='flex flex-col pt-10'>
				<h2 className='text-white text-[18px] sm:text-[30px] md:text-[40px] font-bold '>
					Зачем выбрать <span className='text-orange-500'>Нас?</span>
				</h2>
				<div className='flex w-auto h-[300px]'>
					<ul className='custom-list text-[14px] sm:text-[20px] md:text-[34px] font-bold'>
						<li>Лучший зал</li>
						<li>Опытные тренеры</li>
						<li>
							Хорошие условия для <br /> тренировок
						</li>
						<li>
							Консультации с <br /> экспертами
						</li>
					</ul>
				</div>
			</div>
			<div className='flex flex-col items-end gap-16  w-auto h-auto'>
				<img
					src='/girl.png'
					alt='girl'
					className='w-[150px] md:w-[350px] md:h-[455px] sm:w-[200px] sm:h-[250px] sm:relative sm:left-10'
				/>
				<img
					src='/man.png'
					alt='man'
					className='w-[150px] md:w-[350px] md:h-[455px] sm:w-[200px] sm:h-[250px]'
				/>
			</div>
		</div>
	)
}

export default SectionThree
