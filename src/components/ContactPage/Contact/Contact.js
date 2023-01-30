import { Box, Button, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Iframe from "react-iframe";
import React from "react";
import "./contact.css";

function Contact() {
	return (
		<Box
			className=" contact-container"
			sx={{
				height: "60vh",
			}}
		>
			<Box
				className="container"
				sx={{
					display: "flex",
					justifyContent: "space-between",
					color: "white",
				}}
			>
				<Stack>
					<Grid2
						sx={{
							display: "flex",
							gap: "1rem",
							justifyContent: "space-between",
							width: "800px",
						}}
					>
						<h2>
							READY TO <br /> INNOVATE?
						</h2>
						<Stack
							className="text"
							sx={{
								fontSize: "0.9rem",
							}}
						>
							<p>info@bilberrry.com 206.818.7436</p>
							<p>111 S Jackson St, Seattle, WA, 98104</p>
						</Stack>
						<Stack
							sx={{
								width: "30%",
							}}
						>
							<p>Provide us with some information on your vision and we’ll get back to in a few hours, we promise.</p>
						</Stack>
					</Grid2>
					<img
						className="map"
						src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1"
						alt=""
					/>
				</Stack>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						width: "30%",
					}}
				>
					<input
						type="text"
						placeholder="Name*"
					/>
					<input
						type="text"
						placeholder="Company*"
					/>
					<input
						type="text"
						placeholder="Work Email Address*"
					/>
					<textarea
						name=""
						id=""
						cols="30"
						rows="10"
						placeholder="Project Details*"
					></textarea>
					<Box
						sx={{
							position: "relative",
						}}
					>
						<Button
							variant="outlined"
							sx={{
								position: "absolute",
								right: "0",
								width: "50%",
								marginTop: 5,
								padding: "0.8rem 2.5rem",
								fontSize: "0.7rem",
								backgroundColor: "black",
								border: "1px solid white",
								color: "#fff",
								":hover": {
									bgcolor: "slategrey",
									border: "1px solid white",
									color: "white",
								},
							}}
						>
							Submit
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Contact;
