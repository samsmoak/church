"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
	FaMobileAlt,
	FaEnvelope,
	FaDollarSign,
	FaUniversity,
	FaFacebookF,
	FaInstagram,
	FaYoutube,
	FaTwitter,
} from "react-icons/fa";

const GivePage: React.FC = () => {
	return (
		<div className=' font-sans'>
			{/* Info Section */}
			{/* <section className='bg-[#1A1A1A] py-12 sm:py-16 md:py-20 lg:py-24 text-center'>
				<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
					<p className='text-xs sm:text-sm md:text-base uppercase tracking-wider text-[#C25020] mb-2 sm:mb-3 md:mb-4 font-sans'>
						About Your Giving
					</p>
					<h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-serif'>
						Here are a few things you may like to know about your giving to Two
						Cities Church:
					</h2>
					<div className='grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10'>
						<div className='text-left flex items-start'>
							<div className='bg-[#C25020] text-white rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0'>
								<FaUniversity className='w-4 sm:w-5 h-4 sm:h-5' />
							</div>
							<div>
								<h3 className='font-bold text-base sm:text-lg text-white'>
									Your giving is confidential.
								</h3>
								<p className='text-gray-300 text-sm sm:text-base'>
									Your name or amount that you give never goes beyond our
									financial department.
								</p>
							</div>
						</div>
						<div className='text-left flex items-start'>
							<div className='bg-[#C25020] text-white rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0'>
								<FaUniversity className='w-4 sm:w-5 h-4 sm:h-5' />
							</div>
							<div>
								<h3 className='font-bold text-base sm:text-lg text-white'>
									Your giving is 100% tax deductible.
								</h3>
								<p className='text-gray-300 text-sm sm:text-base'>
									We are a qualified 501c3 organization.
								</p>
							</div>
						</div>
						<div className='text-left flex items-start'>
							<div className='bg-[#C25020] text-white rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0'>
								<FaUniversity className='w-4 sm:w-5 h-4 sm:h-5' />
							</div>
							<div>
								<h3 className='font-bold text-base sm:text-lg text-white'>
									You can check your giving at any time.
								</h3>
								<p className='text-gray-300 text-sm sm:text-base'>
									Through the year, you can check your giving statement online,
									and you will receive year end giving statements.
								</p>
							</div>
						</div>
						<div className='text-left flex items-start'>
							<div className='bg-[#C25020] text-white rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0'>
								<FaUniversity className='w-4 sm:w-5 h-4 sm:h-5' />
							</div>
							<div>
								<h3 className='font-bold text-base sm:text-lg text-white'>
									Your giving is stewarded well.
								</h3>
								<p className='text-gray-300 text-sm sm:text-base'>
									You can be confident your gifts are wisely managed so that
									every dollar is maximized for ministry and mission.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			{/* Ways to Give Section */}
			<section className='relative w-full h-auto min-h-[450px] sm:min-h-[500px] md:h-[550px] lg:h-[650px] flex flex-col md:flex-row'>
				{/* Left Content Section */}
				<div className='relative w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-full bg-[#333333]'>
					<div className='absolute inset-0'>
						<Image
							src='/assets/church57.jpeg'
							alt='Church community gathering'
							fill
							className='object-cover opacity-10'
							quality={85}
							sizes='(max-width: 768px) 100vw, 50vw'
						/>
					</div>
					<div className='relative h-full flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 text-gray-200'>
						<p className='text-xs sm:text-sm md:text-base uppercase tracking-wider text-[#C25020] mb-2 sm:mb-3 md:mb-4 font-sans'>
							Giving Platforms
						</p>
						<h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6 sm:mb-8 font-serif'>
							Ways To Give
						</h2>
						<div className='space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg'>
							<div className='flex items-center group'>
								<FaMobileAlt className='w-5 sm:w-6 h-5 sm:h-6 mr-3 sm:mr-4 text-[#C25020] group-hover:scale-110 transition-transform duration-300' />
								<span>Zelle 302-397-1397</span>
							</div>
							<div className='flex items-center group'>
								<FaEnvelope className='w-5 sm:w-6 h-5 sm:h-6 mr-3 sm:mr-4 text-[#C25020] group-hover:scale-110 transition-transform duration-300' />
								<span>PayPal Stephenftsm@icloud.com</span>
							</div>
							<div className='flex items-center group'>
								<FaDollarSign className='w-5 sm:w-6 h-5 sm:h-6 mr-3 sm:mr-4 text-[#C25020] group-hover:scale-110 transition-transform duration-300' />
								<span>CashApp $ftsm522</span>
							</div>
							<div className='flex items-center group'>
								<FaUniversity className='w-5 sm:w-6 h-5 sm:h-6 mr-3 sm:mr-4 text-[#C25020] group-hover:scale-110 transition-transform duration-300' />
								<span>Check / Bank Transfer</span>
							</div>
						</div>
						<div className='mt-6 sm:mt-8 flex flex-wrap items-center justify-start text-xs sm:text-sm gap-2 sm:gap-3'>
							<Link
								href='https://www.ftsm522.com'
								className='px-3 py-1 bg-[#C25020] text-white font-semibold rounded-lg hover:bg-[#A23E18] transition-all duration-300 flex items-center justify-center gap-1 shadow-md hover:shadow-[#C25020]/40 group'
							>
								www.ftsm522.com
							</Link>
							<span className='mx-2 sm:mx-3 text-gray-200'>|</span>
							<Link
								href='https://www.instagram.com/FTSM522/'
								className='px-3 py-1 bg-[#C25020] text-white font-semibold rounded-lg hover:bg-[#A23E18] transition-all duration-300 flex items-center justify-center gap-1 shadow-md hover:shadow-[#C25020]/40 group'
							>
								@FTSM522
							</Link>
							<Link
								href='https://www.facebook.com/FTSM522/'
								className='p-2 bg-[#C25020] text-white rounded-full hover:bg-[#A23E18] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-[#C25020]/40 group'
							>
								<FaFacebookF className='w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform duration-300' />
							</Link>
							<Link
								href='https://www.instagram.com/FTSM522/'
								className='p-2 bg-[#C25020] text-white rounded-full hover:bg-[#A23E18] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-[#C25020]/40 group'
							>
								<FaInstagram className='w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform duration-300' />
							</Link>
							<Link
								href='https://www.youtube.com/'
								className='p-2 bg-[#C25020] text-white rounded-full hover:bg-[#A23E18] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-[#C25020]/40 group'
							>
								<FaYoutube className='w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform duration-300' />
							</Link>
							<Link
								href='https://x.com/'
								className='p-2 bg-[#C25020] text-white rounded-full hover:bg-[#A23E18] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-[#C25020]/40 group'
							>
								<FaTwitter className='w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform duration-300' />
							</Link>
						</div>
					</div>
				</div>
				{/* Right Image Section */}
				<div className='relative w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-full'>
					<Image
						src='/assets/church34.jpeg'
						alt='Community in prayer'
						fill
						className='object-cover transition-transform duration-500 group-hover:scale-105'
						quality={85}
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
					<div className='absolute inset-0 bg-gradient-to-l from-[#333333]/30 to-transparent' />
				</div>
			</section>
		</div>
	);
};

export default GivePage;
