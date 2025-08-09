import React from "react";

const Sectionintro2: React.FC = () => {
	return (
		<section className='py-10 px-4 md:px-8 lg:px-16 bg-white'>
			<div className='max-w-4xl mx-auto relative rounded-lg overflow-hidden shadow-lg'>
				<iframe
					className='w-full h-64 md:h-96'
					src='https://www.youtube.com/embed/u7Gu2byrJT4'
					title='Welcome to Two Cities!'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerPolicy='strict-origin-when-cross-origin'
					allowFullScreen
				></iframe>
				<div className='absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/60 to-transparent text-white flex items-center justify-between'>
					<div className='flex items-center'>
						<div className='w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-2 text-white font-bold'>
							O
						</div>
						<h2 className='text-2xl font-bold'>Welcome to Two Cities!</h2>
					</div>
					<button className='text-white'>Share ↑</button>
				</div>
				<div className='absolute bottom-0 left-0 p-2 bg-black text-white text-sm flex items-center rounded-tr-lg'>
					<span>Watch on</span>
					<span className='ml-1 text-red-600 font-bold'>YouTube</span>
				</div>
			</div>
		</section>
	);
};

export default Sectionintro2;
