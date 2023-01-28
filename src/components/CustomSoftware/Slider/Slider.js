import { Box, Button, ButtonGroup } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useState } from "react";
import "../Slider/slider.css";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import Item from "./Item";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Slider() {
	const [boxes, setBoxes] = useState([
		{
			title: "Why are we all here?",
			text: "Every design and development problem starts with the real, business-centric answers to “Why?” We articulate those goals together, then use our expertise to find that sweet spot of realistic and impactful.",
		},
		{
			title: "What will it take?",
			text: "After goals comes strategy. We co-create this with you by digging into your user stories and data — as industry outsiders, we get the unique opportunity to spot any assumptions. Then we resource and build out the team, the plan, and the timeline.",
		},
		{
			title: "We build",
			text: "This is what lots of clients think is step one — what they hired us to do from the get-go. We sprint from proof of concept to minimum viable product to production-ready release, focusing on the components with the highest value and biggest impact.",
		},
		{
			title: "We see what works",
			text: "We’re with you in the data, measuring and interpreting and designing new initiatives to continue the transformation we’ve started. By this time, it’s no surprise when we ask: not just what’s next, but why.",
		},
	]);

	const [sliderTrigger, setSliderTrigger] = useState({ active: false, side: "" });

	const [step, setStep] = useState(0);

	const handleChange = (side) => {
		const newTrigger = {
			active: true,
			side,
		};
		setSliderTrigger(newTrigger);
	};

	const next = () => {
		setTimeout(() => {
			if (step === boxes.length - 1) {
				setStep(0);
				handleChange("right");

				return;
			}
			setStep(step + 1);
			handleChange("right");
		}, 100);
	};

	const prev = () => {
		setTimeout(() => {
			if (step === 0) {
				setStep(boxes.length - 1);
				handleChange("left");
				return;
			}
			setStep(step - 1);
			handleChange("left");
		}, 100);
	};

	return (
		<div className="slider-section">
			<div className="container">
				<Grid2 container>
					<Grid2
						sx={{
							width: "50%",
						}}
					>
						<h3 className="slider-title">We ask why not what</h3>
					</Grid2>
					<Grid2
						sx={{
							width: "50%",
							height: "310px",
						}}
					>
						<Box
							sx={{
								paddingLeft: "48px",
							}}
						>
							{boxes.map((box, i) => {
								if (step === i)
									return (
										<Item
											sliderTrigger={sliderTrigger}
											setSliderTrigger={setSliderTrigger}
											box={box}
											key={i}
											index={i}
											step={step}
										></Item>
									);
								return "";
							})}
							<ButtonGroup
								variant="string"
								aria-label="text button group"
								sx={{
									width: "100%",
								}}
							>
								<p
									style={{
										fontSize: "24px",
										letterSpacing: "2px",
										fontWeight: "500",
										marginRight: "10px",
									}}
								>
									0{step + 1}
									<span
										style={{
											color: "rgb(167, 167, 167)",
										}}
									>
										/0{boxes.length}
									</span>
								</p>
								<Button
									onClick={prev}
									sx={{
										color: "white",
										padding: "3px",
										justifyContent: "flex-end",
									}}
								>
									<WestIcon
										style={{
											color: "white",
											fontSize: "26px",
										}}
									></WestIcon>
								</Button>
								<Button
									onClick={next}
									sx={{
										color: "white",
										padding: "3px",
										justifyContent: "flex-start",
									}}
								>
									<EastIcon
										style={{
											color: "white",
											fontSize: "26px",
										}}
									></EastIcon>
								</Button>
							</ButtonGroup>
						</Box>
					</Grid2>
				</Grid2>
			</div>
		</div>
	);
}

export default Slider;
