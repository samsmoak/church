"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import SideMenu from "../Sidemenu/SideMenu";

const Navbar = () => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<nav className='bg-black text-white py-4 fixed w-full z-40'>
				<div className='container mx-auto px-4 flex justify-between items-center'>
					{/* Logo */}
					<Link
						href='/'
						className={`text-2xl font-bold hover:text-gray-300 transition-colors ${
							pathname === "/"
								? "border-2 border-orange-500 rounded-full p-2"
								: ""
						}`}
						aria-label='Home'
					>
						🔷
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden md:flex space-x-8 font-bold'>
						<Link
							href='/introduction'
							className={`hover:text-gray-300 transition-colors ${
								pathname === "/introduction"
									? "border-b-2 border-orange-500"
									: ""
							}`}
						>
							I'M NEW
						</Link>
						<Link
							href='/eventss'
							className={`hover:text-gray-300 transition-colors ${
								pathname === "/eventss" ? "border-b-2 border-orange-500" : ""
							}`}
						>
							EVENTS
						</Link>
						<Link
							href='/leadership'
							className={`hover:text-gray-300 transition-colors ${
								pathname === "/leadership" ? "border-b-2 border-orange-500" : ""
							}`}
						>
							LEADERSHIP
						</Link>
						<Link
							href='/ministry'
							className={`hover:text-gray-300 transition-colors ${
								pathname === "/ministry" ? "border-b-2 border-orange-500" : ""
							}`}
						>
							MINISTRIES
						</Link>
						<Link
							href='/watch'
							className={`hover:text-gray-300 transition-colors ${
								pathname === "/watch" ? "border-b-2 border-orange-500" : ""
							}`}
						>
							WATCH
						</Link>
						<Link
							href='/give'
							className={`hover:text-gray-300 transition-colors ${
								pathname === "/give" ? "border-b-2 border-orange-500" : ""
							}`}
						>
							GIVE
						</Link>
					</div>

					{/* Mobile Menu Button - Always visible on mobile */}
					<div
						className='md:hidden text-white focus:outline-none'
						onClick={() => setIsMenuOpen(true)}
						aria-label='Open menu'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='size-6'
						>
							<path
								fill-rule='evenodd'
								d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'
								clip-rule='evenodd'
							/>
						</svg>
					</div>
				</div>
			</nav>

			<SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
		</>
	);
};

export default Navbar;
