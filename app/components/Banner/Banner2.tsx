"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner2: React.FC = () => {
	return (
		<section className='relative w-full bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12'>
			<div className='max-w-7xl mx-auto'>
				{/* Heading and Subheading */}
				<div className='text-center mb-6 sm:mb-8 md:mb-10'>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#333333] font-serif inline-block'>
						Welcome To <span className='text-[#C25020]'> 522Church</span>
						<span className='block h-1 w-full bg-[#333333] mt-1 sm:mt-2'></span>
					</h1>
					<p className='text-base sm:text-lg md:text-xl text-gray-600 mt-2 sm:mt-3'>
						We're Glad You're Here.
					</p>
				</div>

				{/* Buttons */}
				<div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10'>
					<Link
						href='/introduction'
						className='px-4 sm:px-6 py-2 sm:py-3 bg-[#333333] text-white font-semibold rounded-lg hover:bg-[#C25020] transition-all duration-300 shadow-md hover:shadow-[#4CAF50]/40 flex items-center justify-center gap-2 w-full sm:w-auto uppercase'
					>
						Our Beliefs
					</Link>
					<Link
						href='/eventss'
						className='px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-[#333333] text-[#333333] font-semibold rounded-lg hover:bg-[#333333]/10 hover:text-[#1F2937] transition-all duration-300 shadow-md hover:shadow-[#333333]/40 flex items-center justify-center gap-2 w-full sm:w-auto uppercase'
					>
						View Our Events
					</Link>
				</div>

				{/* Image Collage */}
				<div className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-[-100px] sm:mb-[-120px] md:mb-[-150px] lg:mb-[-120px]'>
					<div className='relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 z-10'>
						<Image
							src='/assets/church45.jpeg'
							alt='Church community 1'
							fill
							className='object-cover'
						/>
					</div>
					<div className='relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 z-10'>
						<Image
							src='/assets/church47.jpeg'
							alt='Church community 2'
							fill
							className='object-cover'
						/>
					</div>
					<div className='relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 z-10'>
						<Image
							src='/assets/church44.jpeg'
							alt='Church community 3'
							fill
							className='object-cover'
						/>
					</div>
					<div className='relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 z-10'>
						<Image
							src='/assets/church48.jpeg'
							alt='Church community 4'
							fill
							className='object-cover'
						/>
					</div>
				</div>

				{/* Welcome Section */}
				<div className='relative  bg-[#333333] rounded-lg p-6 sm:p-8 md:p-10  gap-6 sm:gap-8 md:gap-10 z-0 mt-[-50px] sm:mt-[-60px] md:mt-[-70px] lg:mt-[-60px]'>
					{/* Left Text */}
					<div className='h-40 w-full'></div>
					<div className='flex gap-4'>
						<div className='w-full lg:w-1/2 text-white'>
							<h3 className='text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif mb-2 sm:mb-3'>
								Welcome to 522Church
							</h3>
							<p className='text-[#C25020] text-lg sm:text-xl md:text-2xl font-bold'>
								We want to meet you!
							</p>
						</div>
						{/* Right Text */}
						<div className='w-full lg:w-1/2 text-white'>
							<p className='text-base sm:text-lg md:text-xl leading-relaxed'>
								At 522 Church, we’re passionate about declaring the gospel of
								Jesus Christ, making disciples, demonstrating God’s mercy, and
								deploying Holy Spirit–empowered leaders to transform our city
								and beyond.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner2;
