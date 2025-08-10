"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
	return (
		<footer className='bg-gray-100 text-gray-700'>
			<div className='max-w-[1200px] mx-auto px-5 py-10'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-10'>
					<div>
						<h3 className='text-lg font-bold mb-4'>Connect</h3>
						<ul className='space-y-2'>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									What To Expect
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Weekender
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Events
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Resources
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-lg font-bold mb-4'>Ministries</h3>
						<ul className='space-y-2'>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Kids
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Students
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									College
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Community Groups
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									DNA Groups
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Mission Trips
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Care
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-lg font-bold mb-4'>About Us</h3>
						<ul className='space-y-2'>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Leadership
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Vision & Values
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Beliefs
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Residency
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Internship
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-lg font-bold mb-4'>Interact</h3>
						<ul className='space-y-2'>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Watch
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Give
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Apple Podcasts
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-orange-500 transition'>
									Spotify
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-sm'>
					<div>
						<h4 className='font-bold mb-2'>Winston-Salem</h4>
						<p>Sundays 9AM, 11AM, 5PM</p>
						<p>1001 N. Patterson Ave.</p>
						<p>Winston-Salem, NC 27101</p>
						<p className='italic'>"Mailing Address"</p>
					</div>
					<div>
						<h4 className='font-bold mb-2'>Lexington</h4>
						<p>Sundays 9AM - 11AM</p>
						<p>1405 Winston Rd</p>
						<p>Lexington, NC 27295</p>
					</div>
					<div>
						<h4 className='font-bold mb-2'>TCC Students Location</h4>
						<p>864 W. Northwest Blvd.</p>
						<p>Winston-Salem, NC 27101</p>
					</div>
					<div>
						<h4 className='font-bold mb-2'>Questions?</h4>
						<p>336-783-4360</p>
						<p>contact@twocitieschurch.net</p>
						<div className='flex space-x-4 mt-4'>
							<Link href='#' className='text-blue-600 hover:text-blue-800'>
								<span className='sr-only'>Facebook</span>f
							</Link>
							<Link href='#' className='text-pink-600 hover:text-pink-800'>
								<span className='sr-only'>Instagram</span>@
							</Link>
							<Link href='#' className='text-red-600 hover:text-red-800'>
								<span className='sr-only'>YouTube</span>▶
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-black text-white text-center py-2 text-sm'>
				Website created by{" "}
				<span className='text-xl font-semibold text-red-400 italic'>
					samuel
				</span>
			</div>
		</footer>
	);
};

export default Footer;
