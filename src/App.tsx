import React from 'react'
import EntryBanner from './components/EntryBanner/EntryBanner'
import SectionOne from './components/SectionOne/SectionOne'
import SectionThree from './components/SectionThree/SectionThree'
import SectionTwo from './components/SectionTwo/SectionTwo'

const App: React.FC = () => {
	return (
		<div className='flex-grow'>
			<div className='bg-hero-main bg-cover md:bg-contain bg-center bg-no-repeat h-[1024px] sm:h-[768px] md:h-[1024px] '>
				<EntryBanner />
			</div>
			<section className=' bg-hero-rev bg-cover md:bg-contain bg-center bg-no-repeat  sm:h-auto md:h-[800px]  '>
				<SectionOne />
			</section>
			<section>
				<SectionTwo />
			</section>
			<section className='bg-fon-img bg-cover bg-no-repeat pb-14'>
				<SectionThree />
			</section>
		</div>
	)
}

export default App
