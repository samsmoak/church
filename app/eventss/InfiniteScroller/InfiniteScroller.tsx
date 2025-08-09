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
		<div className='flex md:space-x-2 w-full   justify-center'>
			<div className='w-11/12  flex justify-center'>
				<div className=' scroller  ' data-speed='slower'>
					<ul className='   tag-list scroller__inner  '>
						{Experts.map((item: any, index: any) => (
							<li
								className=' flex flex-row py-4 px-4 space-x-2 rounded-md   border-2 border-gray-200 '
								key={index}
							>
								<div className='flex-shrink-0 w-20 h-20 rounded-md overflow-hidden '>
									<Image
										src={item.image}
										width='1280'
										height='720'
										alt={`Expert ${index + 1}`}
										className='w-full h-full object-cover'
									/>
								</div>
								<div className='space-y-2'>
									<div>name of mentor </div>
									<div className='w-full whitespace-normal  text-gray-500 text-sm font-semibold'>
										{item.comment}
									</div>
									<div>
										<div>other details </div>
										<div>other details </div>
									</div>
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
