import { Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import "./aboutHero.css";

function AboutHero() {
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
						LIFE AT BILBERRRY
					</h2>
					<p
						style={{
							width: "780px",
							fontSize: "1.5rem",
							lineHeight: "1.4",
							fontWeight: "300",
						}}
					>
						As true partners to our clients, we solve problems, not tickets. Our developers, strategists, and designers are autonomous, outspoken, collaborative, and love doing the work. We’ve kept our team small and our org flat on purpose: that’s how we stay nimble, transparent, and human-centric. We have 55 full time employees and are headquartered in Seattle, Washington.
					</p>
				</Stack>
			</Grid2>
		</div>
	);
}

export default AboutHero;
