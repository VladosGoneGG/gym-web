const SectionTwo = () => {
	return (
		<div className='w-auto h-auto bg-neutral-950'>
			<h2 className='text-white pl-10 text-[18px] md:text-[40px] font-bold pt-3'>
				План <span className='text-orange-500'>Абонимента</span>
			</h2>
			<div className='flex p-5 justify-center items-center'>
				<img
					src='/pricelist.png'
					alt='price'
					className='bg-cover bg-center bg-no-repeat'
				/>
			</div>
		</div>
	)
}

export default SectionTwo
