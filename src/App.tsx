import React from 'react'
import EntryBanner from './components/EntryBanner/EntryBanner'
import SectionOne from './components/SectionOne/SectionOne'

const App: React.FC = () => {
	return (
		<div className='flex-grow'>
			<div className='bg-hero-main bg-cover bg-center bg-no-repeat w-auto h-[1024px] 2xl:w-[1980px]'>
				<EntryBanner />
			</div>
			<section className=' bg-hero-rev bg-cover bg-center bg-no-repeat w-auto h-auto 2xl:w-[1980px] '>
				<SectionOne />
			</section>
		</div>
	)
}

export default App
