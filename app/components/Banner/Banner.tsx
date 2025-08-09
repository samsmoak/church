"use client";
import React, { useState, useEffect } from "react";

const PurposeBanner: React.FC = () => {
	const [rotation, setRotation] = useState(0);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);

		const handleScroll = () => {
			setRotation(window.scrollY / 5);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className='relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden'>
			{/* YouTube Video Embed - Direct iframe implementation */}
			{isMounted && (
				<div className='absolute inset-0 w-full h-full'>
					<iframe
						src='https://www.youtube.com/embed/nQWFzMvCfLE?autoplay=1&mute=1&loop=1&playlist=nQWFzMvCfLE&controls=0&modestbranding=1&rel=0&showinfo=0'
						className='w-full h-full'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						title='Church Purpose Video'
					/>
				</div>
			)}

			{/* Dark Overlay for Text Readability */}
			{/* <div className='absolute inset-0 bg-black bg-opacity-60'></div> */}

			{/* Content Overlay */}
			<div className='relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
				<div className='flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl'>
					{/* Text Section */}
					<div className='lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0'>
						<h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4'>
							Helping you find your purpose <br /> in Christ and a place to
							belong.
						</h1>
						<p className='text-white text-base sm:text-lg md:text-xl'>
							You were created for community. <br /> We were created to help.
						</p>
					</div>

					{/* Buttons Section */}
					<div className='lg:w-1/2 flex flex-col sm:flex-row items-center lg:items-end space-y-4 sm:space-y-0 sm:space-x-4'>
						<button className='bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition duration-300 w-full sm:w-auto'>
							Watch a Past Service
						</button>
						<button className='border border-white text-white px-4 sm:px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto mt-4 sm:mt-0'>
							Get Connected
						</button>
					</div>
				</div>
			</div>

			{/* Rotating Logo */}
			<div className='absolute bottom-4 right-4 z-20'>
				<svg
					className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'
					viewBox='0 0 100 100'
					style={{ transform: `rotate(${rotation}deg)` }}
				>
					<circle cx='50' cy='50' r='50' fill='#f97316' />
					<path
						id='curve'
						d='M10 50a40 40 0 1180 0 40 40 0 11-80 0'
						fill='none'
					/>
					<text fill='white' fontSize='8' fontWeight='bold'>
						<textPath xlinkHref='#curve'>
							FOR THE WORLD • WINSTON MINISTRY
						</textPath>
					</text>
					<polygon points='45,40 55,40 60,50 50,60 40,50' fill='white' />
				</svg>
			</div>
		</section>
	);
};

export default PurposeBanner;
