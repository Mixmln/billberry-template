import React from "react";
import Works from "../components/CustomSoftware/RecentWorks/Works";
import Slider from "../components/CustomSoftware/Slider/Slider";
import SoftwareDevServices from "../components/CustomSoftware/SoftwareDevServices/SoftwareDevServices";
import Logos from "../components/DigitalTransformationPage/Logos/Logos";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer.js";
import Notes from "../components/DigitalTransformationPage/Notes/Notes.js";

function CustomSoftwarePage() {
	return (
		<div className="App">
			<Nav></Nav>
			<Hero
				mainImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fearth_2-HD.jpg&f=1&nofb=1&ipt=79a890b2cfdf2265def180207f7abdd387e839bde727f6b383ab858d69f5fe11&ipo=images"
				title="WHAT´S POSSIBLE WITH THE RIGHT PRODUCT?"
			></Hero>
			<SoftwareDevServices></SoftwareDevServices>
			<Works></Works>
			<Slider></Slider>
			<div
				style={{
					padding: "70px 0 0px 0",
				}}
			>
				<Logos></Logos>
			</div>
			<Notes></Notes>
			<Footer></Footer>
		</div>
	);
}

export default CustomSoftwarePage;
