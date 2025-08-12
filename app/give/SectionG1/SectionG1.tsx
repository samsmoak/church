"use client";

import Image from "next/image";
import React from "react";
import { Heart, ArrowRight } from "lucide-react"; // Using lucide-react for modern icons
import Link from "next/link";

const SectionG1: React.FC = () => {
	return (
		<section className='relative w-full h-auto min-h-[500px] md:h-[600px] lg:h-[700px] flex flex-col md:flex-row'>
			{/* Left Image Section */}
			<div className='relative w-full md:w-1/2 h-[300px] md:h-full'>
				<Image
					src='/assets/church34.jpeg'
					alt='Community in prayer'
					fill
					className='object-cover transition-transform duration-500 group-hover:scale-105'
					quality={85}
					priority
					sizes='(max-width: 768px) 100vw, 50vw'
				/>
				<div className='absolute inset-0 bg-gradient-to-r from-[#333333]/30 to-transparent' />
			</div>

			{/* Right Content Section */}
			<div className='relative w-full md:w-1/2 h-[300px] md:h-full bg-[#333333]'>
				{/* Background Image */}
				<div className='absolute inset-0'>
					<Image
						src='/assets/church12.jpeg'
						alt='Church community gathering'
						fill
						className='object-cover opacity-10'
						quality={85}
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
				</div>

				{/* Content Overlay */}
				<div className='relative h-full flex flex-col justify-center items-center text-center px-6 sm:px-8 md:px-12 lg:px-16 py-12 text-gray-200'>
					<p className='text-sm md:text-base uppercase tracking-wider text-[#C25020] mb-3 md:mb-4 font-sans'>
						Support Our Mission
					</p>
					<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 font-serif'>
						Give Generously
					</h1>
					<p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-[500px] leading-relaxed'>
						Your generosity fuels the mission of 522Church to share the Gospel
						and build a vibrant community.
					</p>

					{/* Buttons */}
					<div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center'>
						<Link
							href='#give'
							className='px-6 py-3 bg-[#C25020] text-white font-semibold rounded-lg hover:bg-[#A23E18] transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-[#C25020]/40 group'
						>
							<Heart className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' />
							Give Now
						</Link>
						<Link
							href='#learn-more'
							className='px-6 py-3 bg-transparent border-2 border-gray-200 text-gray-200 font-semibold rounded-lg hover:bg-gray-200/10 transition-all duration-300 flex items-center justify-center gap-2 shadow-md group'
						>
							<ArrowRight className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' />
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionG1;
