import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Stack } from "@mui/system";
import React from "react";
import "./personsSection.css";

function PersonsSection() {
	return (
		<Box
			className="persons-container"
			sx={{
				color: "white",
			}}
		>
			<Stack
				className="container"
				direction="row"
				gap={10}
				sx={{
					paddingTop: 10,
					paddingBottom: 10,
					display: "flex",
					justifyContent: "center",
					gap: "10rem",
				}}
			>
				<Grid2
					sx={{
						width: "40%",
					}}
				>
					<h3>
						FIRST, WHY ARE <br /> WE ALL HERE?
					</h3>
					<p className="par">Every design and development problem starts with the real, business-centric answers to “Why?” We articulate those goals together, then use our expertise to find that sweet spot of realistic and impactful.</p>
					<h4>WHAT’S HAPPENING:</h4>
					<ul>
						<li>– Discovery workshops</li>
						<li>– Design + technology audits</li>
						<li>– Stakeholder alignment</li>
						<li>– Benchmarking + SMART goal setting</li>
					</ul>
				</Grid2>
				<Grid2
					sx={{
						width: "290px",
					}}
				>
					<img
						src="https://bilberrry.com/wp-content/uploads/2020/05/Eugene-292x392.jpg"
						alt="person profile pic"
					/>
					<p className="person-quote">"A lack of specific, measurable goals we are all working toward is the primary reason any initiative fails. It's the equivalent of heading west on The Oregon Trail and saying, We'll just know it when we get there."</p>
					<p className="person-title">-Eugene, Director of Product</p>
				</Grid2>
			</Stack>
			<div className="hr"></div>
			<Stack
				className="container"
				direction="row"
				gap={10}
				sx={{
					paddingTop: 10,
					paddingBottom: 10,
					display: "flex",
					justifyContent: "center",
					gap: "10rem",
				}}
			>
				<Grid2
					sx={{
						width: "290px",
					}}
				>
					<img
						src="https://bilberrry.com/wp-content/uploads/2020/05/Irene2-e1590962582432-292x392.jpg"
						alt="person profile pic"
					/>
					<p className="person-quote">"We'll always tell you if there are better ways to get where you want to go. It's the best type of reality check. That's what partners are for."</p>
					<p className="person-title">-Irene, Director of Project Management</p>
				</Grid2>
				<Grid2
					sx={{
						width: "40%",
					}}
				>
					<h3>NEXT: WHAT WILL IT TAKE?</h3>
					<p className="par">After goals comes strategy. We co-create this with you by digging into your user stories and data, challenging any assumptions. Then we resource and build out the team, the plan, and the timeline. We keep the scope sane and flexible so we can stay agile and reactive.</p>
					<h4>WHAT’S HAPPENING:</h4>
					<ul>
						<li>– Audience definition</li>
						<li>– Impact mapping</li>
						<li>– Digital strategy</li>
						<li>– Scope definition</li>
						<li>– Concept development</li>
						<li>– Project management + Dev ops</li>
						<li>– Team resourcing + onboarding</li>
					</ul>
				</Grid2>
			</Stack>
			<div className="hr"></div>
			<Stack
				className="container"
				direction="row"
				gap={10}
				sx={{
					paddingTop: 10,
					paddingBottom: 10,
					display: "flex",
					justifyContent: "center",
					gap: "10rem",
				}}
			>
				<Grid2
					sx={{
						width: "40%",
					}}
				>
					<h3>THEN: WE BUILD.</h3>
					<p className="par">This is what lots of clients think is step one — what they hired us to do from the get-go. We sprint from proof of concept to minimum viable product to production-ready release, focusing on the components with the highest value and biggest impact.</p>
					<h4>WHAT’S HAPPENING:</h4>
					<ul>
						<li>– Roadmapping + prioritization</li>
						<li>– Design sprints</li>
						<li>– Early validation + testing</li>
						<li>– Proof of concept → MVP → Production</li>
					</ul>
				</Grid2>
				<Grid2
					sx={{
						width: "290px",
					}}
				>
					<img
						src="https://bilberrry.com/wp-content/uploads/2020/05/Ross-1-e1590962725830-292x392.jpg"
						alt="person profile pic"
					/>
					<p className="person-quote">"As we build, we balance what's doable alongside what's impactful. This is an exercise in prioritization and transparency. We share where we're at and how we're going to do it. If there’s a risk to any solution, you'll know."</p>
					<p className="person-title">-Ross, CTO</p>
				</Grid2>
			</Stack>
			<div className="hr"></div>
			<Stack
				className="container"
				direction="row"
				gap={10}
				sx={{
					paddingTop: 10,
					paddingBottom: 10,
					display: "flex",
					justifyContent: "center",
					gap: "10rem",
				}}
			>
				<Grid2
					sx={{
						width: "290px",
					}}
				>
					<img
						src="https://bilberrry.com/wp-content/uploads/2020/06/%D0%90rthur-portrait-2020-1-scaled-292x392.jpg"
						alt="person profile pic"
					/>
					<p className="person-quote">"This is the really fun part and what makes a partnership long term."</p>
					<p className="person-title">-Arthur, Director of Product & Digital Strategy</p>
				</Grid2>
				<Grid2
					sx={{
						width: "40%",
					}}
				>
					<h3>WE SEE WHAT WORKS, AND DO MORE OF IT.</h3>
					<p className="par">We’re with you in the data, measuring and interpreting and designing new initiatives to continue the transformation we’ve started. By this time, it’s no surprise when we ask: not just what’s next, but why.</p>
					<h4>WHAT’S HAPPENING:</h4>
					<ul>
						<li>– Training + stakeholder on-boarding</li>
						<li>– Data analytics</li>
						<li>– User experience research</li>
						<li>– Iteration</li>
						<li>– Optimization</li>
					</ul>
				</Grid2>
			</Stack>
			<div className="hr"></div>
		</Box>
	);
}

export default PersonsSection;
