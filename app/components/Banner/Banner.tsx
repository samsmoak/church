// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";

// const PurposeBanner: React.FC = () => {
// 	const [rotation, setRotation] = useState(0);
// 	const [isMounted, setIsMounted] = useState(false);

// 	useEffect(() => {
// 		setIsMounted(true);

// 		const handleScroll = () => {
// 			setRotation(window.scrollY / 5);
// 		};

// 		window.addEventListener("scroll", handleScroll);
// 		return () => window.removeEventListener("scroll", handleScroll);
// 	}, []);

// 	return (
// 		<section className='relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden '>
// 			{/* YouTube Video Embed - Direct iframe implementation */}
// 			{isMounted && (
// 				<div className='absolute w-full h-full'>
// 					<Image
// 						src='/assets/church38.jpeg'
// 						alt='church38'
// 						width={1280}
// 						height={720}
// 						className='object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110'
// 						priority
// 					/>
// 				</div>
// 			)}

// 			{/* Dark Overlay for Text Readability */}
// 			{/* <div className='absolute inset-0 bg-black bg-opacity-60'></div> */}

// 			{/* Content Overlay */}
// 			<div className='relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12'>
// 				<div className='flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl gap-6 sm:gap-8 md:gap-10 lg:gap-12'>
// 					{/* Text Section */}
// 					<div className='lg:w-1/2 text-center lg:text-left'>
// 						<h1 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-3 sm:mb-4 font-serif transition-transform duration-700 group-hover:-translate-y-2'>
// 							Revival is Here. Restoration is Now.
// 						</h1>
// 						<p className='text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-md mx-auto lg:mx-0 opacity-85 group-hover:opacity-100 transition-opacity duration-700'>
// 							522 Church is a Spirit-filled revival hub in Winston-Salem, North
// 							Carolina — where lives are changed, the captives are set free, and
// 							Jesus is lifted high.
// 						</p>
// 					</div>

// 					{/* Buttons Section */}
// 					<div className='lg:w-1/2 flex flex-col sm:flex-row items-center lg:items-end justify-center lg:justify-end space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-4'>
// 						<button className='relative px-4 sm:px-6 py-2 sm:py-3 bg-[#C25020] text-white font-semibold rounded-xl hover:bg-[#A23E18] transition-all duration-500 shadow-lg hover:shadow-[#C25020]/60 w-full sm:w-auto group overflow-hidden'>
// 							<span className='absolute inset-0 bg-gradient-to-r from-[#C25020]/0 via-[#C25020]/40 to-[#C25020]/0 group-hover:via-[#C25020]/60 group-hover:to-[#C25020]/20 transition-all duration-500'></span>
// 							<span className='relative z-10 group-hover:scale-105 transition-transform duration-500'>
// 								Plan Your Visit
// 							</span>
// 						</button>
// 						<button className='relative px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-[#C25020] text-[#C25020] font-semibold rounded-xl hover:bg-[#C25020]/15 hover:text-white transition-all duration-500 shadow-lg hover:shadow-[#C25020]/60 w-full sm:w-auto group overflow-hidden'>
// 							<span className='absolute inset-0 bg-gradient-to-r from-[#C25020]/0 via-[#C25020]/30 to-[#C25020]/0 group-hover:via-[#C25020]/50 group-hover:to-[#C25020]/15 transition-all duration-500'></span>
// 							<span className='relative z-10 group-hover:scale-105 transition-transform duration-500'>
// 								Watch Live
// 							</span>
// 						</button>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Rotating Logo */}
// 			<div className='absolute bottom-4 right-4 z-20'>
// 				{/* <svg
// 					className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'
// 					viewBox='0 0 100 100'
// 					style={{ transform: `rotate(${rotation}deg)` }}
// 				>
// 					<circle cx='50' cy='50' r='50' fill='#f97316' />
// 					<path
// 						id='curve'
// 						d='M10 50a40 40 0 1180 0 40 40 0 11-80 0'
// 						fill='none'
// 					/>
// 					<text fill='white' fontSize='8' fontWeight='bold'>
// 						<textPath xlinkHref='#curve'>
// 							FOR THE WORLD • WINSTON MINISTRY
// 						</textPath>
// 					</text>
// 					<polygon points='45,40 55,40 60,50 50,60 40,50' fill='white' />
// 				</svg> */}

