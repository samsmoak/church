import React from "react";
import Sectionintro1 from "./components/SectionIntro1/Sectionintro1";
import Sectionintro2 from "./components/Sectionintro2.tsx/Sectionintro2";
import Sectionintro3 from "./components/Sectionintro3/Sectionintro3";
import Sectionintro4 from "./components/Sectionintro4/Sectionintro4";

function Introduction() {
	return (
		<div>
			<Sectionintro1 />
			<Sectionintro2 />
			<Sectionintro3 />
			<Sectionintro4 />
		</div>
	);
}

export default Introduction;
