"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface SideMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
	const pathname = usePathname();

	return (
		<div
			className={`fixed inset-y-0 right-0 z-50 w-64 bg-neutral-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
				isOpen ? "translate-x-0" : "translate-x-full"
			}`}
		>
			<div className='flex flex-col items-center pt-16 space-y-6 px-4'>
				<button
					onClick={onClose}
					className='absolute top-4 right-4 text-white hover:text-orange-500'
					aria-label='Close menu'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-8 w-8'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</button>

				<div className='w-24 h-24 rounded-full overflow-hidden border-2 border-orange-500'>
					<Image
						src='/images/prot.jpg'
						alt='Profile'
						width={96}
						height={96}
						className='object-cover w-full h-full'
						priority
					/>
				</div>

				<nav className='w-full flex flex-col space-y-4 text-white'>
					<Link
						href='/'
						className={`py-2 px-4 rounded hover:bg-neutral-700 transition-colors ${
							pathname === "/" ? "text-orange-500 font-bold" : ""
						}`}
						onClick={onClose}
					>
						Home
					</Link>
					<Link
						href='/introduction'
						className={`py-2 px-4 rounded hover:bg-neutral-700 transition-colors ${
							pathname === "/introduction" ? "text-orange-500 font-bold" : ""
						}`}
						onClick={onClose}
					>
						I'M NEW
					</Link>
					<Link
						href='/eventss'
						className={`py-2 px-4 rounded hover:bg-neutral-700 transition-colors ${
							pathname === "/eventss" ? "text-orange-500 font-bold" : ""
						}`}
						onClick={onClose}
					>
						EVENTS
					</Link>
					<Link
						href='/leadership'
						className={`py-2 px-4 rounded hover:bg-neutral-700 transition-colors ${
							pathname === "/leadership" ? "text-orange-500 font-bold" : ""
						}`}
						onClick={onClose}
					>
						LEADERSHIP
					</Link>
					<Link
						href='/ministry'
						className={`py-2 px-4 rounded hover:bg-neutral-700 transition-colors ${
							pathname === "/ministry" ? "text-orange-500 font-bold" : ""
						}`}
						onClick={onClose}
					>
						MINISTRIES
					</Link>
					<Link
						href='/watch'
						className={`py-2 px-4 rounded hover:bg-neutral-700 transition-colors ${
							pathname === "/watch" ? "text-orange-500 font-bold" : ""
						}`}
						onClick={onClose}
					>
						WATCH
					</Link>
					<Link
						href='/give'
						className={`py-2 px-4 rounded hover:bg-neutral-700 transition-colors ${
							pathname === "/give" ? "text-orange-500 font-bold" : ""
						}`}
						onClick={onClose}
					>
						GIVE
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default SideMenu;
