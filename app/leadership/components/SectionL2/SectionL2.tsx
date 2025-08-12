"use client";

import Image from "next/image";
import React from "react";
import { User } from "lucide-react"; // Using lucide-react for modern icons
import { elders, members, pastors } from "../../data";

interface Person {
	image: string;
	domain: string;
	name: string;
}

const Section2: React.FC = () => {
	return (
		<div className='bg-[#F5F5F5]'>
			<section className='py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16'>
				<h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-10 text-[#333333] tracking-wide font-sans'>
					Our Pastors
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto'>
					{pastors.map((person, index) => (
						<div
							key={index}
							className='group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
						>
							<div className='relative h-64 w-full'>
								<Image
									src={person.image}
									alt={`${person.name}'s portrait`}
									fill
									className='object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
									priority={index < 4}
								/>
								<div className='absolute top-3 left-3 bg-white/90 rounded-full p-2 shadow-sm'>
									<User className='w-5 h-5 text-[#C25020]' />
								</div>
							</div>
							<div className='p-5 text-center bg-white'>
								<h3 className='text-lg capitalize font-semibold text-[#333333] font-serif'>
									{person.name}
								</h3>
								<p className='text-sm capitalize text-[#C25020] font-sans mt-1 tracking-wide'>
									{person.domain}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* <section className='py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 border-t border-[#C25020]/10'>
				<h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-10 text-[#333333] tracking-wide font-sans'>
					Our Elders
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto'>
					{elders.map((person, index) => (
						<div
							key={index}
							className='group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
						>
							<div className='relative h-64 w-full'>
								<Image
									src={person.image}
									alt={`${person.name}'s portrait`}
									fill
									className='object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
									priority={index < 4}
								/>
								<div className='absolute top-3 left-3 bg-white/90 rounded-full p-2 shadow-sm'>
									<User className='w-5 h-5 text-[#C25020]' />
								</div>
							</div>
							<div className='p-5 text-center bg-white'>
								<h3 className='text-lg capitalize font-semibold text-[#333333] font-serif'>
									{person.name}
								</h3>
								<p className='text-sm text-[#C25020] font-sans mt-1 tracking-wide'>
									{person.domain}
								</p>
							</div>
						</div>
					))}
				</div>
			</section> */}

			<section className='py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 border-t border-[#C25020]/10'>
				<h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-10 text-[#333333] tracking-wide font-sans'>
					Our Members
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto'>
					{members.map((person, index) => (
						<div
							key={index}
							className='group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
						>
							<div className='relative h-64 w-full'>
								<Image
									src={person.image}
									alt={`${person.name}'s portrait`}
									fill
									className='object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
									priority={index < 4}
								/>
								<div className='absolute top-3 left-3 bg-white/90 rounded-full p-2 shadow-sm'>
									<User className='w-5 h-5 text-[#C25020]' />
								</div>
							</div>
							<div className='p-5 text-center bg-white'>
								<h3 className='text-lg capitalize font-semibold text-[#333333] font-serif'>
									{person.name}
								</h3>
								<p className='text-sm capitalize text-[#C25020] font-sans mt-1 tracking-wide'>
									{person.domain}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Section2;
