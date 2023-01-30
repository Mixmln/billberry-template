import { Box, Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import "./whatsNext.css";

function WhatsNext() {
	return (
		<Box
			sx={{
				borderBottom: "1px solid white",
			}}
		>
			<Box
				className="container notes-container whats-next"
				sx={{
					color: "white",
					textAlign: "left",
					justifyContent: "space-between",
					paddingBottom: "5rem",
				}}
			>
				<h2>WHAT'S NEXT?</h2>
				<Grid2
					container
					xs={4.3}
				>
					<p>In our perfect world, as we move forward together, you have this other thing you really want to somehow figure out. And we get to start asking why again.</p>

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
						Ready to Innovate? Let's Talk
					</Button>
				</Grid2>
			</Box>
		</Box>
	);
}

export default WhatsNext;
