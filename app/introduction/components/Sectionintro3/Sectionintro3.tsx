"use client";
import React from "react";
import Image from "next/image";
import { Music, BookOpen, Users } from "lucide-react"; // Using lucide-react for modern icons

interface Person {
	image: string;
	title: string;
	description: string;
	icon: React.ReactNode; // Added icon property for each item
}

const persons: Person[] = [
	{
		image: "/assets/church8.jpeg",
		title: "What is a gathering like?",
		description:
			"522Church exists to see every man, woman, and child in Winston-Salem have repeated opportunities to see, hear, and respond to the gospel. Every week, you will find passionate and authentic worship, gospel-centered preaching, and a vibrant kids ministry. Whether you’ve been around church all of your life or this is your first time stepping foot in a church, we want to make your experience welcoming.",
		icon: <Users className='w-8 h-8 text-[#C25020]' />,
	},
	{
		image: "/assets/church1.jpeg",
		title: "What type of music do you sing?",
		description:
			"At 522Church, every gathering is filled with music rooted in God’s Word and centered on His character. Our desire is that everyone who attends our worship services leaves with a deep sense of awe and wonder at all Jesus has done for us. We are committed to singing psalms, hymns, and spiritual songs (Colossians 3:16) through heartfelt, modern worship music that is both meaningful and Christ-focused.",
		icon: <Music className='w-8 h-8 text-[#C25020]' />,
	},
	{
		image: "/assets/church4.jpeg",
		title: "How is the teaching?",
		description:
			"At 522Church, our preaching is expository in nature and gospel-centered in content. We aim to clearly unpack what each passage of Scripture says while showing how it fits into the overarching story of the Bible. Every sermon points to the central truth that we are called to love God in response to His great love for us—a love most clearly displayed in the sacrificial death of Jesus. The Gospel is always the focus, and Jesus is always the hero of every message.",
		icon: <BookOpen className='w-8 h-8 text-[#C25020]' />,
	},
];

const Sectionintro3: React.FC = () => {
	return (
		<section className='py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#F5F5F5]'>
			<div className='max-w-6xl mx-auto space-y-16'>
				{persons.map((item, index) => (
					<div
						key={index}
						className={`flex flex-col ${
							index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
						} items-center gap-8 lg:gap-12 group`}
					>
						<div className='relative w-full md:w-1/2 h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl'>
							<Image
								src={item.image}
								alt={item.title}
								width={1280}
								height={720}
								className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
								priority={index === 0} // Prioritize only the first image for performance
							/>
							<div className='absolute top-4 left-4 bg-white/90 rounded-full p-3 shadow-md'>
								{item.icon}
							</div>
						</div>
						<div className='w-full md:w-1/2 space-y-4'>
							<h2 className='text-3xl md:text-4xl font-extrabold text-[#333333] mb-4 relative inline-block'>
								{item.title}
								<span className='absolute bottom-0 left-0 w-full h-1 bg-[#C25020]/30 rounded-full'></span>
							</h2>
							<p className='text-gray-600 leading-relaxed text-base md:text-lg'>
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
