"use client";

import React from "react";
import Link from "next/link";
import {
	Facebook,
	Instagram,
	Youtube,
	MapPin,
	Mail,
	Phone,
} from "lucide-react"; // Using lucide-react for modern icons

const Footer: React.FC = () => {
	return (
		<footer className='bg-[#333333] text-gray-200'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12'>
					<div>
						<h3 className='text-lg font-extrabold text-[#C25020] mb-4'>
							Connect With Us
						</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									What to Expect
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									The Weekender
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									Upcoming Events
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									Resources
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-lg font-extrabold text-[#C25020] mb-4'>
							Our Ministries
						</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									Kids Ministry
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									Student Ministry
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									College Ministry
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									Community Groups
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									DNA Groups
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									Mission Trips
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									Care & Support
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-lg font-extrabold text-[#C25020] mb-4'>
							About 522Church
						</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									Our Leadership
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									Vision & Values
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									Our Beliefs
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									Residency Program
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									Internship Opportunities
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-lg font-extrabold text-[#C25020] mb-4'>
							Engage Online
						</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									Watch Sermons
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									Give Online
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									Apple Podcasts
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='hover:text-[#C25020] transition-colors duration-300 text-base'
								>
									Spotify
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-sm'>
					<div>
						<h4 className='font-bold text-[#C25020] mb-3 flex items-center gap-2'>
							<MapPin className='w-5 h-5' />
							Winston-Salem Location
						</h4>
						<p className='text-gray-300'>Sundays at 10:00 AM</p>
						<p className='text-gray-300'>1001 N. Patterson Ave.</p>
						<p className='text-gray-300'>Winston-Salem, NC 27101</p>
					</div>
					<div>
						<h4 className='font-bold text-[#C25020] mb-3 flex items-center gap-2'>
							<Mail className='w-5 h-5' />
							Contact Us
						</h4>
						<p className='text-gray-300 flex items-center gap-2'>
							<Phone className='w-4 h-4' />
							3023971397
						</p>
						<p className='text-gray-300 flex items-center gap-2'>
							<Mail className='w-4 h-4' />

							<p>contact:stephenowusujason@gmail.com</p>
						</p>
						<div className='flex space-x-4 mt-4'>
							<Link
								href='#'
								className='text-gray-200 hover:text-[#C25020] transition-colors duration-300'
								aria-label='Facebook'
							>
								<Facebook className='w-6 h-6' />
							</Link>
							<Link
								href='#'
								className='text-gray-200 hover:text-[#C25020] transition-colors duration-300'
								aria-label='Instagram'
							>
								<Instagram className='w-6 h-6' />
							</Link>
							<Link
								href='#'
								className='text-gray-200 hover:text-[#C25020] transition-colors duration-300'
								aria-label='YouTube'
							>
								<Youtube className='w-6 h-6' />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-[#1F2937] text-gray-300 text-center py-4 text-sm'>
				Website crafted with care by{" "}
				<span className='font-semibold text-[#C25020]'>Samuel</span>
			</div>
		</footer>
	);
};

export default Footer;