// 				<div className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:h-40 lg:w-40 rounded-full overflow-hidden'>
// 					<Image
// 						src='/assets/churchlogo.jpg'
// 						alt='Community and Purpose Banner'
// 						width={1280}
// 						height={720}
// 						className='object-cover w-full brightness-50'
// 						style={{ transform: `rotate(${rotation}deg)` }}
// 					/>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default PurposeBanner;

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const PurposeBanner: React.FC = () => {
	const [rotation, setRotation] = useState(0);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);

		const handleScroll = () => {
			setRotation(window.scrollY / 5);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className='relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[650px] overflow-hidden group'>
			{/* Background Image */}
			{isMounted && (
				<div className='absolute w-full h-full'>
					<Image
						src='/assets/church38.jpeg'
						alt='church38'
						width={1280}
						height={720}
						className='object-cover w-full h-full transition-transform duration-800 group-hover:scale-105'
						priority
					/>
				</div>
			)}
			{/* Gradient Overlay */}
			<div className='absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/75 via-[#333333]/45 to-transparent group-hover:from-[#1A1A1A]/65 group-hover:via-[#333333]/35 transition-all duration-800' />

			{/* <iframe
				src='https://www.youtube.com/embed/nQWFzMvCfLE?autoplay=1&mute=1&loop=1&playlist=nQWFzMvCfLE&controls=0&modestbranding=1&rel=0&showinfo=0'
				className='w-full h-full'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
				title='Church Purpose Video'
			/> */}

			{/* Content Overlay */}
			<div className='relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12'>
				<div className='flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl gap-6 sm:gap-8 md:gap-10 lg:gap-12'>
					{/* Text Section */}
					<div className='lg:w-1/2 text-center lg:text-left'>
						<h1 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-3 sm:mb-4 font-serif transition-transform duration-600 group-hover:-translate-y-1'>
							Revival is Here. Restoration is Now.
						</h1>
						<p className='text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-md mx-auto lg:mx-0 opacity-90 group-hover:opacity-100 transition-opacity duration-600'>
							522 Church is a Spirit-filled revival hub in Winston-Salem, North
							Carolina — where lives are changed, the captives are set free, and
							Jesus is lifted high.
						</p>
					</div>

					{/* Buttons Section */}
					<div className='lg:w-1/2 flex flex-col sm:flex-row items-center lg:items-end justify-center lg:justify-end space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-4'>
						<Link href='/introduction' passHref>
							<button className='relative px-4 sm:px-6 py-2 sm:py-3 bg-[#C25020] text-white font-semibold rounded-xl hover:bg-[#A23E18] transition-all duration-400 shadow-md hover:shadow-[#C25020]/50 w-full sm:w-auto group overflow-hidden'>
								<span className='absolute inset-0 bg-gradient-to-r from-[#C25020]/0 via-[#C25020]/30 to-[#C25020]/0 group-hover:via-[#C25020]/50 group-hover:to-[#C25020]/15 transition-all duration-400'></span>
								<span className='relative z-10 group-hover:scale-103 transition-transform duration-400'>
									Plan Your Visit
								</span>
							</button>
						</Link>
						<Link href='/watch' passHref>
							<button className='relative px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-[#C25020] text-[#C25020] font-semibold rounded-xl hover:bg-[#C25020]/10 hover:text-white transition-all duration-400 shadow-md hover:shadow-[#C25020]/50 w-full sm:w-auto group overflow-hidden'>
								<span className='absolute inset-0 bg-gradient-to-r from-[#C25020]/0 via-[#C25020]/20 to-[#C25020]/0 group-hover:via-[#C25020]/40 group-hover:to-[#C25020]/10 transition-all duration-400'></span>
								<span className='relative z-10 group-hover:scale-103 transition-transform duration-400'>
									Watch Live
								</span>
							</button>
						</Link>
					</div>
				</div>
			</div>

			{/* Rotating Logo */}
			<div className='absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-20'>
				{/* <svg
					className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'
					viewBox='0 0 100 100'
					style={{ transform: `rotate(${rotation}deg)` }}
				>
					<circle cx='50' cy='50' r='50' fill='#f97316' />
					<path
						id='curve'
						d='M10 50a40 40 0 1180 0 40 40 0 11-80 0'
						fill='none'
					/>
					<text fill='white' fontSize='8' fontWeight='bold'>
						<textPath xlinkHref='#curve'>
							FOR THE WORLD • WINSTON MINISTRY
						</textPath>
					</text>
					<polygon points='45,40 55,40 60,50 50,60 40,50' fill='white' />
				</svg> */}
				<div className='w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-3 border-[#C25020]/70 hover:border-[#C25020]/90 transition-all duration-400 shadow-md hover:shadow-[#C25020]/60 group'>
					<Image
						src='/assets/churchlogo.jpg'
						alt='Community and Purpose Banner'
						width={1280}
						height={720}
						className='object-cover w-full h-full group-hover:scale-110 transition-transform duration-400'
						style={{ transform: `rotate(${rotation}deg)` }}
					/>
				</div>
			</div>
		</section>
	);
};

export default PurposeBanner;
