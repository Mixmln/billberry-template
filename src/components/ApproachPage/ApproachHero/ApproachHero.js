import { Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import "./approachHero.css";

function ApproachHero() {
	return (
		<div
			className="approach-hero-container"
			style={{
				color: "white",
			}}
		>
			<Grid2
				container
				justifyContent="center"
			>
				<Stack spacing={2}>
					<h2
						style={{
							width: "750px",
							margin: "76px auto 114px",
							fontSize: "6rem",
							fontWeight: "normal",
							lineHeight: "1",
						}}
					>
						WE ASK WHY, NOT WHAT
					</h2>
					<p
						style={{
							width: "780px",
							fontSize: "1.5rem",
							lineHeight: "1.4",
							fontWeight: "300",
						}}
					>
						You can expect thoughtfulness and care in everything we do. We’re going to ask you, “why?” and maybe ask again. We’ll dig in as deep as you’ll let us to find the most efficient, impactful, and hopefully, meaningful way to move your business forward.
					</p>
				</Stack>
			</Grid2>
		</div>
	);
}

export default ApproachHero;
