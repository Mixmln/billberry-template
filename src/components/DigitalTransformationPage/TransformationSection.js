import { createTheme, Button, ThemeProvider } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Stack } from "@mui/system";
import React from "react";
import "./transformationSection.css";
import { HiArrowRight } from "react-icons/hi";

function TransformationSection() {
	return (
		<Box sx={{ borderBottom: "1px solid white" }}>
			<Box className="container transf-container">
				<Box
					sx={{
						paddingTop: 12,
						paddingBottom: 12,
						color: "white",
						textAlign: "left",
					}}
				>
					<Grid2
						container
						spacing={2}
						sx={{
							justifyContent: "space-between",
						}}
					>
						<Grid2 xs={1}>
							<h5>END TO END CAPABILITIES</h5>
						</Grid2>
						<Grid2
							xs={10}
							sx={{
								paddingLeft: 20,
								textAlign: "left",
							}}
						>
							<h2>We’re equal parts strategic consultancy, development firm, and design studio.</h2>
							<Stack
								direction="row"
								gap={8}
							>
								<Grid2 xs={4}>
									<h3>Strategy</h3>
									<p>Business consulting • Digital modernization strategy • Product development planning • Code audit & assessment • Technology architecture planning • Agile project planning • DevOps assessment & planning</p>
								</Grid2>
								<Grid2 xs={4}>
									<h3>Design</h3>
									<p>UI/UX design • Website design • Visual identity • Data architecture</p>
								</Grid2>
								<Grid2 xs={4}>
									<h3>Development</h3>
									<p>Web applications • Mobile applications • Custom websites • Enterprise ecommerce solutions • DevOps</p>
								</Grid2>
							</Stack>
						</Grid2>
					</Grid2>
				</Box>
				<Box
					sx={{
						paddingTop: 12,
						paddingBottom: 12,
						color: "white",
						textAlign: "left",
					}}
				>
					<Grid2
						container
						spacing={2}
						sx={{
							justifyContent: "space-between",
						}}
					>
						<Grid2 xs={1}>
							<h5>TRANSFORM YOUR BUSINESS</h5>
						</Grid2>
						<Grid2
							xs={10}
							sx={{
								paddingLeft: 20,
								textAlign: "left",
							}}
						>
							<h2>Our long-term, integrated approach drives us to tackle complex problems and deliver transformational digital solutions.</h2>
							<h4>We help CTOs, CIOs, and their teams uncover inefficiencies and use technology to build capabilities, from improved operations to better sales and beyond.</h4>
						</Grid2>
					</Grid2>
				</Box>
			</Box>
			<Box
				className="container bridal-container"
				sx={{
					color: "white",
					textAlign: "left",
				}}
			>
				<img
					src="https://images.unsplash.com/photo-1541538670337-c53313ad7c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
					alt="wedding"
				/>
				<Grid2
					container
					xs={6}
				>
					<h2>DAVID’S BRIDAL</h2>
					<p>Our team built the platforms and tools to modernize one of the largest wedding dress retailers in the world.</p>
					<p>
						Suite of digital wedding planning tools <HiArrowRight className="arrow-right" />{" "}
					</p>
					<p>
						Ecommerce platform migration and configuration <HiArrowRight className="arrow-right" />{" "}
					</p>
				</Grid2>
			</Box>
			<div className="hr"></div>
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
					<p>
						Suite of digital wedding planning tools <HiArrowRight className="arrow-right" />{" "}
					</p>
					<p>
						Ecommerce platform migration and configuration <HiArrowRight className="arrow-right" />{" "}
					</p>
				</Grid2>

				<img
					src="https://images.unsplash.com/photo-1558611997-dd5b20e08c71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
					alt="welding"
				/>
			</Box>
			<div className="hr"></div>
			<Box
				className="container logos-container"
				sx={{
					color: "white",
					textAlign: "left",
				}}
			>
				<img
					src="https://bilberrry.com/wp-content/uploads/2022/08/logos.png"
					alt="welding"
				/>

				<Grid2
					container
					xs={6}
				>
					<h2>SOME OF OUR BEST WORK HAS TO BE KEPT UNDER WRAPS.</h2>
					<p>Interested in learning more? Get in touch and we’ll walk you through how we’ve concepted, designed, and executed ongoing digital strategies with other world class organizations.</p>
					<Box
						sx={{
							display: "flex",
							width: "100%",
						}}
					>
						<input
							type="text"
							placeholder="Name*"
						/>
						<input
							type="text"
							placeholder="Email*"
						/>
					</Box>
					<Button
						variant="outlined"
						sx={{
							marginTop: 5,
							padding: "0.8rem 2.5rem",
							fontSize: "0.7rem",
							backgroundColor: "white",
							color: "#000000",
							":hover": {
								bgcolor: "#000000",
								border: "1px solid white",
								color: "white",
							},
						}}
					>
						Submit
					</Button>
				</Grid2>
			</Box>
			<div className="hr"></div>
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
					<p>
						How we approach new design + development initiatives
						<HiArrowRight className="arrow-right" />{" "}
					</p>
					<p>
						The end of enterprise software
						<HiArrowRight className="arrow-right" />{" "}
					</p>
					<p>
						Why digital transformations fail
						<HiArrowRight className="arrow-right" />{" "}
					</p>
				</Grid2>
			</Box>
		</Box>
	);
}

export default TransformationSection;
