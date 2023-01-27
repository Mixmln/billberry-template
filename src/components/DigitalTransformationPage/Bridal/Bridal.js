import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import "./bridal.css";

function Bridal() {
	return (
		<Box
			sx={{
				borderBottom: "1px solid white",
				marginBottom: 10,
			}}
		>
			<Box
				className="container bridal-container"
				sx={{
					color: "white",
					textAlign: "left",
				}}
			>
				<img
					src="https://bilberrry.com/wp-content/uploads/2022/08/22_BB_InlinenIMG_DB-01.png"
					alt="wedding"
				/>
				<Grid2
					container
					xs={6}
				>
					<h2>DAVID’S BRIDAL</h2>
					<div className="bridal-p-btn">
						<p>Our team built the platforms and tools to modernize one of the largest wedding dress retailers in the world.</p>
						<p>
							Suite of digital wedding planning tools <HiArrowRight className="slide-left arrow-right" />{" "}
						</p>
					</div>
					<div className="bridal-p-btn">
						<p>
							Ecommerce platform migration and configuration <HiArrowRight className="slide-left arrow-right" />{" "}
						</p>
					</div>
				</Grid2>
			</Box>
		</Box>
	);
}

export default Bridal;
