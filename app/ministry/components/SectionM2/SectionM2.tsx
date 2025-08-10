import React from "react";
import Image from "next/image";
import { members, pastors } from "@/app/leadership/data";

interface Person {
	image: string;
	domain: string;
	name: string;
}

const persons: Person[] = [
	{
		image:
			"https://cdn.pixabay.com/photo/2016/11/22/21/42/woman-1850703_1280.jpg",
		domain: "thrive to do better",
		name: "abdhul",
	},
	{
		image:
			"https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg",
		domain: "thrive to do better",
		name: "abdhul",
	},
	{
		image:
			"https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg",
		domain: "thrive to do better",
		name: "abdhul",
	},
	{
		image:
			"https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg",
		domain: "thrive to do better",
		name: "abdhul",
	},
];

const SectionM2: React.FC = () => {
	return (
		<div>
			<section className='py-10 px-4 md:px-8 lg:px-16 bg-white'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 '>
					{members.map((person, index) => (
						<div
							key={index}
							className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'
						>
							<div className='relative h-64'>
								<Image
									src={person.image}
									alt={`${person.name}'s portrait`}
									fill
									className='object-cover rounded-t-lg'
								/>
							</div>
							<div className='p-4 text-center'>
								<h3 className='text-2xl font-semibold mb-2'>{person.name}</h3>
								<p className='text-sm uppercase tracking-wide text-gray-500'>
									{person.domain}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className='py-10 px-4 md:px-8 lg:px-16 bg-white'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
					{pastors.map((person, index) => (
						<div
							key={index}
							className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'
						>
							<div className='relative h-64'>
								<Image
									src={person.image}
									alt={`${person.name}'s portrait`}
									fill
									className='object-cover rounded-t-lg'
								/>
							</div>
							<div className='p-4 text-center'>
								<h3 className='text-2xl font-semibold mb-2'>{person.name}</h3>
								<p className='text-sm uppercase tracking-wide text-gray-500'>
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

export default SectionM2;
