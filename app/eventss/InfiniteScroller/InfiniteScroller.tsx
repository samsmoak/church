import { useEffect } from "react";
import { Experts } from "./Expert";
import Image from "next/image";
import "./InfiniteScroller.scss";

const InfiniteScroller: React.FC = () => {
	useEffect(() => {
		const scrollers = document.querySelectorAll<HTMLElement>(".scroller");

		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			addAnimation(scrollers);
		}
	}, []);

	const addAnimation = (scrollers: NodeListOf<HTMLElement>) => {
		scrollers.forEach((scroller) => {
			scroller.setAttribute("data-animated", "true");

			const scrollerInner = scroller.querySelector(
				".scroller__inner"
			) as HTMLElement;
			const scrollerContent = Array.from(scrollerInner.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true) as HTMLElement;
				duplicatedItem.setAttribute("aria-hidden", "true");
				scrollerInner.appendChild(duplicatedItem);
			});
		});
	};

	return (
		<div className='flex md:space-x-2 w-full justify-center'>
			<div className='w-11/12 flex justify-center'>
				<div className='scroller' data-speed='slower'>
					<ul className='tag-list scroller__inner'>
						{Experts.map((item: any, index: any) => (
							<li
								className='relative bg-[#333333]/90 flex flex-col sm:flex-row py-4 sm:py-5 px-4 sm:px-6 space-y-4 sm:space-y-0 sm:space-x-4 rounded-xl shadow-md border border-[#C25020]/20 hover:shadow-[#C25020]/40 hover:border-[#C25020]/50 transition-all duration-300 max-w-sm sm:max-w-md md:max-w-lg group'
								key={index}
							>
								<div className='absolute inset-0 bg-gradient-to-r from-[#C25020]/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300' />
								<div className='relative flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#C25020]/40 mx-auto sm:mx-0 group-hover:border-[#C25020]/60 transition-all duration-300'>
									<Image
										src={item.image}
										width={1280}
										height={720}
										alt={`${item.name}, Expert in Faith and Revival`}
										className='w-full h-full object-cover transform scale-110 group-hover:scale-115 transition-transform duration-300'
									/>
								</div>
								<div className='relative flex flex-col justify-center text-center sm:text-left space-y-2 sm:space-y-3'>
									<h3 className='text-xl sm:text-2xl font-extrabold text-[#C25020] tracking-tight font-serif'>
										{item.name}
									</h3>
									<p className='text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 font-medium italic'>
										&quot;{item.comment}&quot;
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* <div className='scroller' data-speed='slow' data-direction='right'>
				<ul className='tag-list scroller__inner'>
					{Experts.map((item: any, index: any) => (
						<li
							className='w-40 sm:w-60 border-dashed border-neutral-400 border-2'
							key={index}
						>
							<div className='flex-shrink-0 w-full h-60 '>
								<Image
									src={item.image}
									width='1280'
									height='720'
									alt={`Expert ${index + 1}`}
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='w-full text-center text-gray-500 text-lg font-semibold'>
								{item.comment}
							</div>
						</li>
					))}
				</ul>
			</div> */}
		</div>
	);
};

export default InfiniteScroller;
