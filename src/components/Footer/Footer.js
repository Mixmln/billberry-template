import { ThemeProvider } from "@emotion/react";
import { Button, createTheme, Switch } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import "./footer.css";
import logo from "../../assets/img/bilberrry-logo.png";

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
						<div className="footer-left">
							<img
								className="footer-logo"
								src={logo}
								alt="bilberry logo"
							/>
							<ul className="footer-ul">
								<li>Home</li>
								<li>Work</li>
								<li>Approach</li>
								<li>Notes</li>
								<li>About</li>
								<li>Careers</li>
								<li>Contact</li>
								<Switch />
							</ul>
							<p>©2023 All Rights Reserved. Privacy Policy</p>
						</div>
						<div className="footer-right">
							<h3>WANT TO PARTNER WITH US?</h3>
							<Button
								variant="outlined"
								sx={{
									fontSize: 12,
									width: "40%",
									padding: "16px 26px",
									boxSizing: "border-box",
									lineHeight: 1.5,
									fontWeight: "bold",
									marginBottom: 7,
								}}
								color="justWhite"
							>
								Get in touch
							</Button>
							<p>Blueberry Technologies LLC DBA Bilberrry</p>
						</div>
					</div>
				</Stack>
			</ThemeProvider>
		</section>
	);
}

export default Footer;
