"use client";
import Image from "next/image";
import React, { useState } from "react";

const Section3: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState(false);

	const videoId = "_e-gOadKZfQ";
	const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

	return (
		<section className='bg-white py-8 md:py-12 text-black'>
			<div className='container mx-auto px-4'>
				{/* Three Images */}
				<div className='flex flex-col md:flex-row gap-4 mb-8'>
					{/* First Image */}
					<div className='w-full md:w-1/3 h-auto relative aspect-[4/3]'>
						<Image
							src='/assets/come.jpg' // Path relative to public folder
							alt='Woman on stage'
							fill
							className='object-cover rounded'
							sizes='(max-width: 768px) 100vw, 33vw'
						/>
					</div>

					{/* Second Image */}
					<div className='w-full md:w-1/3 h-auto relative aspect-[4/3]'>
						<Image
							src='/assets/come.jpg' // Path relative to public folder
							alt='Man speaking to audience'
							fill
							className='object-cover rounded'
							sizes='(max-width: 768px) 100vw, 33vw'
						/>
					</div>

					{/* Third Image */}
					<div className='w-full md:w-1/3 h-auto relative aspect-[4/3]'>
						<Image
							src='/assets/come.jpg' // Path relative to public folder
							alt='Two women smiling'
							fill
							className='object-cover rounded'
							sizes='(max-width: 768px) 100vw, 33vw'
						/>
					</div>
				</div>

				{/* Heading and Description */}
				<div className='text-center mb-8'>
					<h1 className='text-3xl md:text-4xl font-bold mb-2'>
						Finding your place starts here.
					</h1>
					<div className='w-20 h-1 bg-orange-500 mx-auto mb-4'></div>
					<p className='max-w-2xl mx-auto'>
						The Weekender is your first step and your next step in finding
						connection and community at Two Cities Church. In one Friday evening
						and Saturday morning, you’ll learn who our church is, where you fit
						in it, and how to find your place in it all.
					</p>
				</div>

				{/* Video Player */}
				<div className='relative max-w-4xl mx-auto mb-8'>
					{isPlaying ? (
						<iframe
							className='w-full h-[300px] md:h-[500px]'
							src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							title='The Weekender Video'
						/>
					) : (
						<div
							className='relative w-full h-[300px] md:h-[500px] bg-cover bg-center cursor-pointer'
							style={{ backgroundImage: `url(${thumbnailUrl})` }}
							onClick={() => setIsPlaying(true)}
						>
							{/* Dark Overlay */}
							<div className='absolute inset-0 bg-black bg-opacity-50'></div>
							{/* Text Overlay */}
							<div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4'>
								<p className='text-xl md:text-3xl font-bold mb-4'>
									Click to see how you can find connection and community at Two
									Cities Church.
								</p>
								<div className='flex items-center space-x-2'>
									<svg className='w-8 h-8' fill='white' viewBox='0 0 24 24'>
										<path d='M8 5v14l11-7z' />
									</svg>
									<span className='text-lg'>Play Video</span>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Learn More Button */}
				<div className='text-center'>
					<button className='bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition duration-300'>
						Learn More About The Weekender
					</button>
				</div>
			</div>
		</section>
	);
};

export default Section3;
