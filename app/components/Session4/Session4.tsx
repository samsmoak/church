"use client";
import Image from "next/image";
import React from "react";
import { ArrowRight, Users, Calendar, Handshake } from "lucide-react"; // Using lucide-react for modern icons

const Section4: React.FC = () => {
	const cards = [
		{
			id: 1,
			title: "1. Come this weekend.",
			description:
				"See for yourself who we are and what we're about. Stop by the Welcome Tent so we can meet you and answer any questions you have.",
			cta: "Let Us Know You're Coming",
			image: "/assets/church5.jpeg",
			alt: "People gathering at church service",
			icon: <Users className='w-8 h-8 text-[#C25020]' />,
		},
		{
			id: 2,
			title: "2. Attend The Weekender.",
			description:
				"The Weekender is where you learn who we are and how you can get connected through Community Groups and serving at Two Cities.",
			cta: "Learn More About The Weekender",
			image: "/assets/church11.jpeg",
			alt: "Group of people at Weekender event",
			icon: <Calendar className='w-8 h-8 text-[#C25020]' />,
		},
		{
			id: 3,
			title: "3. Connect with others.",
			description:
				"Community Groups help you know others and be known well enough to truly care for one another and fully live out the Gospel.",
			cta: "Learn More About Community Groups",
			image: "/assets/church7.jpeg",
			alt: "Community group gathering",
			icon: <Handshake className='w-8 h-8 text-[#C25020]' />,
		},
	];

	return (
		<section className='w-full bg-[#F5F5F5] text-[#333333] py-16 md:py-20 lg:py-24'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Heading */}
				<div className='text-center max-w-4xl mx-auto mb-16 lg:mb-20'>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6'>
						We don't just have a seat for you.
						<br />
						We have a{" "}
						<span className='relative inline-block'>
							<span className='relative z-10 text-[#C25020]'>place</span>
							<span className='absolute bottom-1 left-0 w-full h-2 bg-[#C25020]/30 rounded-md'></span>
						</span>{" "}
						for you.
					</h1>
					<div className='w-24 h-1 bg-[#C25020] mx-auto mt-8 rounded-full'></div>
				</div>

				{/* Cards Grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
					{cards.map((card) => (
						<div
							key={card.id}
							className='group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100'
						>
							{/* Image Container */}
							<div className='relative h-80 w-full overflow-hidden'>
								<Image
									src={card.image}
									alt={card.alt}
									className='object-cover transition-transform duration-500 group-hover:scale-105'
									height={1080}
									width={1920}
									priority
								/>
								<div className='absolute top-4 left-4 bg-white/90 rounded-full p-3 shadow-md'>
									{card.icon}
								</div>
							</div>

							{/* Content */}
							<div className='p-6 md:p-8'>
								<h2 className='text-xl md:text-2xl font-bold mb-4 text-[#C25020] flex items-center gap-2'>
									{card.title}
								</h2>
								<p className='text-gray-600 mb-6 leading-relaxed text-base'>
									{card.description}
								</p>
								<a
									href='#'
									className='inline-flex items-center text-[#C25020] hover:text-[#A23E18] font-medium transition-colors duration-300 group'
								>
									{card.cta}
									<ArrowRight className='h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300' />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Section4;
