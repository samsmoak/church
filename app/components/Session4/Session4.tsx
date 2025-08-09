import Image from "next/image";
import React from "react";

const Section4: React.FC = () => {
	return (
		<section className='w-full bg-black text-white py-12 md:py-16'>
			<div className='container mx-auto px-4'>
				{/* Heading */}
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12'>
					We don&apos;t just have a seat for you. <br />
					We have a <span className='border-b-2 border-orange-500'>
						place
					</span>{" "}
					for you.
				</h1>

				{/* Cards */}
				<div className='flex flex-col md:flex-row gap-8 justify-center'>
					{/* Card 1 */}
					<div className='flex-1 max-w-sm'>
						<div className='w-full h-52 '>
							<Image
								src='/assets/come.jpg' // Path relative to public folder
								alt='Woman on stage'
								className='object-cover rounded'
								width='1280'
								height='720'
							/>
						</div>
						<h2 className='text-xl font-bold mb-2'>1. Come this weekend.</h2>
						<p className='mb-4'>
							See for yourself who we are and what we&apos;re about. Stop by the
							Welcome Tent so we can meet you and answer any questions you have.
						</p>
						<a href='#' className='text-orange-500 hover:underline'>
							Let Us Know You&apos;re Coming
						</a>
					</div>

					{/* Card 2 */}
					<div className='flex-1 max-w-sm'>
						<div className='w-full h-52'>
							<Image
								src='/assets/come.jpg' // Path relative to public folder
								alt='Woman on stage'
								className='object-cover rounded'
								width='1280'
								height='720'
							/>
						</div>
						<h2 className='text-xl font-bold mb-2'>2. Attend The Weekender.</h2>
						<p className='mb-4'>
							The Weekender is where you learn who we are and how you can get
							connected through Community Groups and serving at Two Cities.
						</p>
						<a href='#' className='text-orange-500 hover:underline'>
							Learn More About The Weekender
						</a>
					</div>

					{/* Card 3 */}
					<div className='flex-1 max-w-sm'>
						<div className='w-full h-52'>
							<Image
								src='/assets/come.jpg' // Path relative to public folder
								alt='Woman on stage'
								className='object-cover rounded'
								width='1280'
								height='720'
							/>
						</div>
						<h2 className='text-xl font-bold mb-2'>3. Connect with others.</h2>
						<p className='mb-4'>
							Community Groups help you know others and be known well enough to
							truly care for one another and fully live out the Gospel.
						</p>
						<a href='#' className='text-orange-500 hover:underline'>
							Learn More About Community Groups
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section4;
