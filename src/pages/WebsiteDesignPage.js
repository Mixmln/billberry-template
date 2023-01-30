import React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import Approach from "../components/WebsiteDesignPage/Approach/Approach";
import DesignProjects from "../components/WebsiteDesignPage/DesignProjects/DesignProjects";
import Impact from "../components/WebsiteDesignPage/Impact/Impact";
import MoreWork from "../components/WebsiteDesignPage/MoreWork/MoreWork";
import Logos from "../components/DigitalTransformationPage/Logos/Logos";
import Notes from "../components/DigitalTransformationPage/Notes/Notes";
import Footer from "../components/Footer/Footer";

function WebsiteDesignPage() {
	return (
		<div className="App">
			<Nav />
			<Hero
				mainImage="https://images.unsplash.com/photo-1495900158145-fa1e1786861b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80"
				title="WHAT YOU WANT IS POSSIBLE"
			/>
			<Impact />
			<DesignProjects />
			<Approach />
			<MoreWork />
			<Logos />
			<Notes />
			<Footer />
		</div>
	);
}

export default WebsiteDesignPage;
