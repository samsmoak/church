"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Experts } from "@/app/Expert";

interface Slide {
	image: string;
	alt?: string;
	domain: string;
	name: string;
	pirce: number; // Note: Typo in original interface, assuming it's 'price'
	badge: boolean;
}

const HomeSlider = () => {
	return (
		<section className='w-full bg-white'>
			<div className='max-w-[1200px] mx-auto p-5'>
				<h1 className='text-center text-4xl font-bold mb-8 relative'>
					Helping You Grow In Christ
					<span className='absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-1/3 h-1 bg-orange-500'></span>
				</h1>
				<Swiper
					pagination={{ type: "bullets", clickable: true }}
					spaceBetween={20}
					slidesPerView={1}
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 15,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
					}}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					navigation
					modules={[Autoplay, Navigation, Pagination]}
					className='mySwiper w-full'
				>
					{Experts.map((item, id) => (
						<SwiperSlide key={id}>
							<div className='flex flex-col items-center'>
								<div className='w-full h-56 rounded-lg overflow-hidden relative'>
									<Image
										width={1280}
										height={720}
										src={item.image}
										alt={`Expert ${id + 1}`}
										className='w-full h-full object-cover'
									/>
									{item.badge && (
										<div className='absolute bottom-0 left-0 right-0   text-white px-2 py-1 rounded text-sm font-bold'>
											<h2 className='text-2xl font-semibold my-4 capitalize'>
												{item.name}
											</h2>
											<p className=' capitalize mb-2 py-1 px-2 border-2 border-white '>
												{item.domain}
											</p>
										</div>
									)}
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default HomeSlider;
