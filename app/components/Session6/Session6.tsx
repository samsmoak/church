"use client";

import Image from "next/image";
import React from "react";
import { ArrowRight, PlayCircle } from "lucide-react"; // Using lucide-react for modern icons

const Session6: React.FC = () => {
	return (
		<section className='relative w-full bg-[#F5F5F5] h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden'>
			<div className='absolute inset-0 bg-gradient-to-b from-[#333333]/50 to-[#333333]/80 z-10' />
			<Image
				src='/assets/come.jpg'
				alt='Join Our Community Banner'
				fill
				priority
				quality={90}
				className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-105'
			/>

			<div className='absolute inset-0 flex items-center justify-center z-20 px-4 sm:px-6 md:px-8 lg:px-16'>
				<div className='text-center max-w-4xl mx-auto'>
					<h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-xl'>
						Step into the{" "}
						<span className='relative inline-block'>
							<span className='text-[#C25020]'>community and purpose</span>
							<span className='absolute bottom-0 left-0 w-full h-2 bg-[#C25020]/50 rounded-full transform translate-y-1'></span>
						</span>{" "}
						God created for you
					</h1>

					<p className='mt-6 text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md leading-relaxed'>
						Join us this Sunday for vibrant worship, gospel-centered teaching,
						and meaningful connections with others on the same journey.
					</p>

					<div className='mt-10 flex flex-col sm:flex-row justify-center gap-4'>
						<button className='px-8 py-4 bg-[#C25020] hover:bg-[#A23E18] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:scale-100 active:scale-95 shadow-lg hover:shadow-[#C25020]/40 flex items-center justify-center gap-2'>
							<PlayCircle className='w-5 h-5' />
							Watch a Past Sermon
						</button>
						<button className='px-8 py-4 bg-transparent border-2 border-gray-200 hover:bg-gray-200/10 text-gray-200 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:scale-100 active:scale-95 shadow-lg flex items-center justify-center gap-2'>
							<ArrowRight className='w-5 h-5' />
							Plan Your Visit
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Session6;
