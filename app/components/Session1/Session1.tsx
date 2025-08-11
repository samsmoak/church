"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ConferenceSection: React.FC = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<section className='bg-[#333333] text-white py-12 md:py-16 px-4 md:px-8 lg:px-16'>
			<div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
				{/* Left Side: Video Player */}
				<div className='w-full lg:w-1/2'>
					{/* Main Video with lazy loading and better responsiveness */}
					{isMounted && (
						<div className='relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl'>
							<iframe
								className='absolute top-0 left-0 w-full h-full'
								src='https://www.youtube.com/embed/QbIqFmk0jcs'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
								title='The Heights Conference 2025'
								loading='lazy'
							></iframe>
						</div>
					)}
				</div>

				{/* Right Side: Text and Dates */}
				<div className='w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0'>
					<h1 className='text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-serif'>
						The Good Samaritan
					</h1>
					<p className='text-lg md:text-xl mb-8 leading-relaxed text-gray-300 font-sans'>
						Join us for our annual Heights Conference as we worship and hear
						from compelling guest speakers!
					</p>
					<ul className='space-y-4 mb-10 text-left max-w-md mx-auto lg:mx-0'>
						<li className='flex items-center text-gray-200'>
							<span className='text-[#C25020] mr-3'>•</span> Thursday, Sept. 4:
							6:30PM
						</li>
						<li className='flex items-center text-gray-200'>
							<span className='text-[#C25020] mr-3'>•</span> Friday, Sept. 5:
							6:30PM
						</li>
						<li className='flex items-center text-gray-200'>
							<span className='text-[#C25020] mr-3'>•</span> Saturday, Sept. 6:
							6:30PM
						</li>
						<li className='flex items-center text-gray-200'>
							<span className='text-[#C25020] mr-3'>•</span> Sunday, Sept. 7:
							9AM, 11AM, 5PM
						</li>
					</ul>
					<Link
						href='leadership' // Assuming it links to a speakers section; adjust as needed
						className='inline-block bg-[#C25020] text-white px-8 py-3 rounded-lg font-semibold uppercase tracking-wide hover:bg-[#A83E15] transition duration-300 shadow-md hover:shadow-lg'
					>
						Check out the Speakers
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ConferenceSection;
