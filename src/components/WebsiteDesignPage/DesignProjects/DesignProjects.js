import { Box, Button, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import "./designProjects.css";

function DesignProjects() {
	return (
		<Box className="design-projects-container">
			<Stack
				gap={10}
				direction="column"
			>
				<Box
					className="container"
					sx={{
						color: "white",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<img
						src="https://bilberrry.com/wp-content/uploads/2022/08/gofundme-1-752x491.png"
						alt=""
					/>

					<Stack
						sx={{
							width: "35%",
							textAlign: "left",
						}}
					>
						<h2>GOFUNDME.ORG</h2>
						<p>Branding and a slick new website for the non-profit arm of the world’s most popular fundraising platform.</p>
						<Button
							variant="outlined"
							sx={{
								width: "40%",
								padding: "0.7rem 1rem",
								marginTop: "1rem",
								color: "white",
								borderColor: "white",
							}}
						>
							Read More
						</Button>
					</Stack>
				</Box>
				<Box
					className="container"
					sx={{
						color: "white",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Stack
						sx={{
							width: "35%",
							textAlign: "left",
						}}
					>
						<h2>WASHINGTON APPLE COMMISSION</h2>
						<p>We delivered a major brand refresh to bring the juicy, delcious world of Washington apples to life.</p>
						<Button
							variant="outlined"
							sx={{
								width: "40%",
								padding: "0.7rem 1rem",
								marginTop: "1rem",
								color: "white",
								borderColor: "white",
							}}
						>
							Read More
						</Button>
					</Stack>

					<img
						className="apple"
						src="https://bilberrry.com/wp-content/uploads/2021/11/3-variety-hero.gif"
						alt=""
					/>
				</Box>
				<Box
					className="container"
					sx={{
						color: "white",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<img
						src="https://bilberrry.com/wp-content/uploads/2021/05/CCHP-Home-752x491.png"
						alt=""
					/>

					<Stack
						sx={{
							width: "35%",
							textAlign: "left",
						}}
					>
						<h2>CENTER FOR CONNECTED HEALTH POLICY</h2>
						<p>How we adapted a massive content library of telehealth policy into a highly usable, scalable database.</p>
						<Button
							variant="outlined"
							sx={{
								width: "40%",
								padding: "0.7rem 1rem",
								marginTop: "1rem",
								color: "white",
								borderColor: "white",
							}}
						>
							Read More
						</Button>
					</Stack>
				</Box>
			</Stack>
		</Box>
	);
}

export default DesignProjects;
