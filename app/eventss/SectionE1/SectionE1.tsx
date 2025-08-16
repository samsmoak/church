"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import InfiniteScroller from "../InfiniteScroller/InfiniteScroller";
import { TypeAnimation } from "react-type-animation";

const HeroSection: React.FC = () => {
	return (
		<div className='relative mt-16 w-full min-h-[90vh] sm:min-h-screen bg-[#333333] py-8 sm:py-12 md:py-16 lg:py-20 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16'>
			{/* Background Image */}
			<div className='absolute inset-0'>
				<Image
					src='/assets/pray.jpg'
					alt='Community in prayer'
					fill
					className='object-cover opacity-10'
					quality={90}
					sizes='100vw'
					priority
				/>
			</div>

			{/* Gradient Overlay */}
			<div className='absolute inset-0 bg-gradient-to-b from-[#333333]/50 via-[#333333]/20 to-transparent' />

			<div className='relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center h-full'>
				{/* Left Content */}
				<div className='flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 text-gray-200 z-10'>
					<div className='text-sm xs:text-base sm:text-lg md:text-xl font-medium text-[#C25020] italic font-sans leading-snug'>
						"Where two or three gather in my name, there am I with them." -
						Matthew 18:20
					</div>

					<div className='space-y-2 sm:space-y-3 md:space-y-4'>
						<div className='flex flex-col items-baseline gap-1 sm:gap-2 md:gap-3'>
							<h1 className='text-2xl xs:text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-[3.5rem] font-extrabold text-white font-serif leading-tight sm:leading-tight md:leading-tight'>
								Join Our
							</h1>
							<div className='text-2xl xs:text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-[3.5rem] font-extrabold text-[#C25020] font-serif leading-tight sm:leading-tight md:leading-tight'>
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
									style={{
										display: "inline-block",
										minHeight: "1.2em", // Prevents layout shift during animation
									}}
									repeat={Infinity}
								/>
							</div>
						</div>

						<h2 className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold text-white font-serif leading-tight sm:leading-tight'>
							Grow in Faith Together
						</h2>
					</div>

					<p className='text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed sm:leading-loose max-w-lg'>
						Experience the joy of fellowship as we gather to worship, learn, and
						serve. Our events are designed to strengthen your relationship with
						God and connect you with a loving community of believers.
					</p>

					{/* Buttons */}
					<div className='flex flex-col xs:flex-row justify-start gap-3 sm:gap-4 pt-2 sm:pt-4'>
						<Link href='#' passHref>
							<button className='w-full xs:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-[#C25020] text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-[#A23E18] transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-[#C25020]/40 transform hover:scale-[1.02] active:scale-[0.98] cursor-not-allowed opacity-80'>
								View Upcoming Events
							</button>
						</Link>
						<Link href='/about' passHref>
							<button className='w-full xs:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-transparent border-2 border-gray-200 text-gray-200 text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-200/10 transition-all duration-300 flex items-center justify-center gap-2 shadow-md transform hover:scale-[1.02] active:scale-[0.98]'>
								Learn About Our Ministries
							</button>
						</Link>
					</div>
				</div>

				{/* Right Content - Scroller */}
				<div className='relative h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] mt-6 lg:mt-0'>
					<InfiniteScroller />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
