import React from "react";
import {
	FaPray,
	FaMusic,
	FaHandsHelping,
	FaCross,
	FaUsers,
} from "react-icons/fa";

const ministries = [
	{
		name: "Prayer & Intercession",
		short: "We pray first. Always.",
		details:
			"At the core of our church's foundation, the Prayer & Intercession ministry emphasizes the transformative power of consistent, fervent prayer. We gather regularly for dedicated intercession sessions, lifting up personal needs, community challenges, and global issues before God. Whether through early morning prayer calls, all-night vigils, or targeted prayer chains, our team equips believers to pray with authority and expectancy, fostering a culture where prayer is not just an activity but a lifestyle that invites divine intervention and breakthroughs.",
		icon: FaPray,
		color: "#C25020",
		bgColor: "#FFF5F0",
	},
	{
		name: "Worship & Creative",
		short: "Prophetic worship that changes atmospheres.",
		details:
			"Our Worship & Creative ministry is a vibrant expression of adoration that transcends traditional boundaries, blending music, arts, and prophecy to create encounters with God's presence. From dynamic praise teams leading Sunday services to creative workshops in dance, visual arts, and spoken word, we cultivate an environment where creativity flows freely. Our prophetic worship sessions are designed to shift spiritual atmospheres, ushering in healing, revelation, and joy, while empowering artists of all ages to use their gifts for God's glory and to inspire the congregation to deeper intimacy with Him.",
		icon: FaMusic,
		color: "#C25020",
		bgColor: "#FFF5F0",
	},
	{
		name: "Evangelism & Outreach",
		short: "Taking revival beyond the walls.",
		details:
			"The Evangelism & Outreach ministry is committed to extending the fire of revival into every corner of our community and beyond. Through street evangelism, compassion-driven service projects, and international mission trips, we share the Gospel with boldness and love. Our initiatives include food drives for the needy, school partnerships for mentoring, and public events that demonstrate God's kindness. We train and mobilize members to be effective witnesses, equipping them with tools for personal evangelism while partnering with local organizations to address social needs, ensuring that the message of hope reaches those who need it most.",
		icon: FaHandsHelping,
		color: "#C25020",
		bgColor: "#FFF5F0",
	},
	{
		name: "Deliverance & Healing",
		short: "Freedom is here.",
		details:
			"In the Deliverance & Healing ministry, we proclaim and pursue total freedom in Christ, addressing spiritual bondages, emotional wounds, and physical ailments through prayer and biblical truth. Our confidential sessions offer personalized ministry, where trained teams guide individuals toward breakthrough using Scripture, anointing oil, and the laying on of hands. We host regular healing services and workshops on inner healing, helping participants renounce strongholds and embrace their identity in God. With a focus on compassion and discretion, this ministry creates a safe space for restoration, where miracles become commonplace and lives are radically transformed.",
		icon: FaCross,
		color: "#C25020",
		bgColor: "#FFF5F0",
	},
	{
		name: "Youth & Young Adults",
		short: "Raising a generation on fire.",
		details:
			"Dedicated to igniting passion in the next generation, our Youth & Young Adults ministry builds a community of young believers who are bold, equipped, and on fire for Jesus. Through engaging weekly gatherings, leadership development programs, and fun events like retreats and sports nights, we foster spiritual growth and authentic relationships. Topics range from identity in Christ to navigating modern challenges with faith, with mentorship from seasoned leaders. We encourage service opportunities, creative expressions, and peer-led initiatives, empowering youth to lead revivals in their schools, workplaces, and beyond, ensuring a legacy of fervent disciples.",
		icon: FaUsers,
		color: "#C25020",
		bgColor: "#FFF5F0",
	},
];

const SectionM2: React.FC = () => {
	return (
		<div>
			<section className='py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#F5F5F5] to-white'>
				<div className='max-w-7xl mx-auto'>
					<h2 className='text-4xl md:text-5xl font-bold text-center mb-12 text-[#333333] uppercase tracking-wider'>
						Our Ministries
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{ministries.map((ministry, index) => {
							const Icon = ministry.icon;
							return (
								<div
									key={index}
									className='bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'
								>
									<div
										className='flex justify-center items-center h-32'
										style={{ backgroundColor: ministry.bgColor }}
									>
										<Icon
											className='text-7xl'
											style={{ color: ministry.color }}
										/>
									</div>
									<div className='p-6'>
										<h3 className='text-2xl font-semibold mb-2 text-[#333333]'>
											{ministry.name}
										</h3>
										<p className='text-sm uppercase tracking-wide text-gray-600 mb-4'>
											{ministry.short}
										</p>
										<p className='text-gray-700 leading-relaxed text-base'>
											{ministry.details}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default SectionM2;
