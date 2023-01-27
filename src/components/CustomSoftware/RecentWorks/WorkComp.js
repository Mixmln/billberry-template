import { Button, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import "../RecentWorks/works.css";

function WorkComp({ work }) {
	const { direction, image, desc } = work;

	const handleDirection = () => {
		if (direction === "row") return true;
		if (direction === "row-rev") return false;
	};

	return (
		<div>
			{handleDirection() ? (
				<Grid2
					container
					direction="row"
					sx={{
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Grid2 lg={3}>
						<Stack
							spacing={3}
							sx={{
								width: "95%",
								textAlign: "left",
							}}
						>
							<p
								style={{
									fontSize: "0.9rem",
									fontWeight: "bold",
								}}
							>
								{desc.app}
							</p>
							<h4
								style={{
									fontSize: "2.1rem",
									fontWeight: "500",
									lineHeight: "1",
								}}
							>
								{desc.title}
							</h4>
							<p
								style={{
									fontSize: "1rem",
									fontWeight: "normal",
									lineHeight: "1.7",
									letterSpacing: "0.8px",
								}}
							>
								{desc.text}
							</p>
							<p
								style={{
									fontSize: "0.7rem",
									fontWeight: "normal",
									lineHeight: "1.4",
									letterSpacing: "0.5px",
								}}
							>
								{desc.stack}
							</p>
							<Button
								variant="outlined"
								sx={{
									width: "50%",
									padding: "15px 0",
									color: "white",
									borderColor: "white",
								}}
							>
								Read more
							</Button>
						</Stack>
					</Grid2>
					<Grid2 lg={8}>
						<img
							className="fade-in"
							src={image}
							alt=""
						/>
					</Grid2>
				</Grid2>
			) : (
				<Grid2
					container
					direction="row-reverse"
					sx={{
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Grid2 lg={3}>
						<Stack
							spacing={3}
							sx={{
								width: "95%",
								textAlign: "left",
							}}
						>
							<p
								style={{
									fontSize: "0.9rem",
									fontWeight: "bold",
								}}
							>
								{desc.app}
							</p>
							<h4
								style={{
									fontSize: "2.1rem",
									fontWeight: "500",
									lineHeight: "1",
								}}
							>
								{desc.title}
							</h4>
							<p
								style={{
									fontSize: "1rem",
									fontWeight: "normal",
									lineHeight: "1.7",
									letterSpacing: "0.8px",
								}}
							>
								{desc.text}
							</p>
							<p
								style={{
									fontSize: "0.7rem",
									fontWeight: "normal",
									lineHeight: "1.4",
									letterSpacing: "0.5px",
								}}
							>
								{desc.stack}
							</p>
							<Button
								variant="outlined"
								sx={{
									width: "50%",
									padding: "15px 0",
									color: "white",
									borderColor: "white",
								}}
							>
								Read more
							</Button>
						</Stack>
					</Grid2>
					<Grid2 lg={8}>
						<img
							className="fade-in"
							src={image}
							alt=""
						/>
					</Grid2>
				</Grid2>
			)}
		</div>
	);
}

export default WorkComp;
