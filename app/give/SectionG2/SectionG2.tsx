"use client";
import React from "react";
import {
	FaMobileAlt,
	FaEnvelope,
	FaDollarSign,
	FaUniversity,
	FaFacebookF,
	FaInstagram,
	FaYoutube,
	FaTwitter,
} from "react-icons/fa";

const GivePage: React.FC = () => {
	return (
		<div className='min-h-screen font-sans'>
			{/* Hero Section */}
			<section className='bg-white py-16 md:py-24 text-center'>
				<div className='max-w-4xl mx-auto px-4'>
					<h1 className='text-3xl md:text-5xl font-bold text-black'>
						Your generosity fuels the mission!
					</h1>
					<p className='mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto'>
						Your giving enables us to provide resources needed to grow our
						current ministries, bless our community, and increase our role in
						church planting both here and around the world.
					</p>
					<a
						href='https://twocitieschurch.churchcenter.com/giving?open-in-church-center-modal=true'
						target='_blank'
						rel='noopener noreferrer'
						className='mt-8 inline-block bg-orange-500 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-600 transition'
					>
						Give Online
					</a>
				</div>
			</section>

			{/* Info Section */}
			<section className='bg-gray-100 py-16 md:py-24 text-center'>
				<div className='max-w-4xl mx-auto px-4'>
					<h2 className='text-2xl md:text-3xl font-bold text-black'>
						Here are a few things you may like to know about your giving to Two
						Cities Church:
					</h2>
					<div className='mt-12 grid md:grid-cols-2 gap-8'>
						<div className='text-left'>
							<div className='flex items-start'>
								<div className='bg-orange-500 text-white rounded-full p-2 mr-4 flex-shrink-0'>
									<FaUniversity className='w-4 h-4' />{" "}
									{/* Placeholder icon, adjust as needed */}
								</div>
								<div>
									<h3 className='font-bold text-lg'>
										Your giving is confidential.
									</h3>
									<p className='text-gray-600'>
										Your name or amount that you give never goes beyond our
										financial department.
									</p>
								</div>
							</div>
						</div>
						<div className='text-left'>
							<div className='flex items-start'>
								<div className='bg-orange-500 text-white rounded-full p-2 mr-4 flex-shrink-0'>
									<FaUniversity className='w-4 h-4' />
								</div>
								<div>
									<h3 className='font-bold text-lg'>
										Your giving is 100% tax deductible.
									</h3>
									<p className='text-gray-600'>
										We are a qualified 501c3 organization.
									</p>
								</div>
							</div>
						</div>
						<div className='text-left'>
							<div className='flex items-start'>
								<div className='bg-orange-500 text-white rounded-full p-2 mr-4 flex-shrink-0'>
									<FaUniversity className='w-4 h-4' />
								</div>
								<div>
									<h3 className='font-bold text-lg'>
										You can check your giving at any time.
									</h3>
									<p className='text-gray-600'>
										Through the year, you can check your giving statement
										online, and you will receive year end giving statements.
									</p>
								</div>
							</div>
						</div>
						<div className='text-left'>
							<div className='flex items-start'>
								<div className='bg-orange-500 text-white rounded-full p-2 mr-4 flex-shrink-0'>
									<FaUniversity className='w-4 h-4' />
								</div>
								<div>
									<h3 className='font-bold text-lg'>
										Your giving is stewarded well.
									</h3>
									<p className='text-gray-600'>
										You can be confident your gifts are wisely managed so that
										every dollar is maximized for ministry and mission.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Ways to Give Section - Updated with third image data and icons */}
			<section className='bg-black text-white py-16 md:py-24'>
				<div className='max-w-md mx-auto px-4'>
					<p className='text-xs uppercase tracking-wider text-gray-400'>
						Giving Platforms
					</p>
					<h2 className='text-4xl md:text-5xl font-bold uppercase mt-2'>
						Ways To Give
					</h2>
					<div className='mt-8 space-y-6 text-lg'>
						<div className='flex items-center'>
							<FaMobileAlt className='w-6 h-6 mr-4' />
							<span>Zelle 302-397-1397</span>
						</div>
						<div className='flex items-center'>
							<FaEnvelope className='w-6 h-6 mr-4' />
							<span>PayPal Stephenftsm@icloud.com</span>
						</div>
						<div className='flex items-center'>
							<FaDollarSign className='w-6 h-6 mr-4' />
							<span>CashApp $ftsn522</span>
						</div>
						<div className='flex items-center'>
							<FaUniversity className='w-6 h-6 mr-4' />
							<span>Check / Bank Transfer</span>
						</div>
					</div>
					<div className='mt-8 flex items-center justify-start text-sm'>
						<a href='https://www.ftsm522.com' className='mr-4 hover:underline'>
							www.ftsm522.com
						</a>
						<span className='mr-4'>|</span>
						<a
							href='https://www.instagram.com/FTSM522/'
							className='mr-4 hover:underline'
						>
							@FTSM522
						</a>
						<a
							href='https://www.facebook.com/FTSM522/'
							className='text-white hover:text-gray-300 mr-2'
						>
							<FaFacebookF className='inline w-4 h-4' />
						</a>
						<a
							href='https://www.instagram.com/FTSM522/'
							className='text-white hover:text-gray-300 mr-2'
						>
							<FaInstagram className='inline w-4 h-4' />
						</a>
						<a
							href='https://www.youtube.com/'
							className='text-white hover:text-gray-300 mr-2'
						>
							<FaYoutube className='inline w-4 h-4' />
						</a>{" "}
						{/* Assuming YouTube */}
						<a href='https://x.com/' className='text-white hover:text-gray-300'>
							<FaTwitter className='inline w-4 h-4' />
						</a>{" "}
						{/* Assuming Twitter/X */}
					</div>
				</div>
			</section>
		</div>
	);
};

export default GivePage;
