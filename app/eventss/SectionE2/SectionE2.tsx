import Image from "next/image";
import React from "react";

const SectionE2: React.FC = () => {
	return (
		<div className='w-full bg-blue-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10'>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] text-center font-serif'>
					Events & Conferences
				</h2>
				<p className='text-base sm:text-lg md:text-xl text-gray-600 text-center mt-3 sm:mt-4 mb-10 sm:mb-12'>
					Gatherings that ignite revival, equip believers, and glorify Jesus.
				</p>

				<div className='text-center text-gray-400 text-xl sm:text-2xl mb-6 sm:mb-8'>
					⸻
				</div>

				{/* Fruit Conference */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center mb-10 sm:mb-12'>
					<div className='order-2 md:order-1'>
						<h3 className='text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-serif'>
							Fruit Conference
						</h3>
						<p className='text-[#C25020] text-lg sm:text-xl font-medium'>
							– May
						</p>
						<p className='text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 leading-relaxed'>
							A powerful annual gathering focused on character building and
							spiritual maturity. Through teaching, worship, and ministry, we
							address the fruit of the Spirit (Galatians 5:22–23) and equip
							believers to live out their faith with love, joy, peace, and
							integrity. It’s a time of deep discipleship and personal growth.
						</p>
					</div>
					<div className='order-1 md:order-2'>
						<Image
							src='/assets/church49.jpeg'
							alt='Fruit Conference - Crowd raising hands in worship'
							width={600}
							height={400}
							className='rounded-xl shadow-md object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] transition-transform duration-500 hover:scale-105'
						/>
					</div>
				</div>

				<div className='text-center text-gray-400 text-xl sm:text-2xl mb-6 sm:mb-8'>
					⸻
				</div>

				{/* Spirit Conference */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center mb-10 sm:mb-12'>
					<div className='order-1'>
						<Image
							src='/assets/church30.jpeg'
							alt='Spirit Conference - Crowd with arms raised in praise'
							width={600}
							height={400}
							className='rounded-xl shadow-md object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] transition-transform duration-500 hover:scale-105'
						/>
					</div>
					<div className='order-2'>
						<h3 className='text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-serif'>
							Spirit Conference
						</h3>
						<p className='text-[#C25020] text-lg sm:text-xl font-medium'>
							– November or December
						</p>
						<p className='text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 leading-relaxed'>
							An atmosphere charged with the presence of God. This conference
							focuses on the person, power, and gifts of the Holy Spirit. Expect
							prophetic ministry, impartation, and equipping sessions that
							empower you to walk in the supernatural and fulfill your divine
							calling.
						</p>
					</div>
				</div>

				<div className='text-center text-gray-400 text-xl sm:text-2xl mb-6 sm:mb-8'>
					⸻
				</div>

				{/* 21 Days of Fasting & Prayer */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center mb-10 sm:mb-12'>
					<div className='order-2 md:order-1'>
						<h3 className='text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-serif'>
							21 Days of Fasting & Prayer
						</h3>
						<p className='text-[#C25020] text-lg sm:text-xl font-medium'>
							– January
						</p>
						<p className='text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 leading-relaxed'>
							The first 21 days of the year are set apart for fasting, prayer,
							and seeking the face of God. This is our time to realign with His
							will, break spiritual barriers, and position ourselves for the
							year ahead. Each day includes prayer points, corporate gatherings,
							and personal devotion challenges.
						</p>
					</div>
					<div className='order-1 md:order-2'>
						<Image
							src='/assets/church71.jpg'
							alt='21 Days of Fasting & Prayer - Group raising hands in prayer'
							width={600}
							height={400}
							className='rounded-xl shadow-md object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] transition-transform duration-500 hover:scale-105'
						/>
					</div>
				</div>

				<div className='text-center text-gray-400 text-xl sm:text-2xl mb-6 sm:mb-8'>
					⸻
				</div>

				{/* Night with the King */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center'>
					<div className='order-1'>
						<Image
							src='/assets/church74.jpg'
							alt='Night with the King - Church with fireworks at night'
							width={600}
							height={400}
							className='rounded-xl shadow-md object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] transition-transform duration-500 hover:scale-105'
						/>
					</div>
					<div className='order-2'>
						<h3 className='text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-serif'>
							Night with the King
						</h3>
						<p className='text-[#C25020] text-lg sm:text-xl font-medium'>
							– December 31st
						</p>
						<p className='text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 leading-relaxed'>
							Our New Year’s Eve encounter — a night of worship, prophecy,
							thanksgiving, and fresh vision for the year ahead. We cross over
							into the new year in the presence of the King, declaring His
							promises and dedicating the year to His glory.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionE2;
