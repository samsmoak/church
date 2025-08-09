"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import InfiniteScroller from "../InfiniteScroller/InfiniteScroller";
import { TypeAnimation } from "react-type-animation";
const HeroSection: React.FC = () => {
	return (
		<div className='w-full grid grid-cols-1 lg:grid-cols-2 py-10  gap-y-10 '>
			<div className='w-full flex justify-center items-center'>
				<div className='w-full   items-center space-y-8  md:w-full flex flex-col md:items-start  md:justify-start '>
					<div className='mb-4 font-medium text-gray-600'>
						Learn a new skill, launch a project, land your dream career.
					</div>
					<div className=''>
						<div className='flex space-x-5'>
							<div className='whitespace-nowrap text-sm md:text-5xl font-extrabold capitalize '>
								We host
							</div>
							<div className='     md:text-5xl font-extrabold uppercase  text-rose-400'>
								<TypeAnimation
									sequence={[
										// Same substring at the start will only be typed out once, initially
										"Talkshows",
										1000, // wait 1s before replacing "Mice" with "Hamsters"
										"interviews",
										1000,
										"Parent meetings",
										1000,
										"Children Events",
										1000,
									]}
									wrapper='span'
									speed={50}
									style={{ fontSize: "", display: "" }}
									repeat={Infinity}
									// className='w-10/12'
								/>
							</div>
						</div>
						<div className='whitespace-nowrap font-extrabold md:text-5xl'>
							Mentorship
						</div>
					</div>

					<div className='w-full flex space-x-2'>
						<div className='w-full space-y-2 '>
							<div className='text-2xl font-semibold'>5,000+</div>
							<div>Available Mentors</div>
						</div>
						<div className='w-full space-y-2  '>
							<div className='text-2xl font-semibold'>40,000+</div>
							<div>sessions held</div>
						</div>
						<div className='w-full space-y-2 '>
							<div className='text-2xl font-semibold'>100+</div>
							<div>countries represented</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex w-full justify-center'>
				<InfiniteScroller />
			</div>
		</div>
	);
};

export default HeroSection;
