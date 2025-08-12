"use client";

import React, { useState, useEffect } from "react";
import { sermons } from "../data"; // Import sermon data from external file
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";

interface Sermon {
	id: number;
	title: string;
	series: string;
	speaker: string;
	topic: string;
	date: string;
	scripture: string;
	thumbnail: string;
	videoUrl: string;
	audioUrl: string;
	description: string;
}

const WatchPage = () => {
	// State management with proper typing
	const [selectedSeries, setSelectedSeries] = useState<string>("");
	const [selectedSpeaker, setSelectedSpeaker] = useState<string>("");
	const [selectedTopic, setSelectedTopic] = useState<string>("");
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [selectedSermonId, setSelectedSermonId] = useState<number | null>(null);
	const [playMode, setPlayMode] = useState<"video" | "audio" | null>(null);

	// Constants
	const perPage = 5;

	// Get strictly typed filter options with type guards
	const getFilterOptions = (key: keyof Sermon): string[] => {
		return Array.from(
			new Set(sermons.map((s) => s[key]).filter((val): val is string => !!val))
		).sort();
	};

	// Filter options
	const seriesOptions = getFilterOptions("series");
	const speakerOptions = getFilterOptions("speaker");
	const topicOptions = getFilterOptions("topic");

	// Sort sermons by date (newest first)
	const sortedSermons = [...sermons].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	// Filter sermons based on selections
	const filteredSermons = sortedSermons.filter(
		(s) =>
			(selectedSeries === "" || s.series === selectedSeries) &&
			(selectedSpeaker === "" || s.speaker === selectedSpeaker) &&
			(selectedTopic === "" || s.topic === selectedTopic)
	);

	// Pagination
	const totalPages = Math.ceil(filteredSermons.length / perPage);
	const paginatedSermons = filteredSermons.slice(
		(currentPage - 1) * perPage,
		currentPage * perPage
	);

	// Get featured sermon
	const featuredSermon = selectedSermonId
		? sermons.find((s) => s.id === selectedSermonId)
		: filteredSermons[0];

	// Handle play mode selection
	const handlePlay = (id: number, mode: "video" | "audio") => {
		setSelectedSermonId(id);
		setPlayMode(mode);
	};

	// Reset pagination and selections when filters change
	useEffect(() => {
		setCurrentPage(1);
		setSelectedSermonId(null);
		setPlayMode(null);
	}, [selectedSeries, selectedSpeaker, selectedTopic]);

	if (!featuredSermon) {
		return (
			<div className='text-center py-8 text-gray-300 bg-[#1A1A1A] min-h-screen'>
				No sermons found.
			</div>
		);
	}

	return (
		<div className='relative min-h-screen bg-[#1A1A1A] font-sans'>
			{/* Background Image */}
			<div className='absolute inset-0'>
				<Image
					src='/assets/come.jpg'
					alt='Church community gathering'
					fill
					className='object-cover opacity-10'
					quality={85}
					sizes='100vw'
					priority
				/>
			</div>
			{/* Gradient Overlay */}
			<div className='absolute inset-0 bg-gradient-to-b from-[#333333]/50 to-transparent' />

			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20'>
				{/* Filters Section */}
				<div className='bg-[#333333]/90 py-4 sm:py-5 px-4 sm:px-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 rounded-xl mb-10 sm:mb-12 shadow-md border border-[#C25020]/20'>
					<select
						value={selectedSeries}
						onChange={(e) => setSelectedSeries(e.target.value)}
						className='bg-[#333333] border border-[#C25020]/40 px-3 sm:px-4 py-2 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C25020] transition-all duration-300'
					>
						<option value='' className='text-gray-300'>
							- Browse Series -
						</option>
						{seriesOptions.map((option) => (
							<option key={option} value={option} className='text-gray-300'>
								{option}
							</option>
						))}
					</select>

					<select
						value={selectedSpeaker}
						onChange={(e) => setSelectedSpeaker(e.target.value)}
						className='bg-[#333333] border border-[#C25020]/40 px-3 sm:px-4 py-2 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C25020] transition-all duration-300'
					>
						<option value='' className='text-gray-300'>
							- Browse Speakers -
						</option>
						{speakerOptions.map((option) => (
							<option key={option} value={option} className='text-gray-300'>
								{option}
							</option>
						))}
					</select>

					<select
						value={selectedTopic}
						onChange={(e) => setSelectedTopic(e.target.value)}
						className='bg-[#333333] border border-[#C25020]/40 px-3 sm:px-4 py-2 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C25020] transition-all duration-300'
					>
						<option value='' className='text-gray-300'>
							- Browse Topics -
						</option>
						{topicOptions.map((option) => (
							<option key={option} value={option} className='text-gray-300'>
								{option}
							</option>
						))}
					</select>
				</div>

				{/* Featured Sermon Section */}
				<h2 className='text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6 sm:mb-8 font-serif'>
					{selectedSermonId ? "Selected Message" : "Latest Message"}
				</h2>

				<div className='mb-12 sm:mb-16'>
					<h3 className='text-center text-lg sm:text-xl md:text-2xl font-semibold text-[#C25020] mb-4 sm:mb-6 font-serif'>
						{featuredSermon.title}
					</h3>

					<div className='relative mx-auto max-w-4xl aspect-video bg-[#333333]/80 rounded-xl overflow-hidden shadow-md border border-[#C25020]/20 group'>
						{playMode === "video" ? (
							<iframe
								width='100%'
								height='100%'
								src={featuredSermon.videoUrl}
								title={featuredSermon.title}
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
								className='w-full h-full'
							></iframe>
						) : playMode === "audio" ? (
							<div className='flex items-center justify-center h-full bg-[#333333]'>
								<audio
									controls
									className='w-full max-w-md bg-[#333333] text-[#C25020]'
								>
									<source src={featuredSermon.audioUrl} type='audio/mpeg' />
									Your browser does not support the audio element.
								</audio>
							</div>
						) : (
							<div className='relative w-full h-full'>
								<Image
									width={1280}
									height={720}
									src={featuredSermon.thumbnail}
									alt={featuredSermon.title}
									className='object-cover transition-transform duration-500 group-hover:scale-105'
									priority
								/>
								<div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300'>
									<button
										onClick={() => handlePlay(featuredSermon.id, "video")}
										className='bg-[#C25020] text-white rounded-full p-3 sm:p-4 md:p-5 hover:bg-[#A23E18] transition-all duration-300 shadow-md hover:shadow-[#C25020]/40'
										aria-label='Play video'
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 sm:h-8 w-6 sm:w-8'
											viewBox='0 0 20 20'
											fill='currentColor'
										>
											<path d='M5 4v12l10-6-10-6z' />
										</svg>
									</button>
								</div>
							</div>
						)}
					</div>

					<div className='flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 sm:mt-6'>
						<a
							href={featuredSermon.videoUrl.replace("/embed/", "/watch?v=")}
							target='_blank'
							rel='noopener noreferrer'
							className='px-4 sm:px-6 py-2 bg-[#C25020] text-white font-semibold rounded-lg hover:bg-[#A23E18] transition-all duration-300 shadow-md hover:shadow-[#C25020]/40 group'
						>
							Watch on YouTube
						</a>
						<button
							onClick={() => handlePlay(featuredSermon.id, "video")}
							className='px-4 sm:px-6 py-2 bg-[#C25020] text-white font-semibold rounded-lg hover:bg-[#A23E18] transition-all duration-300 shadow-md hover:shadow-[#C25020]/40 group'
						>
							Watch
						</button>
						{/* <button
							onClick={() => handlePlay(featuredSermon.id, "audio")}
							className='px-4 sm:px-6 py-2 bg-transparent border-2 border-gray-200 text-gray-200 font-semibold rounded-lg hover:bg-gray-200/10 transition-all duration-300 shadow-md group'
						>
							Listen
						</button> */}

						<a
							href='https://open.spotify.com/show/6BHs8lkgFdLRTG30O1gMBw'
							target='_blank'
							rel='noopener noreferrer'
							className='px-3 sm:px-4 py-1 sm:py-2 bg-transparent border-2 border-gray-200 text-gray-200 font-semibold rounded-lg hover:bg-gray-200/10 transition-all duration-300 shadow-md group'
						>
							Listen
						</a>
					</div>

					{featuredSermon.description && (
						<div className='mt-4 sm:mt-6 max-w-3xl mx-auto text-center'>
							<p className='text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed'>
								{featuredSermon.description}
							</p>
							<p className='text-gray-400 text-xs sm:text-sm mt-2'>
								Scripture: {featuredSermon.scripture}
							</p>
						</div>
					)}
				</div>

				{/* Sermon List Section */}
				<div className='mt-12 sm:mt-16'>
					{paginatedSermons.length > 0 ? (
						<>
							<h3 className='text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-6 sm:mb-8 font-serif'>
								All Messages
							</h3>
							<div className='space-y-4 sm:space-y-6'>
								{paginatedSermons.map((sermon) => (
									<div
										key={sermon.id}
										className='flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 sm:py-4 px-4 sm:px-6 bg-[#333333]/80 rounded-lg shadow-md border border-[#C25020]/20 hover:shadow-[#C25020]/40 hover:border-[#C25020]/50 transition-all duration-300 group'
									>
										<div className='relative flex-1 mb-2 sm:mb-0'>
											<h4 className='font-semibold text-base sm:text-lg text-white'>
												{sermon.title}
											</h4>
											<p className='text-xs sm:text-sm text-gray-300'>
												{sermon.speaker} • {sermon.series} •{" "}
												{new Date(sermon.date).toLocaleDateString("en-US", {
													year: "numeric",
													month: "long",
													day: "numeric",
												})}
											</p>
										</div>
										<div className='flex gap-3 sm:gap-4'>
											<button
												onClick={() => handlePlay(sermon.id, "video")}
												className='px-3 sm:px-4 py-1 sm:py-2 bg-[#C25020] text-white font-semibold rounded-lg hover:bg-[#A23E18] transition-all duration-300 shadow-md hover:shadow-[#C25020]/40 group'
											>
												Watch
											</button>
											{/* <button
												onClick={() => handlePlay(sermon.id, "audio")}
												className='px-3 sm:px-4 py-1 sm:py-2 bg-transparent border-2 border-gray-200 text-gray-200 font-semibold rounded-lg hover:bg-gray-200/10 transition-all duration-300 shadow-md group'
											>
												Listen
											</button> */}

											<a
												href='https://open.spotify.com/show/6BHs8lkgFdLRTG30O1gMBw'
												target='_blank'
												rel='noopener noreferrer'
												className='px-3 sm:px-4 py-1 sm:py-2 bg-transparent border-2 border-gray-200 text-gray-200 font-semibold rounded-lg hover:bg-gray-200/10 transition-all duration-300 shadow-md group'
											>
												Listen
											</a>
										</div>
									</div>
								))}
							</div>
						</>
					) : (
						<div className='text-center py-8 text-gray-300'>
							No sermons match your selected filters.
						</div>
					)}
				</div>

				{/* Pagination Section */}
				{totalPages > 1 && (
					<div className='flex justify-center mt-10 sm:mt-12 gap-2 sm:gap-3'>
						{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
							<button
								key={page}
								onClick={() => setCurrentPage(page)}
								className={`w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center rounded-full font-semibold transition-all duration-300 ${
									page === currentPage
										? "bg-[#C25020] text-white shadow-md"
										: "bg-[#333333] text-gray-200 border border-[#C25020]/40 hover:bg-[#C25020]/80 hover:text-white"
								}`}
								aria-label={`Go to page ${page}`}
							>
								{page}
							</button>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default WatchPage;
