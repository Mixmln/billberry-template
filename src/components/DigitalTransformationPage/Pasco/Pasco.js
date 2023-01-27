import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import "./pasco.css";

function Pasco() {
	return (
		<Box
			sx={{
				borderBottom: "1px solid white",
				marginBottom: 10,
			}}
		>
			<Box
				className="container pasco-container"
				sx={{
					color: "white",
					textAlign: "left",
				}}
			>
				<Grid2
					container
					xs={6}
				>
					<h2>PASCO MACHINE</h2>
					<p>Our team built the platforms and tools to modernize one of the largest wedding dress retailers in the world.</p>
					<div className="pasco-p-btn">
						<p>
							Suite of digital wedding planning tools <HiArrowRight className="slide-left arrow-right" />{" "}
						</p>
					</div>
					<div className="pasco-p-btn">
						<p>
							Ecommerce platform migration and configuration <HiArrowRight className="slide-left arrow-right" />{" "}
						</p>
					</div>
				</Grid2>

				<img
					src="https://bilberrry.com/wp-content/uploads/2022/08/pasco.jpg"
					alt="welding"
				/>
			</Box>
		</Box>
	);
}

export default Pasco;
