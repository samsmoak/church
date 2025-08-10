"use client";
import React, { useState, useEffect } from "react";

const Section2: React.FC = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	// Video content component
	const VideoContent = () => (
		<div className='space-y-8 w-full'>
			<div className='aspect-w-16 aspect-h-9'>
				{isMounted && (
					<iframe
						className='w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]'
						src='https://www.youtube.com/embed/VF4WZJCg69o?controls=1&modestbranding=1&rel=0&showinfo=0'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						title='Made to Multiply'
					/>
				)}
			</div>
			<div className='text-black'>
				<h3 className='text-2xl md:text-3xl font-bold mb-2'>
					The Multiply Initiative
				</h3>
				<p className='text-orange-500 mb-2 font-medium'>
					Disciples. Leaders. Groups. Churches.
				</p>
				<p className='mb-4 text-gray-700'>
					The Multiply Initiative is a 16-month journey to multiply all God has
					given us for his glory and the good of others.
				</p>
				<button className='bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300'>
					Learn More
				</button>
			</div>
		</div>
	);

	return (
		<section className='py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10'>
					{/* Left Side - Sticky Content */}
					<div className='lg:col-span-5 bg-black text-white p-6 sm:p-8 md:p-10 rounded-lg lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto'>
						<div className='space-y-6'>
							<h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
								You need people who know you and know the Bible.
							</h1>
							<p className='text-gray-300'>
								You weren't meant to go through life alone. At Two Cities
								Church, we're here to help support, challenge, and encourage you
								as you navigate life, faith, and relationships.
							</p>

							<div className='space-y-2'>
								<h2 className='text-orange-500 text-xl font-bold'>Join Us!</h2>

								<div className='space-y-4'>
									<div className='bg-gray-900 p-4 rounded-lg'>
										<h3 className='font-bold text-lg'>Winston-Salem</h3>
										<p className='text-gray-300'>Sundays 9AM, 11AM, 5PM</p>
										<p className='text-orange-500'>1001 N. Patterson Ave.</p>
										<p className='text-gray-300'>Winston-Salem, NC 27101</p>
									</div>

									<div className='bg-gray-900 p-4 rounded-lg'>
										<h3 className='font-bold text-lg'>Lexington</h3>
										<p className='text-gray-300'>Sundays 9AM, 11AM</p>
										<p className='text-orange-500'>1405 Winston Road</p>
										<p className='text-gray-300'>Lexington, NC 27295</p>
									</div>

									<div className='bg-gray-900 p-4 rounded-lg'>
										<h3 className='font-bold text-lg'>Online</h3>
										<p className='text-gray-300'>9AM, 11AM</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Side - Scrollable Content */}
					<div className='lg:col-span-7 space-y-8 md:space-y-10 lg:space-y-12'>
						<VideoContent />
						<VideoContent />
						<VideoContent />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section2;
