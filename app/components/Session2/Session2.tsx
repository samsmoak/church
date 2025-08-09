"use client";
import React, { useState, useEffect } from "react";

const Section2: React.FC = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	// Duplicate content for scrolling demonstration
	const rightContent = (
		<div className='space-y-8'>
			{/* Video */}
			<div>
				<div className='flex items-center mb-2'>
					<span className='text-orange-500 text-xl mr-2'>🔷</span>
					<h2 className='text-white text-lg font-bold'>Made to Multiply</h2>
				</div>
				{isMounted && (
					<iframe
						className='w-full h-[200px] md:h-[300px] lg:h-[400px]'
						src='https://www.youtube.com/embed/VF4WZJCg69o?controls=1&modestbranding=1&rel=0&showinfo=0'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						title='Made to Multiply'
					/>
				)}
			</div>

			{/* Text Below Video */}
			<div>
				<h3 className='text-white text-2xl font-bold mb-2'>
					The Multiply Initiative
				</h3>
				<p className='text-orange-500 mb-2'>
					Disciples. Leaders. Groups. Churches.
				</p>
				<p className='text-white mb-4'>
					The Multiply Initiative is a 16-month journey to multiply all God has
					given us for his glory and the good of others.
				</p>
				<button className='bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition duration-300'>
					Learn More
				</button>
			</div>
		</div>
	);

	return (
		<section className='bg-black text-white py-8 md:py-12'>
			<div className='container mx-auto px-4 flex flex-col lg:flex-row gap-8'>
				{/* Left Side: Sticky */}
				<div className='lg:w-1/3 lg:sticky lg:top-0 lg:self-start'>
					<h1 className='text-3xl md:text-4xl font-bold mb-4'>
						You need people who know you and know the Bible.
					</h1>
					<p className='mb-8'>
						You weren&apos;t meant to go through life alone. At Two Cities
						Church, we&apos;re here to help support, challenge, and encourage
						you as you navigate life, faith, and relationships.
					</p>
					<h2 className='text-orange-500 text-xl font-bold mb-4'>Join Us!</h2>
					<div className='space-y-6'>
						<div>
							<h3 className='font-bold'>Winston-Salem</h3>
							<p>Sundays 9AM, 11AM, 5PM</p>
							<p className='text-orange-500'>1001 N. Patterson Ave.</p>
							<p>Winston-Salem, NC 27101</p>
						</div>
						<div>
							<h3 className='font-bold'>Lexington</h3>
							<p>Sundays 9AM, 11AM</p>
							<p className='text-orange-500'>1405 Winston Road</p>
							<p>Lexington, NC 27295</p>
						</div>
						<div>
							<h3 className='font-bold'>Online</h3>
							<p>9AM, 11AM</p>
						</div>
					</div>
				</div>

				{/* Right Side: Scrollable with Duplicated Content */}
				<div className='lg:w-2/3 space-y-16'>
					{rightContent}
					{rightContent} {/* Duplicated for scrolling */}
					{rightContent} {/* Duplicated again to make it longer */}
				</div>
			</div>
		</section>
	);
};

export default Section2;
