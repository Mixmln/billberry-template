import { ListItemText, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import "../Modern/modern.css";
import { ListItemButton } from "@mui/material";
import { useState } from "react";

function Modern() {
	const [desc, setDesc] = useState([
		{
			title: "Headless commerce",
			text: "By decoupling a solution’s back-end from its front-end, we get a huge boost in speed and flexibility. A single back-end can serve data to any number of channels, and changes to a front-end interface don’t mandate back-end coding. Plus, designers are no longer limited to a rigid set of built-in themes and templates.",
		},
		{
			title: "Microservice architecture",
			text: "By decoupling a solution’s back-end from its front-end, we get a huge boost in speed and flexibility. A single back-end can serve data to any number of channels, and changes to a front-end interface don’t mandate back-end coding. Plus, designers are no longer limited to a rigid set of built-in themes and templates.",
		},
		{
			title: "Source-of-truth data hubs",
			text: "By decoupling a solution’s back-end from its front-end, we get a huge boost in speed and flexibility. A single back-end can serve data to any number of channels, and changes to a front-end interface don’t mandate back-end coding. Plus, designers are no longer limited to a rigid set of built-in themes and templates.",
		},
		{
			title: "Progressive web apps",
			text: "By decoupling a solution’s back-end from its front-end, we get a huge boost in speed and flexibility. A single back-end can serve data to any number of channels, and changes to a front-end interface don’t mandate back-end coding. Plus, designers are no longer limited to a rigid set of built-in themes and templates.",
		},
	]);

	const [selectedDesc, setSelectedDesc] = useState(null);

	const [openDesc, setOpenDesc] = useState(false);

	const test = (index) => {
		console.log(index);
		setSelectedDesc(index);
	};

	return (
		<div className="modern-section">
			<div className="container">
				<Grid2
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "flex-start",
						gap: 8,
					}}
				>
					<Grid2
						xs={6}
						sx={{
							width: "50%",
						}}
					>
						<div className="modern-title-div">
							<h3 className="modern-title">Our approach to modern ecomm</h3>
						</div>
					</Grid2>
					<Grid2
						xs={6}
						sx={{
							width: "50%",
						}}
					>
						{desc.map((descObj, i) => (
							<div key={i}>
								<div className="modern-line"></div>
								<div
									className="modern-nav-button"
									onClick={() => {
										test(i);
										setOpenDesc(!openDesc);
									}}
								>
									<p>{descObj.title}</p>
									<div>{openDesc && selectedDesc === i ? <RemoveIcon className="add-icon" /> : <AddIcon className="add-icon" />}</div>
								</div>
								<div>{openDesc && selectedDesc === i ? <p className="modern-text text-focus-in">{desc[i].text}</p> : ""}</div>
								{i !== desc.length - 1 ? "" : <div className="modern-line"></div>}
							</div>
						))}
					</Grid2>
				</Grid2>
			</div>
		</div>
	);
}

export default Modern;
