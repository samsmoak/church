"use client";

import Image from "next/image";
import React from "react";

const Sectionintro4: React.FC = () => {
	return (
		<section className='relative w-full bg-amber-200 h-[400px] overflow-hidden'>
			<Image
				src='/assets/come.jpg'
				alt='Community and Purpose Banner'
				width={1280}
				height={720}
				className='object-fill w-full brightness-50'
			/>
			<div className='absolute inset-0 flex items-center justify-center md:justify-start px-4 md:px-20'>
				<div className='text-center '>
					<h1 className='text-white text-3xl md:text-5xl font-bold leading-tight'>
						It&apos;s time to step into the{" "}
						<span className='relative inline-block'>
							community and purpose
							<span className='absolute bottom-[-4px] left-0 w-full h-1 bg-orange-500'></span>
						</span>{" "}
						God created for you!
					</h1>
					<div className='mt-8 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4'>
						<button className='px-6 py-3 bg-orange-500 text-white font-medium rounded-sm hover:bg-orange-600 transition'>
							Watch A Past Service
						</button>
						<button className='px-6 py-3 bg-transparent border border-white text-white font-medium rounded-sm hover:bg-white hover:text-black transition'>
							Let Us Know You&apos;re Coming
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Sectionintro4;
