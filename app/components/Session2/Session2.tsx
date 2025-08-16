"use client";
import React, { useState, useEffect } from "react";
import { sermons } from "@/app/watch/data"; // Adjust the import path as needed
import {
	MapPin,
	Clock,
	Globe,
	ChevronRight,
	PlayCircle,
	Download,
} from "lucide-react";

const Section2: React.FC = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	// Get first 3 sermons
	const displayedSermons = sermons.slice(0, 3);

	// Video content component
	const VideoContent = ({ sermon }: { sermon: (typeof sermons)[0] }) => (
		<div className='space-y-6 w-full bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl'>
			<div className='aspect-w-16 aspect-h-9'>
				{isMounted && (
					<iframe
						className='w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]'
						src={`${sermon.videoUrl}?controls=1&modestbranding=1&rel=0&showinfo=0`}
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						title={sermon.title}
					/>
				)}
			</div>
			<div className='p-6 text-[#333333]'>
				<h3 className='text-2xl md:text-3xl font-bold mb-2'>{sermon.title}</h3>
				<p className='text-[#C25020] mb-4 font-medium flex items-center gap-2'>
					<PlayCircle className='w-5 h-5' />
					{sermon.series} • {sermon.speaker}
				</p>
				<p className='mb-6 text-gray-600 leading-relaxed'>
					{sermon.description}
				</p>
				<div className='flex flex-wrap gap-4'>
					<a
						href={sermon.videoUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='bg-[#C25020] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#A23E18] transition duration-300 flex items-center gap-2'
					>
						<ChevronRight className='w-5 h-5' />
						Watch Full Sermon
					</a>
				</div>
			</div>
		</div>
	);

	return (
		<section className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#F5F5F5]'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'>
					{/* Left Side - Sticky Content */}
					<div className='lg:col-span-5 bg-[#333333] text-white p-8 md:p-10 rounded-2xl lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] lg:overflow-y-auto shadow-xl'>
						<div className='space-y-8'>
							<h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight'>
								You need people who know you and know the Bible.
							</h1>
							<p className='text-gray-300 text-lg leading-relaxed'>
								You weren't meant to go through life alone. At 522Church, we're
								here to help support, challenge, and encourage you as you
								navigate life, faith, and relationships.
							</p>

							<div className='space-y-6'>
								<h2 className='text-[#C25020] text-2xl font-bold flex items-center gap-2'>
									<MapPin className='w-6 h-6' />
									Join Us!
								</h2>

								<div className='space-y-6'>
									<div className='bg-[#1F2937] p-6 rounded-xl transition-all duration-300 hover:bg-[#2D3748]'>
										<h3 className='font-bold text-xl mb-2'>Winston-Salem</h3>
										<p className='text-gray-300 flex items-center gap-2 mb-1'>
											<Clock className='w-4 h-4' />
											Sundays 10:00AM
										</p>
										<p className='text-[#C25020] flex items-center gap-2'>
											<MapPin className='w-4 h-4' />
											522 Church | Winston-Salem, North Carolina
										</p>
									</div>

									<div className='bg-[#1F2937] p-6 rounded-xl transition-all duration-300 hover:bg-[#2D3748]'>
										<h3 className='font-bold text-xl mb-2'>Online</h3>
										<p className='text-gray-300 flex items-center gap-2'>
											<Globe className='w-4 h-4' />
											10:00AM
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Side - Scrollable Content */}
					<div className='lg:col-span-7 space-y-10 lg:space-y-12'>
						{displayedSermons.map((sermon) => (
							<VideoContent key={sermon.id} sermon={sermon} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section2;
