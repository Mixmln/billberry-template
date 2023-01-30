import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import "./moreWork.css";

function MoreWork() {
	return (
		<Box
			sx={{
				borderBottom: "1px solid white",
				marginBottom: 10,
			}}
		>
			<Box
				className="container work-container"
				sx={{
					color: "white",
					textAlign: "left",
				}}
			>
				<img
					src="https://bilberrry.com/wp-content/uploads/2022/08/22_BB_InlinenIMG_OurWork_01.png"
					alt="worker"
				/>

				<Grid2
					container
					xs={6}
				>
					<h2>More work</h2>
					<div className="first work-p-btn">
						<p>
							Transforming this public utility's sprawling, decade-old website to put the user first. <HiArrowRight className="slide-left arrow-right" />{" "}
						</p>
					</div>
					<div className="work-p-btn">
						<p>
							Designing a site and visual system to support this wealth management firm's ambitious growth. <HiArrowRight className="slide-left arrow-right" />{" "}
						</p>
					</div>
					<div className="work-p-btn">
						<p>
							Giving this nonprofit a digital overhaul after they had outgrown their existing site.
							<HiArrowRight className="slide-left arrow-right" />{" "}
						</p>
					</div>
					<div className="work-p-btn">
						<p>
							A new digital experience boosted this global nonprofit's donations by 70% the week of launch. <HiArrowRight className="slide-left arrow-right" />{" "}
						</p>
					</div>
				</Grid2>
			</Box>
		</Box>
	);
}

export default MoreWork;
