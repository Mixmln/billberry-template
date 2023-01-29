import { Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import "../WorkHeroSection/workHeroSection.css";

function WorkHeroSection() {
	return (
		<div
			style={{
				color: "white",
			}}
		>
			<Grid2
				container
				justifyContent="center"
				sx={{
					width: "100%",
				}}
			>
				<Stack
					spacing={2}
					sx={{
						display: "flex",
						justifyContent: "center",
						paddingBottom: "88px",
					}}
				>
					<h2
						style={{
							width: "750px",
							margin: "76px auto 114px",
							fontSize: "6rem",
							fontWeight: "normal",
							lineHeight: "1",
						}}
					>
						WE BRING IDEAS TO LIFE
					</h2>
					<p
						style={{
							width: "780px",
							fontSize: "1.5rem",
							lineHeight: "1.4",
							fontWeight: "300",
						}}
					>
						Since 2009, we’ve worked with ambitious startups, global nonprofits, and Fortune 500s to design and develop digital experiences and custom applications that increase sales, boost brand awareness, and streamline operations.
					</p>
				</Stack>
			</Grid2>
		</div>
	);
}

export default WorkHeroSection;
