"use client";
import React from "react";
import Image from "next/image";
import { Music, BookOpen, Users } from "lucide-react"; // Using lucide-react for modern icons
import { FaUniversity } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

interface Person {
	image: string;
	title: string;
	description: string;
	icon: React.ReactNode; // Added icon property for each item
}

const persons: Person[] = [
	{
		image: "/assets/church49.jpeg",
		title: "The Trinity",
		description:
			"We believe in the Trinity — the unity of the Father, the Son, and the Holy Spirit — three distinct persons in one Godhead (Matthew 28:19; 2 Corinthians 13:14). God the Father is the Creator of all things, the source of life and love (Genesis 1:1; Psalm 90:2). Jesus Christ is the eternal Son of God, the Savior of the world (John 1:1,14; John 3:16), and the Holy Spirit is the Comforter, Guide, and Power given to the believer (John 14:16-17; Acts 1:8). All three are co-equal, co-eternal, and perfectly one (Deuteronomy 6:4).",
		icon: <Users className='w-8 h-8 text-[#C25020]' />,
	},
	{
		image: "/assets/church1.jpeg",
		title: "The Resurrection",
		description:
			"We believe in the resurrection of Jesus Christ, which is the Father’s clear declaration that Jesus is the powerful Son of God who conquered death and reigns as Lord of all (Romans 1:4; 1 Corinthians 15:3-4). His resurrection assures us of our own resurrection to eternal life (1 Peter 1:3-4; 1 Thessalonians 4:14). Through His death and resurrection, His blood of the New Covenant cleanses all who come to Him in faith from their sins (Hebrews 9:12-14).",
		icon: <Music className='w-8 h-8 text-[#C25020]' />,
	},
	{
		image: "/assets/church4.jpeg",
		title: "The Second Coming of Christ",
		description:
			"We believe that Jesus Christ will return in power and glory to gather His people to Himself (John 14:2-3; Acts 1:11; 1 Thessalonians 4:16-17). His return is certain, recorded in Scripture, and will fulfill His promise to establish His Kingdom fully and finally (Revelation 22:12,20).",
		icon: <BookOpen className='w-8 h-8 text-[#C25020]' />,
	},
	{
		image: "/assets/church4.jpeg",
		title: "Signs and Wonders",
		description:
			"We believe in regularly partaking of the Lord’s Table in obedience to Jesus’ command (Luke 22:19-20; 1 Corinthians 11:23-26). Communion reminds us of His sacrifice, unites us as His body, and renews our hope in His return.",
		icon: <BookOpen className='w-8 h-8 text-[#C25020]' />,
	},
	{
		image: "/assets/church4.jpeg",
		title: "The Communion of the Saints",
		description:
			"We believe that signs and wonders follow those who believe in Jesus Christ (Mark 16:17-18; Acts 2:43). Through the supernatural manifestations of the Holy Spirit — healing, deliverance, miracles, prophecy, and other gifts (1 Corinthians 12:7-10) — the Good News is confirmed and made visible to the unbelieving world.",
		icon: <BookOpen className='w-8 h-8 text-[#C25020]' />,
	},
	{
		image: "/assets/church4.jpeg",
		title: "Tithe and Offering",
		description:
			"We believe that tithing and giving are acts of worship and obedience that express our gratitude to God for His blessings (Malachi 3:10; Proverbs 3:9-10). The tithe — a tenth of our income — belongs to the Lord, and offerings are given above the tithe as the Spirit leads (2 Corinthians 9:6-8).",
		icon: <BookOpen className='w-8 h-8 text-[#C25020]' />,
	},
	{
		image: "/assets/church4.jpeg",
		title: "Salvation by Grace Through Faith",
		description:
			"We believe that salvation is a free gift from God, received by grace through faith in Jesus Christ alone (Ephesians 2:8-9; Titus 3:5). It is not earned by works but is the result of trusting in the finished work of Christ on the cross. Those who repent and believe are forgiven, justified, and born again by the Spirit (Acts 2:38; Romans 5:1).",
		icon: <BookOpen className='w-8 h-8 text-[#C25020]' />,
	},
	{
		image: "/assets/church4.jpeg",
		title: "The Authority of Scripture",
		description:
			"We believe in baptism by immersion in water as an outward expression of the inward change that occurs when a person places their faith in Jesus Christ (Matthew 28:19; Acts 2:41; Romans 6:4). Baptism symbolizes death to sin, burial with Christ, and resurrection into new life.",
		icon: <BookOpen className='w-8 h-8 text-[#C25020]' />,
	},
	{
		image: "/assets/church4.jpeg",
		title: "The Baptism of the Holy Spirit",
		description:
			"We believe in the baptism of the Holy Spirit, given to believers to empower them for service, bold witness, and victorious living (Acts 1:8; Acts 2:1-4). This experience is distinct from and subsequent to salvation, often accompanied by the evidence of speaking in tongues (1 Corinthians 14:2,4).",
		icon: <BookOpen className='w-8 h-8 text-[#C25020]' />,
	},
];

const Sectionintro3: React.FC = () => {
	return (
		<section className='py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#F5F5F5]'>
			<div className='w-full flex justify-center'>
				<div className='text-3xl sm:text-5xl md:text-6xl font-bold py-10 uppercase text-[#333333] font-serif'>
					our beliefs
				</div>
			</div>
			<div className='max-w-6xl mx-auto space-y-16'>
				{persons.map((item, index) => (
					<div
						key={index}
						// className={`flex flex-col ${
						// 	index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
						// } items-center gap-8 lg:gap-12 group`}
						className=' w-full flex '
					>
						{/* <div className='relative w-full md:w-1/2 h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl'>
							<Image
								src={item.image}
								alt={item.title}
								width={1280}
								height={720}
								className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
								priority={index === 0} // Prioritize only the first image for performance
							/>
							<div className='absolute top-4 left-4 bg-white/90 rounded-full p-3 shadow-md'>
								{item.icon}
							</div>
						</div> */}
						<div className='w-full  space-y-4'>
							<h2 className='text-3xl md:text-4xl font-extrabold text-[#333333] mb-4 relative inline-block'>
								{item.title}
								<span className='absolute bottom-0 left-0 w-full h-1 bg-[#C25020]/30 rounded-full'></span>
							</h2>
							<p className='text-gray-600 leading-relaxed text-base md:text-lg'>
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>

			<section className='bg-[#1A1A1A] py-12 sm:py-16 md:py-20 lg:py-24 text-center'>
				<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-serif'>
						our services
					</h2>
					<div className='grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10'>
						<div className='text-left flex items-start'>
							<div className='bg-[#C25020] text-white rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0'>
								<FaUniversity className='w-4 sm:w-5 h-4 sm:h-5' />
							</div>
							<div>
								<h3 className='font-bold text-base sm:text-lg text-white'>
									Sundays — 10:00 AM In-person/Online
								</h3>
								<h3 className='font-bold text-base sm:text-lg text-white'>
									Wednesdays — 7:00 PM
								</h3>
							</div>
						</div>
						<div className='text-left flex items-start'>
							<div className='bg-[#C25020] text-white rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0'>
								<FaLocationDot className='w-4 sm:w-5 h-4 sm:h-5' />
							</div>
							<div>
								<h3 className='font-bold text-base sm:text-lg text-white'>
									2445 Riley Forest Drive Winston-Salem, NC 27127
								</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Sectionintro3;
