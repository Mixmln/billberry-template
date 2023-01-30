import { Box, Stack } from "@mui/material";
import React from "react";
import "./approach.css";

function Approach() {
	return (
		<Box
			className="approach-container"
			sx={{
				marginTop: 20,
			}}
		>
			<Box className="container">
				<Box
					gap={10}
					sx={{
						display: "flex",
						justifyContent: "space-between",
						paddingTop: 10,
						paddingBottom: 10,
						textAlign: "left",
						color: "white",
					}}
				>
					<h2>
						Our <br /> approach
						<br /> to excellent websites
					</h2>
					<p>We believe websites are a collaboration. Our designers, content strategists, copywriters, developers, and project managers are in lock-step with you from kickoff to launch and beyond. Together, we establish a unified vision that incorporates it all — brand design, technical requirements, business objectives — and plan towards that vision.</p>
				</Box>
			</Box>
		</Box>
	);
}

export default Approach;
