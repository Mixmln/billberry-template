import { ThemeProvider } from "@emotion/react";
import { Box, Button, createTheme, Switch } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import "./contactFooter.css";

const theme = createTheme({
	status: {
		danger: "#e53e3e",
	},
	palette: {
		primary: {
			main: "#0971f1",
			darker: "#053e85",
		},
		neutral: {
			main: "#64748B",
			contrastText: "#fff",
		},
		justWhite: {
			main: "#ffffff",
		},
	},
});

function Footer() {
	return (
		<section className="container footer-container">
			<ThemeProvider theme={theme}>
				<Stack direction="row">
					<div className=" footer-section">
						<Box
							className="footer-left"
							sx={{
								position: "relative",
							}}
						>
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
							<Box
								className="footer-right"
								sx={{
									position: "absolute",
									bottom: "0",
									right: "0",
								}}
							>
								<p>Blueberry Technologies LLC DBA Bilberrry</p>
							</Box>
						</Box>
					</div>
				</Stack>
			</ThemeProvider>
		</section>
	);
}

export default Footer;
