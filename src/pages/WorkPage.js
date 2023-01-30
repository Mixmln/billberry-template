import React from "react";
import Benefits from "../components/Home/Benefits/Benefits.js";
import Nav from "../components/Nav/Nav.js";
import WorkHeroSection from "../components/WorkPage/WorkHeroSection/WorkHeroSection.js";
import MoreWorks from "../components/WorkPage/WorkHeroSection/Works/MoreWorks.js";
import Footer from "../components/Footer/Footer.js";

function WorkPage() {
	return (
		<div className="App">
			<Nav></Nav>
			<WorkHeroSection></WorkHeroSection>
			<MoreWorks></MoreWorks>
			<Benefits></Benefits>
			<Footer></Footer>
		</div>
	);
}

export default WorkPage;
