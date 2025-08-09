"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar: React.FC = () => {
	const pathname = usePathname();

	return (
		<nav className='bg-black text-white py-4 flex items-center justify-center w-full'>
			{/* Logo */}
			<div className='lg:w-10/12 flex justify-center items-center space-x-14'>
				<div className='flex items-center'>
					<Link
						href='/'
						className={`text-2xl font-bold hover:text-gray-300 ${
							pathname === "/"
								? "border-2 border-orange-500 rounded-full p-4 "
								: ""
						}`}
					>
						🔷
					</Link>
				</div>

				{/* Navigation Links */}
				<div className='hidden md:flex space-x-8 font-bold'>
					<Link
						href='/introduction'
						className={`hover:text-gray-300 ${
							pathname === "/introduction" ? "border-b-2 border-orange-500" : ""
						}`}
					>
						I'M NEW
					</Link>
					<Link
						href='/eventss'
						className={`hover:text-gray-300 ${
							pathname === "/eventss" ? "border-b-2 border-orange-500" : ""
						}`}
					>
						EVENTS
					</Link>
					<Link
						href='/leadership'
						className={`hover:text-gray-300 ${
							pathname === "/leadership" ? "border-b-2 border-orange-500" : ""
						}`}
					>
						LEADERSHIP
					</Link>
					<Link
						href='/ministry'
						className={`hover:text-gray-300 ${
							pathname === "/ministry" ? "border-b-2  border-orange-500" : ""
						}`}
					>
						MINISTRIES
					</Link>
					<Link
						href='/watch'
						className={`hover:text-gray-300 ${
							pathname === "/watch" ? "border-b-2 border-orange-500" : ""
						}`}
					>
						WATCH
					</Link>
					{/* <Link
						href='/opportunities'
						className={`hover:text-gray-300 ${
							pathname === "/opportunities"
								? "border-b-2 border-orange-500"
								: ""
						}`}
					>
						OPPORTUNITIES
					</Link> */}

					<Link
						href='/give'
						className={`hover:text-gray-300 ${
							pathname === "/give" ? "border-b-2 border-orange-500" : ""
						}`}
					>
						GIVE
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
