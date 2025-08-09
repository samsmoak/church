import React from "react";
import Image from "next/image";

interface Person {
	image: string;
	title: string;
	description: string;
}

const persons: Person[] = [
	{
		image:
			"https://cdn.pixabay.com/photo/2016/11/22/21/42/woman-1850703_1280.jpg",
		title: "What is a  gathering  like?",
		description:
			"Two Cities Church exists to see every man, woman, and child in Winston-Salem have repeated opportunities to see, hear, and respond to the gospel. Every week, you will find passionate and authentic worship, gospel-centered preaching, and a vibrant kids ministry. Whether you’ve been around church all of your life or this is your first time stepping foot in a church, we want to make your experience welcoming.",
	},
	{
		image:
			"https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg",
		title: "What is a  gathering  like?",
		description:
			"Two Cities Church exists to see every man, woman, and child in Winston-Salem have repeated opportunities to see, hear, and respond to the gospel. Every week, you will find passionate and authentic worship, gospel-centered preaching, and a vibrant kids ministry. Whether you’ve been around church all of your life or this is your first time stepping foot in a church, we want to make your experience welcoming.",
	},
	{
		image:
			"https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg",
		title: "What is a  gathering  like?",
		description:
			"Two Cities Church exists to see every man, woman, and child in Winston-Salem have repeated opportunities to see, hear, and respond to the gospel. Every week, you will find passionate and authentic worship, gospel-centered preaching, and a vibrant kids ministry. Whether you’ve been around church all of your life or this is your first time stepping foot in a church, we want to make your experience welcoming.",
	},
];

const Sectionintro3: React.FC = () => {
	return (
		<section className='py-10 px-4 md:px-8 lg:px-16 bg-white'>
			<div className='max-w-6xl mx-auto space-y-16'>
				{persons.map((item, index) => (
					<div
						key={index}
						className='flex flex-col md:flex-row items-center gap-8'
					>
						<div className='relative w-full md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden shadow-md'>
							<Image
								src={item.image}
								alt={item.title}
								fill
								className='object-cover'
							/>
						</div>
						<div className='w-full md:w-1/2'>
							<h2 className='text-3xl font-bold mb-2 relative inline-block'>
								{item.title}
								<span className='absolute bottom-0 left-0 w-full h-1 bg-orange-500'></span>
							</h2>
							<p className='text-gray-700 leading-relaxed'>
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Sectionintro3;
