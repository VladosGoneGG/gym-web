const SectionThree = () => {
	return (
		<div className=' w-auto h-auto  font-custom flex flex-wrap justify-evenly pb-28'>
			<div className='flex flex-col'>
				<h2 className='text-white text-[40px] font-bold py-[100px] pl-[134px]'>
					Зачем выбрать <span className='text-orange-500'>Нас?</span>
				</h2>
				<div className='flex w-[815px] h-[510px] pl-[100px]'>
					<ul className='custom-list md:text-[34px] font-bold'>
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
			<div className='flex flex-col items-end gap-16 p-5 mt-16 w-auto h-[800px]'>
				<img src='/girl.png' alt='girl' className='w-[307px] h-[367px]' />
				<img src='/man.png' alt='man' className='w-[381px] h-[455px]' />
			</div>
		</div>
	)
}

export default SectionThree
