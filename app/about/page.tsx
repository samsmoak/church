// app/about/page.tsx
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function AboutPage() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-[#fff5f0] to-white text-[#333333] font-sans antialiased'>
			{/* Hero Section */}
			<section className='relative h-[500px] flex items-center justify-center overflow-hidden shadow-xl'>
				<Image
					src='/assets/churchfly5.jpg' // Enhanced placeholder for church worship image
					alt='Church Worship'
					fill
					className='object-cover brightness-60'
				/>
				<div className='absolute text-center z-10 px-4'>
					<h1 className='text-6xl font-extrabold text-white mb-6 drop-shadow-lg'>
						About Fruit of the Spirit Ministries 522
					</h1>
					<p className='text-2xl text-white font-light drop-shadow-md'>
						Igniting Revival and Bringing Restoration Through the Power of God
					</p>
				</div>
			</section>

			{/* About the Church Section */}
			<section className='py-20 px-6 md:px-12 max-w-7xl mx-auto'>
				<h2 className='text-5xl font-bold text-center mb-16 text-[#C25020] tracking-wide'>
					About Our Church
				</h2>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					<div className='bg-white rounded-2xl shadow-2xl p-10 ring-1 ring-[#C25020]/20 hover:ring-[#C25020]/40 transition-all duration-300'>
						<p className='text-lg leading-relaxed mb-6'>
							Fruit of the Spirit Ministries 522 (FTSM 522) is a dynamic, Holy
							Spirit-driven, and Bible-centered church dedicated to cultivating
							a community of believers who are on fire for God, strong in faith,
							and productive in their spiritual lives. The foundation of this
							ministry was laid upon a divine vision bestowed in 2006, and it
							was officially inaugurated in 2021. Our primary purpose is to
							spark a widespread revival and facilitate restoration in the lives
							of individuals, families, and entire communities. This is achieved
							through the unwavering proclamation of God&apos;s Word and the
							tangible demonstration of His powerful presence in our midst.
						</p>
						<p className='text-lg leading-relaxed mb-6'>
							At the core of FTSM 522&apos;s beliefs is the conviction that
							genuine and lasting transformation originates from within the
							heart and is realized through complete surrender to Jesus Christ.
							Our worship services are characterized by fervent passion, our
							prayer sessions are purposeful and focused, and our preaching is
							infused with the fire of the Holy Spirit. We present the
							Scriptures in their purest form—potent, authoritative, and
							prophetic—empowering believers to achieve victory in every area of
							life and to fulfill the unique destiny God has ordained for them.
						</p>
						<p className='text-lg leading-relaxed mb-6'>
							No matter your current state—whether you are experiencing
							brokenness, searching for guidance, or yearning for a deeper
							relationship with God—FTSM 522 is the sanctuary where the
							purifying fire of the Holy Spirit intersects with the nurturing
							fruit of the Spirit. We not only profess belief in change; we
							embody it, declare it boldly, and enable others to embrace and
							walk in it daily. Through our various programs, outreach
							initiatives, and community engagements, we strive to create an
							environment where faith flourishes, relationships are healed, and
							purposes are discovered.
						</p>
						<p className='text-lg leading-relaxed'>
							Join us as we pursue a deeper walk with Christ, fostering an
							atmosphere of love, support, and spiritual growth. Together, we
							are building a legacy of faith that impacts generations to come.
						</p>
					</div>
					<div className='relative h-[600px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500'>
						<Image
							src='/assets/church5.jpeg' // Enhanced placeholder for church community image
							alt='Our Church Community'
							fill
							className='object-none'
						/>
					</div>
				</div>
			</section>

			{/* Mission and Vision Cards */}
			<section className='py-20 px-6 md:px-12 max-w-7xl mx-auto bg-gradient-to-r from-[#fff5f0] to-[#ffece6]'>
				<h2 className='text-5xl font-bold text-center mb-16 text-[#C25020] tracking-wide'>
					Our Mission & Vision
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
					<div className='bg-white rounded-2xl shadow-2xl p-10 ring-1 ring-[#C25020]/20 hover:ring-[#C25020]/40 transform hover:scale-105 transition-all duration-300'>
						<h3 className='text-3xl font-bold mb-6 text-[#C25020]'>
							Our Mission
						</h3>
						<p className='text-lg leading-relaxed'>
							To witness lives being revived, restored, and launched into their
							divine purpose through the unparalleled power of God. We are
							committed to reaching out to the lost, healing the broken, and
							equipping the saints for the work of ministry. Through
							compassionate outreach, powerful teachings, and Spirit-led
							initiatives, we aim to transform communities one soul at a time,
							ensuring that every individual experiences the fullness of
							God&apos;s love and grace.
						</p>
					</div>
					<div className='bg-white rounded-2xl shadow-2xl p-10 ring-1 ring-[#C25020]/20 hover:ring-[#C25020]/40 transform hover:scale-105 transition-all duration-300'>
						<h3 className='text-3xl font-bold mb-6 text-[#C25020]'>
							Our Vision
						</h3>
						<p className='text-lg leading-relaxed'>
							To awaken an entire generation to the truth of the Gospel, fill
							them with the Holy Spirit, and ignite them to burn brightly for
							the glory of Jesus Christ. We envision a world where believers are
							empowered to live victoriously, communities are restored through
							faith, and the Kingdom of God is advanced globally. By fostering a
							culture of prayer, worship, and discipleship, we seek to raise up
							leaders who will carry the fire of revival to the ends of the
							earth.
						</p>
					</div>
				</div>
			</section>

			{/* About the Pastor Section */}
			<section className='py-20 px-6 md:px-12 max-w-7xl mx-auto'>
				<h2 className='text-5xl font-bold text-center mb-16 text-[#C25020] tracking-wide'>
					Meet Our Lead Pastor
				</h2>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					<div className='relative h-[600px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500'>
						<Image
							src='/assets/church21.jpeg' // Enhanced placeholder for pastor image
							alt='Pastor Steven Jason'
							fill
							className='object-cover'
						/>
					</div>
					<div className='bg-white rounded-2xl shadow-2xl p-10 ring-1 ring-[#C25020]/20 hover:ring-[#C25020]/40 transition-all duration-300'>
						<h3 className='text-4xl font-bold mb-6 text-[#C25020]'>
							Pastor Steven Jason
						</h3>
						<p className='text-lg leading-relaxed mb-6'>
							Pastor Steven Jason is the visionary founder and lead Pastor of
							Fruit of the Spirit Ministries 522 (FTSM 522). The ministry was
							born from a divine vision he received in 2006 and was officially
							launched in 2021. However, his calling to ministry started much
							earlier; at the young age of 12, Pastor Steven began preaching in
							schools and churches, driven by an extraordinary spiritual hunger
							and a deep burden to see lives radically transformed by God&apos;s
							power.
						</p>
						<p className='text-lg leading-relaxed mb-6'>
							His ministry is firmly rooted in the Word of God, invigorated by
							the Holy Spirit, and authenticated by miraculous signs and
							wonders. As a firebrand preacher with a prophetic calling, Pastor
							Steven emphasizes revival and restoration, aiming to see
							individuals, families, and communities set ablaze by God&apos;s
							presence and restored to their full potential in Christ.
						</p>
						<p className='text-lg leading-relaxed mb-6'>
							Renowned for his profound understanding of spiritual warfare,
							healing, and deliverance, Pastor Steven ministers with a potent
							anointing that dismantles the enemy&apos;s works and equips
							believers to live courageously and liberated in their God-given
							assignments. His teachings are not only insightful but also
							practical, providing tools for believers to navigate life&apos;s
							challenges with faith and authority.
						</p>
						<p className='text-lg leading-relaxed'>
							Although not yet married, Pastor Steven&apos;s life is wholly
							consecrated to God&apos;s call, characterized by decades of
							personal dedication, continuous spiritual development, and an
							unyielding pursuit of God&apos;s presence. His vision is
							straightforward yet all-consuming: &quot;To see people set on fire
							for the Lord.&quot; Through his leadership, countless lives have
							been touched, and the ministry continues to grow in impact and
							reach.
						</p>
					</div>
				</div>
			</section>

			{/* Social Media Section */}
			<section className='py-20 px-6 md:px-12 max-w-7xl mx-auto bg-[#C25020] text-white'>
				<h2 className='text-5xl font-bold text-center mb-16 tracking-wide'>
					Connect With Us
				</h2>
				<div className='flex justify-center space-x-12'>
					<a
						href='https://www.facebook.com/ftsm522'
						target='_blank'
						rel='noopener noreferrer'
						className='text-5xl hover:scale-125 hover:text-[#fff5f0] transition-all duration-300'
					>
						<FaFacebookF />
					</a>
					<a
						href='https://www.instagram.com/ftsm522/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-5xl hover:scale-125 hover:text-[#fff5f0] transition-all duration-300'
					>
						<FaInstagram />
					</a>
					<a
						href='https://www.tiktok.com/@ftsm522?_t=8jb5GZR2ke2&_r=1'
						target='_blank'
						rel='noopener noreferrer'
						className='text-5xl hover:scale-125 hover:text-[#fff5f0] transition-all duration-300'
					>
						<FaTiktok />
					</a>
					<a
						href='https://www.youtube.com/@The522Church'
						target='_blank'
						rel='noopener noreferrer'
						className='text-5xl hover:scale-125 hover:text-[#fff5f0] transition-all duration-300'
					>
						<FaYoutube />
					</a>
				</div>
			</section>
		</div>
	);
}
