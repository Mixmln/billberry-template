import { Box } from "@mui/system";
import React from "react";
import Contact from "../components/ContactPage/Contact/Contact";
import ContactFooter from "../components/ContactPage/ContactFooter/ContactFooter";
import Nav from "../components/Nav/Nav";

function ContactPage() {
	return (
		<Box
			sx={{
				bgcolor: "#000",
			}}
		>
			<Nav />
			<Contact />
			<ContactFooter />
		</Box>
	);
}

export default ContactPage;
