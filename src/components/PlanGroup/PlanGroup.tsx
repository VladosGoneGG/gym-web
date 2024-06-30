import SvgBicyleIco from '../SvgBicyleIco/SvgBicyleIco'
import SvgBodybuildIco from '../SvgBodybuildIco/SvgBodybuildIco'
import SvgMusculIco from '../SvgMusculIco/SvgMusculIco'
import SvgProgressIco from '../SvgProgressIco/SvgProgressIco'
import SvgRunerIco from '../SvgRunerIco/SvgRunerIco'
import SvgYogaIco from '../SvgYogaIco/SvgYogaIco'

const PlanGroup = () => {
	return (
		<div className='flex items-center w-[1100px]'>
			<ul className='p-3 grid  grid-rows-1 grid-cols-2 sm:grid-cols-3 font-custom text-[10px] text-white/50 justify-center items-center text-center'>
				<li className='flex flex-col items-center justify-evenly h-52 sm:border-r-2 border-orange-400'>
					<SvgProgressIco />
					<p className='text-[16px] text-white'>Потеря веса</p>
					<p>
						Потеря веса может иметь причины, не связанные с общем здоровьем.
						Примеры включают диету, физические упражнения.
					</p>
				</li>

				<li className='flex flex-col items-center justify-evenly h-52 sm:border-r-2 border-orange-400'>
					<SvgBodybuildIco />
					<p className='text-[16px] text-white'>Бодибилдинг</p>
					<p>
						Бодибилдинг – это использование упражнений с прогрессивным
						сопротивлением для контроля и развития мышц путем мышечной
						гипертрофии в эстетических целях.
					</p>
				</li>

				<li className='flex flex-col items-center justify-evenly h-52 '>
					<SvgYogaIco />
					<p className='text-[16px] text-white'>Классическая йога</p>
					<p>
						Термин «йога» в западном мире часто обозначает современную форму
						хатха-йоги и физическую подготовку, основанную на позах, для снятия
						стресса.
					</p>
				</li>

				<li className='flex flex-col items-center justify-evenly h-52 sm:border-t-2 sm:border-r-2 border-orange-400'>
					<SvgMusculIco />
					<p className='text-[16px] text-white'>Мускулатура</p>
					<p>
						Тренировки с отягощениями — это распространенный тип силовых
						тренировок, предназначенный для развития силы, размера скелетных
						мышц и поддержания силы.
					</p>
				</li>

				<li className='flex flex-col items-center justify-evenly h-52 sm:border-t-2 sm:border-r-2 border-orange-400'>
					<SvgBicyleIco />
					<p className='text-[16px] text-white'>Езда на велосипеде</p>

					<p>
						Езда на велотренажерах в зале, обеспечивает комфортную и безопасную
						тренировку.
					</p>
				</li>
				<li className='flex flex-col items-center justify-evenly h-52 sm:border-t-2  border-orange-400'>
					<SvgRunerIco />
					<p className='text-[16px] text-white'>Бег</p>

					<p>
						Бег — это метод наземного передвижения, позволяющий людям быстро
						передвигаться пешком.
					</p>
				</li>
			</ul>
		</div>
	)
}

export default PlanGroup
