"use client";

import Image from "next/image";
import React from "react";

const Sessionintro4: React.FC = () => {
	return (
		<section className='relative w-full bg-amber-200 h-[500px] md:h-[600px] overflow-hidden'>
			<div className='absolute inset-0 bg-black/30 z-10' />
			<Image
				src='/assets/come.jpg'
				alt='Community and Purpose Banner'
				fill
				priority
				quality={90}
				className='object-cover w-full h-full'
			/>

			<div className='absolute inset-0 flex items-center justify-center z-20 px-4 md:px-8 lg:px-20'>
				<div className='text-center max-w-4xl mx-auto'>
					<h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg'>
						It's time to step into the{" "}
						<span className='relative inline-block'>
							<span className='text-orange-300'>community and purpose</span>
							<span className='absolute bottom-0 left-0 w-full h-2 bg-orange-500 transform translate-y-1'></span>
						</span>{" "}
						God created for you!
					</h1>

					<p className='mt-6 text-white/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md'>
						Join us this Sunday to experience worship, teaching, and connection
						with others on the same journey.
					</p>

					<div className='mt-10 flex flex-col sm:flex-row justify-center gap-4'>
						<button
							className='px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-all 
                        duration-300 transform hover:scale-105 focus:scale-100 active:scale-95 shadow-lg hover:shadow-orange-500/30'
						>
							Watch A Past Service
						</button>
						<button
							className='px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold rounded-md 
                        transition-all duration-300 transform hover:scale-105 focus:scale-100 active:scale-95 shadow-lg'
						>
							Let Us Know You're Coming
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Sessionintro4;
