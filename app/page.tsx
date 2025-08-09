import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import PurposeBanner from "./components/Banner/Banner";
import ConferenceSection from "./components/Session1/Session1";
import Section2 from "./components/Session2/Session2";
import Session4 from "./components/Session4/Session4";
import Session5 from "./components/Session5/Session5";
import { Session } from "inspector";
import Session6 from "./components/Session6/Session6";
import Section3 from "./components/Session3/Session3";

export default function Home() {
	return (
		<div className='w-screen'>
			<div className='w-full'>
				<PurposeBanner />
				<ConferenceSection />
				<Section2 />
				<Section3 />
				<Session4 />
				<div className='px-5'>
					<Session5 />
				</div>
				<div className='w-full'>
					<Session6 />
				</div>
			</div>
		</div>
	);
}
