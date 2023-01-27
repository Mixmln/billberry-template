import { Box, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import "./impact.css";

function Impact() {
	return (
		<Box className="container impact-container">
			<Box
				className="impact-title"
				sx={{
					paddingTop: 12,
					paddingBottom: 12,
					color: "white",
					textAlign: "left",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Grid2
					container
					xs={1}
				>
					<h5>MAKE YOUR IMPACT</h5>
				</Grid2>
				<Grid2
					container
					xs={9}
					sx={{
						fontSize: "2.2rem",
					}}
				>
					<h2>Discover how a beautifully useful website can deliver what your audience wants & what you need.</h2>
				</Grid2>
			</Box>
			<Stack
				direction="row"
				gap={5}
				sx={{
					paddingTop: 12,
					paddingBottom: 12,
					color: "white",
					textAlign: "left",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Grid2 xs={3}>
					<h4>Brand & messaging</h4>
					<p>Finessing your existing identity? Starting from scratch? We’ll help you uplevel your digital presence, and give you the tools to help you keep your vision consistent.</p>
				</Grid2>
				<Grid2 xs={3}>
					<h4>Content strategy</h4>
					<p>Step one giving your users what they’re looking for. Step two is keeping them coming back for more.</p>
				</Grid2>
				<Grid2 xs={3}>
					<h4>Web design</h4>
					<p>Effective layouts. High-end graphics with meaning. Subtle animation and engaging interactive moments. It all comes together to make an impact.</p>
				</Grid2>
				<Grid2 xs={3}>
					<h4>Custom development</h4>
					<p>A just-for-you WordPress build that we design and configure with backend usability in mind. Because you and your team are users too.</p>
				</Grid2>
			</Stack>
		</Box>
	);
}

export default Impact;
