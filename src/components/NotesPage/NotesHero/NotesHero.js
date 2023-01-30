import { Stack } from "@mui/material";
import React from "react";

function NotesHero() {
	return (
		<Stack
			sx={{
				color: "white",
				paddingTop: "120px",
				paddingBottom: "45px",
			}}
		>
			<h2
				style={{
					fontWeight: "normal",
					fontSize: "3.8rem",
					marginBottom: "30px",
				}}
			>
				NOTES
			</h2>
			<p
				style={{
					textAlign: "center",
					fontSize: "1.1rem",
					lineHeight: "1.5",
				}}
			>
				Thoughts and insights on design, development, business and tech.
				<br></br>
				By the Bilberrry team.
			</p>
		</Stack>
	);
}

export default NotesHero;
