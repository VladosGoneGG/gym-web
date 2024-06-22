import PlanGroup from '../PlanGroup/PlanGroup'
import SvgLineRow from '../SvgLineRow/SvgLineRow'

const SectionOne = () => {
	return (
		<div className=' flex flex-col justify-center   w-auto h-auto  '>
			<span>
				<SvgLineRow />
			</span>
			<h2 className='text-white text-[40px] font-bold my-[50px] ml-[90px]'>
				Фитнес-планы и <span className='text-orange-500'>питание</span>
			</h2>
			<div className='flex justify-center'>
				<PlanGroup />
			</div>
		</div>
	)
}

export default SectionOne
