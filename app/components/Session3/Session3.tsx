"use client";
import Image from "next/image";
import React, { useState } from "react";

const Section3: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const videoId = "_e-gOadKZfQ";
	const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

	// Image data array for cleaner mapping
	const churchImages = [
		{
			src: "/assets/church1.jpeg",
			alt: "Worship service at Two Cities Church",
			width: 1280,
			height: 720,
		},
		{
			src: "/assets/church2.jpeg",
			alt: "Pastor teaching at Two Cities Church",
			width: 1280,
			height: 720,
		},
		{
			src: "/assets/church4.jpeg",
			alt: "Community members at Two Cities Church",
			width: 1280,
			height: 720,
		},
	];

	return (
		<section className='bg-white py-12 md:py-16 lg:py-20 text-black'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Three Images Grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16'>
					{churchImages.map((image, index) => (
						<div
							key={index}
							className='relative aspect-video overflow-hidden rounded-lg shadow-lg'
						>
							<Image
								src={image.src}
								alt={image.alt}
								width={image.width}
								height={image.height}
								className='object-cover w-full h-full'
								priority={index === 0} // Only prioritize first image
							/>
						</div>
					))}
				</div>

				{/* Heading and Description */}
				<div className='text-center max-w-4xl mx-auto mb-12 md:mb-16'>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
						Finding your place starts here.
					</h1>
					<div className='w-24 h-1 bg-orange-500 mx-auto mb-6'></div>
					<p className='text-lg md:text-xl text-gray-700 leading-relaxed'>
						The Weekender is your first step and your next step in finding
						connection and community at Two Cities Church. In one Friday evening
						and Saturday morning, you'll learn who our church is, where you fit
						in it, and how to find your place in it all.
					</p>
				</div>

				{/* Video Player */}
				<div className='relative max-w-5xl mx-auto mb-12 md:mb-16 rounded-xl overflow-hidden shadow-xl'>
					{isPlaying ? (
						<div className='aspect-w-16 aspect-h-9'>
							<iframe
								className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]'
								src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
								title='The Weekender Video'
								loading='lazy'
							/>
						</div>
					) : (
						<button
							className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center cursor-pointer group'
							style={{ backgroundImage: `url(${thumbnailUrl})` }}
							onClick={() => setIsPlaying(true)}
							aria-label='Play Weekender video'
						>
							{/* Dark Overlay with hover effect */}
							<div className='absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300'></div>

							{/* Play Button and Text */}
							<div className='absolute inset-0 flex flex-col items-center justify-center text-white px-6'>
								<div className='mb-6 text-center'>
									<p className='text-xl sm:text-2xl md:text-3xl font-bold mb-4'>
										Click to see how you can find connection and community at
										Two Cities Church.
									</p>
								</div>
								<div className='flex items-center justify-center space-x-3 bg-orange-500 bg-opacity-90 hover:bg-opacity-100 px-6 py-3 rounded-full transition-all duration-300 transform group-hover:scale-105'>
									<svg
										className='w-8 h-8'
										fill='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'
									>
										<path d='M8 5v14l11-7z' />
									</svg>
									<span className='text-lg font-medium'>Play Video</span>
								</div>
							</div>
						</button>
					)}
				</div>

				{/* Learn More Button */}
				<div className='text-center'>
					<button className='bg-gray-800 hover:bg-gray-700 text-white font-medium px-8 py-3 md:px-10 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50'>
						Learn More About The Weekender
					</button>
				</div>
			</div>
		</section>
	);
};

export default Section3;
