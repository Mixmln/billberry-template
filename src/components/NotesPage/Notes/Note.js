import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import "./noteSection.css";

function Note({ note }) {
	const { img, title } = note;

	return (
		<div
			className="note "
			style={{
				color: "white",
				maxWidth: "360px",
			}}
		>
			<Grid2
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				gap={3}
			>
				<img
					style={{
						maxWidth: "360px",
						maxHeight: "206px",
					}}
					src={img}
					alt={title}
				/>
				<h5
					className="scale-up-ver-bottom"
					style={{
						fontSize: "1.8rem",
						fontWeight: "normal",
						textAlign: "left",
						lineHeight: "1.2",
						width: "100%",
					}}
				>
					{title}
				</h5>
			</Grid2>
		</div>
	);
}

export default Note;
