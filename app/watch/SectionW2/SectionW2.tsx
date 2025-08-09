"use client";

import React, { useState, useEffect } from "react";
import { sermons } from "../data"; // Import sermon data from external file
import Image from "next/image";

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
		return <div className='text-center py-8'>No sermons found.</div>;
	}

	return (
		<div className='bg-white min-h-screen font-sans'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Filters Section */}
				<div className='bg-gray-100 py-3 flex flex-col md:flex-row justify-center gap-4 md:gap-6 rounded-md mb-12 px-4'>
					<select
						value={selectedSeries}
						onChange={(e) => setSelectedSeries(e.target.value)}
						className='bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500'
					>
						<option value=''>- Browse Series -</option>
						{seriesOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>

					<select
						value={selectedSpeaker}
						onChange={(e) => setSelectedSpeaker(e.target.value)}
						className='bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500'
					>
						<option value=''>- Browse Speakers -</option>
						{speakerOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>

					<select
						value={selectedTopic}
						onChange={(e) => setSelectedTopic(e.target.value)}
						className='bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500'
					>
						<option value=''>- Browse Topics -</option>
						{topicOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				</div>

				{/* Featured Sermon Section */}
				<h2 className='text-center text-2xl font-bold text-gray-800 mb-6'>
					{selectedSermonId ? "Selected Message" : "Latest Message"}
				</h2>

				<div className='mb-16'>
					<h3 className='text-center text-xl font-semibold text-gray-900 mb-4'>
						{featuredSermon.title}
					</h3>

					<div className='relative mx-auto max-w-4xl aspect-video bg-gray-200 rounded-lg overflow-hidden'>
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
							<div className='flex items-center justify-center h-full bg-black'>
								<audio controls className='w-full max-w-md'>
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
									className='object-cover'
									priority
								/>
								<div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30'>
									<button
										onClick={() => handlePlay(featuredSermon.id, "video")}
										className='bg-red-600 text-white rounded-full p-4 md:p-6 hover:bg-red-700 transition'
										aria-label='Play video'
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-8 w-8'
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

					<div className='flex flex-wrap justify-center gap-4 mt-6'>
						<a
							href={featuredSermon.videoUrl.replace("/embed/", "/watch?v=")}
							target='_blank'
							rel='noopener noreferrer'
							className='bg-orange-500 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-600 transition'
						>
							Watch on YouTube
						</a>
						<button
							onClick={() => handlePlay(featuredSermon.id, "video")}
							className='bg-orange-500 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-600 transition'
						>
							Watch
						</button>
						<button
							onClick={() => handlePlay(featuredSermon.id, "audio")}
							className='bg-orange-500 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-600 transition'
						>
							Listen
						</button>
					</div>

					{featuredSermon.description && (
						<div className='mt-6 max-w-3xl mx-auto'>
							<p className='text-gray-600'>{featuredSermon.description}</p>
							<p className='text-gray-500 mt-2'>
								Scripture: {featuredSermon.scripture}
							</p>
						</div>
					)}
				</div>

				{/* Sermon List Section */}
				<div className='mt-16'>
					{paginatedSermons.length > 0 ? (
						<>
							<h3 className='text-xl font-bold text-gray-800 mb-6'>
								All Messages
							</h3>
							<div className='space-y-4'>
								{paginatedSermons.map((sermon) => (
									<div
										key={sermon.id}
										className='flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-gray-200 last:border-b-0'
									>
										<div className='flex-1 mb-2 sm:mb-0'>
											<h4 className='font-semibold text-gray-900'>
												{sermon.title}
											</h4>
											<p className='text-sm text-gray-600'>
												{sermon.speaker} • {sermon.series} •{" "}
												{new Date(sermon.date).toLocaleDateString("en-US", {
													year: "numeric",
													month: "long",
													day: "numeric",
												})}
											</p>
										</div>
										<div className='flex gap-4'>
											<button
												onClick={() => handlePlay(sermon.id, "video")}
												className='text-orange-500 font-medium hover:underline'
											>
												Watch
											</button>
											<button
												onClick={() => handlePlay(sermon.id, "audio")}
												className='text-orange-500 font-medium hover:underline'
											>
												Listen
											</button>
										</div>
									</div>
								))}
							</div>
						</>
					) : (
						<div className='text-center py-8 text-gray-600'>
							No sermons match your selected filters.
						</div>
					)}
				</div>

				{/* Pagination Section */}
				{totalPages > 1 && (
					<div className='flex justify-center mt-12 gap-2'>
						{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
							<button
								key={page}
								onClick={() => setCurrentPage(page)}
								className={`w-10 h-10 flex items-center justify-center rounded-full font-medium transition ${
									page === currentPage
										? "bg-orange-500 text-white"
										: "bg-gray-200 text-gray-700 hover:bg-gray-300"
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
