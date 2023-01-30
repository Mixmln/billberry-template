import React from "react";
import AboutHero from "../components/AboutPage/AboutHero/AboutHero";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { Box } from "@mui/material";
import Team from "../components/AboutPage/Team/Team";

function AboutPage() {
	return (
		<Box
			sx={{
				bgcolor: "#000",
				color: "#fff",
			}}
		>
			<Nav />
			<AboutHero />
			<Team />
			<div className="hr"></div>
			<Footer />
		</Box>
	);
}

export default AboutPage;
