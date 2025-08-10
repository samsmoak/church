import React from "react";
import Image from "next/image";
import { elders, members, pastors } from "../../data";

interface Person {
	image: string;
	domain: string;
	name: string;
}

const Section2: React.FC = () => {
	return (
		<div>
			<section className='py-10 px-4 md:px-8 lg:px-16 bg-white'>
				<h2 className='text-6xl font-bold  mb-8'>Pastors</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 '>
					{pastors.map((person, index) => (
						<div
							key={index}
							className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'
						>
							<div className=' h-64 w-full'>
								<Image
									src={person.image}
									alt={`${person.name}'s portrait`}
									width='1280'
									height='720'
									className='object-cover w-full h-full rounded-t-lg'
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
				<h2 className='text-6xl font-bold mb-8'>Elders</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
					{elders.map((person, index) => (
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
				<h2 className='text-6xl font-bold  mb-8'>Members</h2>
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
		</div>
	);
};

export default Section2;
