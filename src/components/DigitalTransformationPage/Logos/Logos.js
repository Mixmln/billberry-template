import { Box, Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import "./logos.css";

function Logos() {
	return (
		<Box
			sx={{
				borderBottom: "1px solid white",
				padding: "90px 0 60px 0",
				marginBottom: 10,
			}}
		>
			<Box
				className="container logos-container"
				sx={{
					color: "white",
					textAlign: "left",
				}}
			>
				<img
					src="https://bilberrry.com/wp-content/uploads/2022/08/logos.png"
					alt="welding"
				/>

				<Grid2
					container
					xs={6}
				>
					<h2
						style={{
							fontSize: "3.5rem",
							lineHeight: "1",
						}}
					>
						SOME OF OUR BEST WORK HAS TO BE KEPT UNDER WRAPS.
					</h2>
					<p
						style={{
							fontWeight: "normal",
							fontSize: "1.5rem",
							lineHeight: "1.4",
						}}
					>
						Interested in learning more? Get in touch and we’ll walk you through how we’ve concepted, designed, and executed ongoing digital strategies with other world class organizations.
					</p>
					<Box
						sx={{
							display: "flex",
							width: "100%",
						}}
					>
						<input
							type="text"
							placeholder="Name*"
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
							backgroundColor: "white",
							color: "#000000",
							":hover": {
								bgcolor: "#000000",
								border: "1px solid white",
								color: "white",
							},
						}}
					>
						Submit
					</Button>
				</Grid2>
			</Box>
		</Box>
	);
}

export default Logos;
