import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import "./contactFooter.css";

function Footer() {
	return (
		<section className="container footer-container">
			<Stack direction="row">
				<Box className=" footer-section">
					<Box className="footer-left">
						<ul className="footer-ul">
							<li>Home</li>
							<li>Work</li>
							<li>Approach</li>
							<li>Notes</li>
							<li>About</li>
							<li>Careers</li>
							<li>Contact</li>
						</ul>
						<p>©2023 All Rights Reserved. Privacy Policy</p>
					</Box>
					<Box
						className="footer-right"
						sx={{
							position: "relative",
						}}
					>
						<p>Blueberry Technologies LLC DBA Bilberrry</p>
					</Box>
				</Box>
			</Stack>
		</section>
	);
}

export default Footer;
