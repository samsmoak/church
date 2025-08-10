import React from "react";
import Image from "next/image";

interface Person {
	image: string;
	title: string;
	description: string;
}

const persons: Person[] = [
	{
		image: "/assets/church8.jpeg",
		title: "What is a  gathering  like?",
		description:
			"Two Cities Church exists to see every man, woman, and child in Winston-Salem have repeated opportunities to see, hear, and respond to the gospel. Every week, you will find passionate and authentic worship, gospel-centered preaching, and a vibrant kids ministry. Whether you’ve been around church all of your life or this is your first time stepping foot in a church, we want to make your experience welcoming.",
	},
	{
		image: "/assets/church1.jpeg",
		title: "What type of  music  do you sing?",
		description:
			"At Two Cities, every gathering is filled with music rooted in God’s Word and centered on His character. Our desire is that everyone who attends our worship services leaves with a deep sense of awe and wonder at all Jesus has done for us. We are committed to singing psalms, hymns, and spiritual songs (Colossians 3:16) through heartfelt, modern worship music that is both meaningful and Christ-focused.",
	},
	{
		image: "/assets/church4.jpeg",
		title: "How is the  teaching? ",
		description:
			"At Two Cities, our preaching is expository in nature and gospel-centered in content. We aim to clearly unpack what each passage of Scripture says while showing how it fits into the overarching story of the Bible. Every sermon points to the central truth that we are called to love God in response to His great love for us—a love most clearly displayed in the sacrificial death of Jesus. The Gospel is always the focus, and Jesus is always the hero of every message.",
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
								width='1280'
								height='720'
								className='object-cover w-full h-full'
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
