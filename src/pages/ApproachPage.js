import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import ApproachHero from "../components/ApproachPage/ApproachHero/ApproachHero";
import { Box } from "@mui/material";
import PersonsSection from "../components/ApproachPage/PersonsSection/PersonsSection";
import AskWhy from "../components/ApproachPage/AskWhy/AskWhy";
import WhatsNext from "../components/ApproachPage/WhatsNext/WhatsNext";

function ApproachPage() {
	return (
		<Box
			sx={{
				bgcolor: "#000",
			}}
		>
			<Nav />
			<ApproachHero />
			<PersonsSection />
			<AskWhy />
			<WhatsNext />
			<Footer />
		</Box>
	);
}

export default ApproachPage;
