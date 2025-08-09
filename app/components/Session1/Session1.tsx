"use client";
import React, { useState, useEffect } from "react";

const ConferenceSection: React.FC = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<section className='bg-black text-white py-8 md:py-12'>
			<div className='container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8'>
				{/* Left Side: Video Player */}
				<div className='w-full lg:w-1/2'>
					<div className='flex items-center mb-4'>
						<span className='text-orange-500 text-2xl mr-2'>🔷</span>
						<h2 className='text-xl font-bold'>The Heights Conference 2025</h2>
					</div>
					{/* Main Video */}
					{isMounted && (
						<iframe
							className='w-full h-[200px] md:h-[300px] lg:h-[350px]'
							src='https://www.youtube.com/embed/qV5JxuGOqVE?controls=1&modestbranding=1&rel=0&showinfo=0'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							title='The Heights Conference 2025'
						></iframe>
					)}
					{/* More Videos Carousel */}
					<div className='mt-4'>
						<h3 className='text-sm font-semibold mb-2'>More videos</h3>
						<div className='flex items-center space-x-2 overflow-x-auto'>
							{/* Placeholder Thumbnails - Replace with actual images or embeds */}
							<div className='min-w-[120px] h-[80px] bg-gray-700 flex items-center justify-center text-xs'>
								Thumbnail 1
							</div>
							<div className='min-w-[120px] h-[80px] bg-gray-700 flex items-center justify-center text-xs'>
								Thumbnail 2
							</div>
							<div className='min-w-[120px] h-[80px] bg-gray-700 flex items-center justify-center text-xs'>
								Thumbnail 3
							</div>
						</div>
					</div>
				</div>

				{/* Right Side: Text and Dates */}
				<div className='w-full lg:w-1/2 text-center lg:text-left'>
					<h1 className='text-3xl md:text-4xl font-bold mb-4'>
						The Heights 2025
					</h1>
					<p className='mb-6'>
						Join us for our annual Heights Conference as we worship and hear
						from compelling guest speakers!
					</p>
					<ul className='space-y-2 mb-8'>
						<li>Thursday, Sept. 4: 6:30PM</li>
						<li>Friday, Sept. 5: 6:30PM</li>
						<li>Saturday, Sept. 6: 6:30PM</li>
						<li>Sunday, Sept. 7: 9AM, 11AM, 5PM</li>
					</ul>
					<button className='bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition duration-300'>
						Check out the Speakers
					</button>
				</div>
			</div>
		</section>
	);
};

export default ConferenceSection;
