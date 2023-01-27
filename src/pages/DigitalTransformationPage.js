import React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Transformation from "../components/DigitalTransformationPage/Transformation/Transformation";
import Bridal from "../components/DigitalTransformationPage/Bridal/Bridal";
import Pasco from "../components/DigitalTransformationPage/Pasco/Pasco";
import Logos from "../components/DigitalTransformationPage/Logos/Logos";
import Notes from "../components/DigitalTransformationPage/Notes/Notes";

function DigitalTransformationPage() {
	return (
		<div className="App ">
			<Nav />
			<Hero
				title="MAKE IT HAPPEN
      STARTING NOW"
				mainImage="https://images.unsplash.com/photo-1429667947446-3c93a979b7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
			/>
			<Transformation />
			<Bridal />
			<Pasco />
			<Logos />
			<Notes />
			<Footer />
		</div>
	);
}

export default DigitalTransformationPage;
