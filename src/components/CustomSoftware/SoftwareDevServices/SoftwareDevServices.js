import { Box, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import "../SoftwareDevServices/softwareDevServices.css";

function SoftwareDevServices() {
	return (
		<div className="software-section">
			<div className="container">
				<Box
					sx={{
						marginTop: 12,
						paddingBottom: 12,
					}}
				>
					<Grid2
						container
						spacing={2}
						sx={{
							justifyContent: "space-between",
						}}
					>
						<Grid2
							xs={3}
							sx={{
								color: "white",
							}}
						>
							<h5 className="software-section-title">SOFTWARE DEVELOPMENT SERVICES</h5>
						</Grid2>
						<Grid2 xs={9}>
							<Box
								sx={{
									color: "white",
								}}
							>
								<Stack>
									<h2 className="software-h2-title">We provide custom software solutions to meet your unique business needs</h2>
									<p className="software-text">Since 2009, we’ve partnered with ambitious startups, global nonprofits, and Fortune 500 companies to create custom software that helps them innovate and grow.</p>
								</Stack>
							</Box>
						</Grid2>
					</Grid2>
					<Stack
						direction="row"
						color="white"
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								width: "26%",
								gap: "24px",
								textAlign: "left",
								paddingRight: "20px",
								boxSizing: "border-box",
							}}
						>
							<h5 className="software-box-title">Web Application Development</h5>
							<p className="software-box-text">Design and develop interactive web applications that can streamline operations, improve customer experiences, and grow your brand.</p>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								width: "26%",
								gap: "24px",
								textAlign: "left",
								paddingRight: "30px",
								boxSizing: "border-box",
							}}
						>
							<h5 className="software-box-title">Prototyping & MVP Development</h5>
							<p className="software-box-text">Save costs by rapidly testing new ideas and software features, providing valuable feedback for future development.</p>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								width: "26%",
								gap: "24px",
								textAlign: "left",
								paddingRight: "30px",
								boxSizing: "border-box",
							}}
						>
							<h5 className="software-box-title">Application Modernization</h5>
							<p className="software-box-text">Upgrade existing software applications to make them more efficient, effective, and secure.</p>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								width: "26%",
								gap: "24px",
								textAlign: "left",
								paddingRight: "20px",
								boxSizing: "border-box",
							}}
						>
							<h5 className="software-box-title">Mobile Application Development</h5>
							<p className="software-box-text">Create scalable, cross-platform, and hybrid mobile apps to improve your business reach.</p>
						</Box>
					</Stack>
				</Box>
			</div>
		</div>
	);
}

export default SoftwareDevServices;
