"use client";

import Image from "next/image";
import React from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";

const Session6: React.FC = () => {
	return (
		<div className='relative'>
			{/* Hero Section with responsive height */}
			<section className='relative w-full bg-[#F5F5F5] min-h-[500px] md:min-h-[600px] lg:min-h-[700px]'>
				{/* Background Image */}
				<div className='absolute inset-0'>
					<Image
						src='/assets/church20.jpeg'
						alt='Join Our Community Banner'
						fill
						priority
						quality={90}
						className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-105'
					/>
					<div className='absolute inset-0 bg-gradient-to-b from-[#333333]/50 to-[#333333]/80 z-10' />
				</div>

				{/* Content Container */}
				<div className='relative z-20 container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 h-full flex items-center justify-center py-16'>
					<div className='text-center max-w-4xl w-full'>
						<h1 className='text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight drop-shadow-xl'>
							Step into
							<span className='relative inline-block mx-1'>
								<span className='text-[#C25020]'>the Place of Prayer God</span>
								<span className='absolute bottom-0 left-0 w-full h-1.5 bg-[#C25020]/50 rounded-full transform translate-y-1'></span>
							</span>
							Designed for You
						</h1>

						<p className='mt-6 text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md leading-relaxed'>
							Join us in the Prayer Hub — a space dedicated to seeking God's
							face, interceding for our city, and lifting up the needs of the
							nations. Whether in-person or online, you'll find a community
							hungry for God's presence, standing in faith, and believing for
							miracles. Come ready to pray, worship, and encounter His power in
							a deeper way.
						</p>

						<div className=' w-full mt-8 sm:mt-10  gap-3  flex justify-center'>
							<div className='grid grid-cols-1 sm:gap-4  md:grid-cols-2'>
								<Link href='/watch' passHref>
									<button className='px-6 sm:px-8 py-3 sm:py-4 bg-[#C25020] hover:bg-[#A23E18] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:scale-100 active:scale-95 shadow-lg hover:shadow-[#C25020]/40 flex items-center justify-center gap-2'>
										<PlayCircle className='w-5 h-5' />
										Watch a Past Sermon
									</button>
								</Link>
								<Link
									href='/eventss'
									passHref
									className='w-full flex justify-center'
								>
									<button className='px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-gray-200 hover:bg-gray-200/10 text-gray-200 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:scale-100 active:scale-95 shadow-lg flex items-center justify-center gap-2'>
										<ArrowRight className='w-5 h-5' />
										Plan Your Visit
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Session6;
