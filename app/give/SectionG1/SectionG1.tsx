"use client";

import Image from "next/image";
import React from "react";

const SectionG1: React.FC = () => {
	return (
		<section className='relative w-full h-auto min-h-[600px] md:h-[700px] flex flex-col md:flex-row'>
			{/* Left Image Section */}
			<div className='relative w-full md:w-1/2 h-[300px] md:h-full'>
				<Image
					src='/assets/pray.jpg'
					alt='People praying together'
					fill
					className='object-cover'
					quality={85}
					priority
					sizes='(max-width: 768px) 100vw, 50vw'
				/>
			</div>

			{/* Right Content Section */}
			<div className='relative w-full md:w-1/2 h-[300px] md:h-full bg-orange-500'>
				{/* Background Image */}
				<div className='absolute inset-0'>
					<Image
						src='/assets/come.jpg'
						alt='Church community'
						fill
						className='object-cover opacity-20'
						quality={85}
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
				</div>

				{/* Content Overlay */}
				<div className='relative h-full flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-16 py-12 text-white'>
					<p className='text-sm md:text-base uppercase tracking-widest mb-2 md:mb-4'>
						Lead. Feed. Know. Protect.
					</p>
					<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 md:mb-6'>
						Give
					</h1>
					<p className='text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-[500px]'>
						Meet our Two Cities team!
					</p>

					{/* Buttons */}
					<div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center'>
						<button className='px-6 py-3 bg-black text-white font-medium rounded-sm hover:bg-gray-800 transition-colors duration-300 w-full sm:w-auto'>
							Learn more
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionG1;
