"use client";
import Image from "next/image";
import React from "react";

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
		},
		{
			id: 2,
			title: "2. Attend The Weekender.",
			description:
				"The Weekender is where you learn who we are and how you can get connected through Community Groups and serving at Two Cities.",
			cta: "Learn More About The Weekender",
			image: "/assets/church11.jpeg",
			alt: "Group of people at Weekender event",
		},
		{
			id: 3,
			title: "3. Connect with others.",
			description:
				"Community Groups help you know others and be known well enough to truly care for one another and fully live out the Gospel.",
			cta: "Learn More About Community Groups",
			image: "/assets/church7.jpeg",
			alt: "Community group gathering",
		},
	];

	return (
		<section className='w-full bg-gray-900 text-white py-16 md:py-20 lg:py-24'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Heading */}
				<div className='text-center max-w-4xl mx-auto mb-16 lg:mb-20'>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6'>
						We don't just have a seat for you.
						<br />
						We have a{" "}
						<span className='relative inline-block'>
							<span className='relative z-10'>place</span>
							<span className='absolute bottom-0 left-0 w-full h-3 bg-orange-500 opacity-80 -z-0'></span>
						</span>{" "}
						for you.
					</h1>
					<div className='w-24 h-1 bg-orange-500 mx-auto mt-8'></div>
				</div>

				{/* Cards Grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
					{cards.map((card) => (
						<div
							key={card.id}
							className='group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
						>
							{/* Image Container */}
							<div className='relative h-80 w-full overflow-hidden'>
								{" "}
								{/* Increased from h-60 to h-80 */}
								<Image
									src={card.image}
									alt={card.alt}
									className='object-cover transition-transform duration-500 group-hover:scale-105'
									height={1080}
									width={1920}
									priority
								/>
							</div>

							{/* Content - Kept exactly the same */}
							<div className='p-6 md:p-8'>
								<h2 className='text-xl md:text-2xl font-bold mb-4 text-orange-400'>
									{card.title}
								</h2>
								<p className='text-gray-300 mb-6 leading-relaxed'>
									{card.description}
								</p>
								<a
									href='#'
									className='inline-flex items-center text-orange-400 hover:text-orange-300 font-medium transition-colors'
								>
									{card.cta}
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5 ml-2'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
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
