import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

const SectionTwo = () => {
	const [open, setOpen] = useState(false)

	return (
		<div className='w-auto h-auto bg-neutral-950'>
			<h2 className='text-white pl-10 text-[18px] md:text-[40px] font-bold pt-3'>
				План <span className='text-orange-500'>Абонимента</span>
			</h2>
			<div className='flex p-5 justify-center items-center'>
				<img
					src='/pricelist.png'
					alt='price'
					className='bg-cover bg-center bg-no-repeat cursor-pointer'
					onClick={() => setOpen(true)}
				/>
				<Lightbox
					open={open}
					close={() => setOpen(false)}
					slides={[
						{
							src: '/pricelist.png',
							width: 1440,
							height: 800,
						},
					]}
					plugins={[Fullscreen, Zoom]}
				/>
			</div>
		</div>
	)
}

export default SectionTwo
