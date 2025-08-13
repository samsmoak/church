"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import InfiniteScroller from "../InfiniteScroller/InfiniteScroller";
import { TypeAnimation } from "react-type-animation";

const HeroSection: React.FC = () => {
	return (
		<div className='relative mt-16 w-full min-h-screen bg-[#333333] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12'>
			{/* Background Image */}
			<div className='absolute inset-0'>
				<Image
					src='/assets/pray.jpg'
					alt='Community in prayer'
					fill
					className='object-cover opacity-10'
					quality={85}
					sizes='100vw'
					priority
				/>
			</div>
			{/* Gradient Overlay */}
			<div className='absolute inset-0 bg-gradient-to-b from-[#333333]/50 to-transparent' />

			<div className='relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center'>
				{/* Left Content */}
				<div className='flex flex-col space-y-6 sm:space-y-8 lg:space-y-10 text-gray-200'>
					<div className='text-base sm:text-lg md:text-xl font-medium text-[#C25020] italic font-sans'>
						"Where two or three gather in my name, there am I with them." -
						Matthew 18:20
					</div>

					<div className='space-y-3 sm:space-y-4'>
						<div className='flex flex-col items-baseline gap-2 sm:gap-3'>
							<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-serif'>
								Join Our
							</h1>
							<div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#C25020] font-serif'>
								<TypeAnimation
									sequence={[
										"Worship Nights",
										1500,
										"Bible Studies",
										1500,
										"Prayer Meetings",
										1500,
										"Youth Gatherings",
										1500,
										"Community Outreach",
										1500,
									]}
									wrapper='span'
									speed={50}
									style={{ display: "inline-block" }}
									repeat={Infinity}
								/>
							</div>
						</div>

						<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-serif'>
							Grow in Faith Together
						</h2>
					</div>

					<p className='text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg'>
						Experience the joy of fellowship as we gather to worship, learn, and
						serve. Our events are designed to strengthen your relationship with
						God and connect you with a loving community of believers.
					</p>

					{/* Stats */}
					{/* <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6'>
						<div className='bg-[#333333]/80 p-3 sm:p-4 rounded-lg shadow-md text-center border border-[#C25020]/30 hover:shadow-[#C25020]/40 transition-all duration-300 group'>
							<div className='text-xl sm:text-2xl md:text-3xl font-bold text-[#C25020] group-hover:scale-105 transition-transform duration-300'>
								500+
							</div>
							<div className='text-xs sm:text-sm md:text-base text-gray-300'>
								Weekly Attendees
							</div>
						</div>
						<div className='bg-[#333333]/80 p-3 sm:p-4 rounded-lg shadow-md text-center border border-[#C25020]/30 hover:shadow-[#C25020]/40 transition-all duration-300 group'>
							<div className='text-xl sm:text-2xl md:text-3xl font-bold text-[#C25020] group-hover:scale-105 transition-transform duration-300'>
								50+
							</div>
							<div className='text-xs sm:text-sm md:text-base text-gray-300'>
								Ministry Groups
							</div>
						</div>
						<div className='bg-[#333333]/80 p-3 sm:p-4 rounded-lg shadow-md text-center border border-[#C25020]/30 hover:shadow-[#C25020]/40 transition-all duration-300 group'>
							<div className='text-xl sm:text-2xl md:text-3xl font-bold text-[#C25020] group-hover:scale-105 transition-transform duration-300'>
								100+
							</div>
							<div className='text-xs sm:text-sm md:text-base text-gray-300'>
								Annual Events
							</div>
						</div>
					</div> */}

					<div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4'>
						<Link href='#' passHref>
							<button className='px-6 cursor-not-allowed sm:px-8 py-2 sm:py-3 bg-[#C25020] text-white font-semibold rounded-lg hover:bg-[#A23E18] transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-[#C25020]/40 group'>
								View Upcoming Events
							</button>
						</Link>
						<Link href='/about' passHref>
							<button className='px-6 cursor-pointer sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-gray-200 text-gray-200 font-semibold rounded-lg hover:bg-gray-200/10 transition-all duration-300 flex items-center justify-center gap-2 shadow-md group'>
								Learn About Our Ministries
							</button>
						</Link>
					</div>
				</div>

				{/* Right Content - Scroller */}
				<div className='relative md:h-[500px] lg:h-[600px]'>
					<InfiniteScroller />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
