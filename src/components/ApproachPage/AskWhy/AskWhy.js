import { Box, Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import "./askWhy.css";

function AskWhy() {
	return (
		<Box
			sx={{
				borderBottom: "1px solid white",
				padding: "90px 0 60px 0",
				marginBottom: 10,
			}}
		>
			<Box
				className="container logos-container ask-why"
				sx={{
					color: "white",
					textAlign: "left",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<img
					src="https://bilberrry.com/wp-content/uploads/2021/04/img-white-paper.jpeg"
					alt="bilberry ask why"
				/>

				<Grid2
					container
					xs={4.4}
				>
					<h2
						style={{
							fontSize: "1.7rem",
							lineHeight: "1",
						}}
					>
						WANT TO LEARN MORE ABOUT HOW WE ACHIEVE SUCCESS WITH OUR CLIENTS?
					</h2>
					<p
						style={{
							fontWeight: "normal",
							fontSize: "1.2rem",
							lineHeight: "1.1",
						}}
					>
						We believe a thoughtful company builds things that work with purpose rather than just work. Download our white paper to learn more about our methodology.
					</p>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							width: "60%",
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
							placeholder="Email*"
						/>
					</Box>
					<Button
						variant="outlined"
						sx={{
							marginTop: 5,
							padding: "0.8rem 2.5rem",
							fontSize: "0.7rem",
							backgroundColor: "black",
							borderColor: "slategrey",
							color: "slategrey",
						}}
					>
						Download white paper
					</Button>
				</Grid2>
			</Box>
		</Box>
	);
}

export default AskWhy;
