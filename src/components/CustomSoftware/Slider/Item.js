import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect } from "react";

function Item({ box, index, step, sliderTrigger, setSliderTrigger }) {
	const handleClass = () => {
		if (!sliderTrigger.active) return;
		if (sliderTrigger.active) {
			setTimeout(() => {
				const resetTrigger = {
					active: false,
					side: "",
				};
				setSliderTrigger(resetTrigger);
			}, 600);
		}
	};

	useEffect(() => {
		handleClass();
	}, []);

	return (
		<Grid2
			container
			direction="column"
			gap={2}
			sx={{
				textAlign: "left",
			}}
			className={sliderTrigger.side === "left" ? "slide-left" : sliderTrigger.side === "right" ? "slide-right" : ""}
		>
			<h4
				style={{
					fontSize: "2.6rem",
					fontWeight: "500",
					marginBottom: "10px",
				}}
			>
				{box.title}
			</h4>
			<p
				style={{
					height: "320px",
					fontSize: "2.1rem",
					lineHeight: "1.3",
					width: "95%",
					marginBottom: "22px",
				}}
			>
				{box.text}
			</p>
		</Grid2>
	);
}

export default Item;
