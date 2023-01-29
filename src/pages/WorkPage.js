import React from "react";
import Nav from "../components/Nav/Nav.js";
import WorkHeroSection from "../components/WorkPage/WorkHeroSection/WorkHeroSection.js";
import MoreWorks from "../components/WorkPage/WorkHeroSection/Works/MoreWorks.js";

function WorkPage() {
	return (
		<div className="App">
			<Nav></Nav>
			<WorkHeroSection></WorkHeroSection>
			<MoreWorks></MoreWorks>
		</div>
	);
}

export default WorkPage;
