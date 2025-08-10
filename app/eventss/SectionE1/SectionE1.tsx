"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import InfiniteScroller from "../InfiniteScroller/InfiniteScroller";
import { TypeAnimation } from "react-type-animation";

const HeroSection: React.FC = () => {
	return (
		<div className='w-full mt-24 min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
				{/* Left Content */}
				<div className='flex flex-col space-y-8 lg:space-y-12'>
					<div className='text-lg md:text-xl font-medium text-blue-800 italic'>
						"Where two or three gather in my name, there am I with them." -
						Matthew 18:20
					</div>

					<div className='space-y-4'>
						<div className='flex flex-col items-baseline gap-3'>
							<h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900'>
								Join Our
							</h1>
							<div className='text-4xl sm:text-5xl md:text-6xl font-bold text-orange-600'>
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

						<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900'>
							Grow in Faith Together
						</h2>
					</div>

					<p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
						Experience the joy of fellowship as we gather to worship, learn, and
						serve. Our events are designed to strengthen your relationship with
						God and connect you with a loving community of believers.
					</p>

					{/* Stats */}
					<div className='grid grid-cols-3 gap-4 mt-6'>
						<div className='bg-white p-4 rounded-lg shadow-sm text-center border border-blue-100'>
							<div className='text-2xl md:text-3xl font-bold text-blue-700'>
								500+
							</div>
							<div className='text-sm md:text-base text-gray-600'>
								Weekly Attendees
							</div>
						</div>
						<div className='bg-white p-4 rounded-lg shadow-sm text-center border border-blue-100'>
							<div className='text-2xl md:text-3xl font-bold text-blue-700'>
								50+
							</div>
							<div className='text-sm md:text-base text-gray-600'>
								Ministry Groups
							</div>
						</div>
						<div className='bg-white p-4 rounded-lg shadow-sm text-center border border-blue-100'>
							<div className='text-2xl md:text-3xl font-bold text-blue-700'>
								100+
							</div>
							<div className='text-sm md:text-base text-gray-600'>
								Annual Events
							</div>
						</div>
					</div>

					<div className='flex flex-col sm:flex-row gap-4 pt-4'>
						<Link href='/events/upcoming' passHref>
							<button className='px-8 py-3 bg-orange-500 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-rose-600/30'>
								View Upcoming Events
							</button>
						</Link>
						<Link href='/about' passHref>
							<button className='px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-300'>
								Learn About Our Ministries
							</button>
						</Link>
					</div>
				</div>

				{/* Right Content - Scroller */}
				<div className=''>
					<InfiniteScroller />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
