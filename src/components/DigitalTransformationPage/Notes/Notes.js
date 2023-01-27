import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import "./notes.css";

function Notes() {
	return (
		<Box
			sx={{
				borderBottom: "1px solid white",
			}}
		>
			<Box
				className="container notes-container"
				sx={{
					color: "white",
					textAlign: "left",
					justifyContent: "space-between",
				}}
			>
				<h2>Notes</h2>
				<Grid2
					container
					xs={6}
				>
					<div className="notes-p-btn first">
						<p>
							How we approach new design + development initiatives
							<HiArrowRight className="slide-left arrow-right" />{" "}
						</p>
					</div>
					<div className="notes-p-btn">
						<p>
							The end of enterprise software
							<HiArrowRight className="slide-left arrow-right" />{" "}
						</p>
					</div>
					<div className="notes-p-btn">
						<p>
							Why digital transformations fail
							<HiArrowRight className="slide-left arrow-right" />{" "}
						</p>
					</div>
				</Grid2>
			</Box>
		</Box>
	);
}

export default Notes;
