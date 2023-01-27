import { Box, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useState } from "react";
import "../RecentWorks/works.css";
import WorkComp from "./WorkComp";

function Works() {
	const [works, setWorks] = useState([
		{
			direction: "row",
			image: "https://bilberrry.com/wp-content/uploads/2020/05/Blueprint1-3-752x491.jpg",
			desc: {
				app: "WEB APP",
				title: "BLUEPRINT REGISTRY",
				text: "A long-term partnership that started with a wedding registry and has developed into a cornerstone of one of the world’s largest wedding dress retailers.",
				stack: "Back End Development / Dev Ops / Digital Product Strategy / Front End Development / Systems design / Web Application Development",
			},
		},
		{
			direction: "row-rev",
			image: "https://bilberrry.com/wp-content/uploads/2021/11/see-app-1-752x491.png",
			desc: {
				app: "MOBILE APP",
				title: "SEE",
				text: "A duo of apps to help this non-profit coordinate better eye care for people in need around the world.",
				stack: "Back End Development / Dev Ops / Front End Development / Innovation Strategy / Mobile App Development / UX/UI Design / Web Application Development",
			},
		},
		{
			direction: "row",
			image: "https://bilberrry.com/wp-content/uploads/2022/09/Pasco-ERP-accounting-2-e1662143101932-752x491.png",
			desc: {
				app: "WEB APP",
				title: "PASCO MACHINE",
				text: "A highly usable, custom ERP streamlined for this shop’s unique business needs.",
				stack: "Back End Development / Dev Ops / Digital Product Strategy / Enterprise System Development / Front End Development / UX/UI Design / Web Application Development",
			},
		},
		{
			direction: "row-rev",
			image: "https://bilberrry.com/wp-content/uploads/2023/01/PAA-Home-752x491.png",
			desc: {
				app: "WEB APP",
				title: "THE PUBLIC ART ARCHIVE",
				text: "Making one of the world's largest databases of public art accessible and engaging to everyone.",
				stack: "Back End Development / Dev Ops / Front End Development / UX/UI Design / Web Application Development",
			},
		},
		{
			direction: "row",
			image: "https://bilberrry.com/wp-content/uploads/2020/05/Impinj1_without-mockup@2x-752x491.png",
			desc: {
				app: "WEB APP",
				title: "IMPINJ",
				text: "A modeling Tool that helps Impinj Partners predict RFID Gateway Coverage within a given floor plan.",
				stack: "Back End Development / Dev Ops / Digital Product Strategy / Enterprise System Development / Front End Development / UX/UI Design / Web Application Development",
			},
		},
	]);

	return (
		<div className="works-section">
			<div className="works-container">
				<Box
					sx={{
						padding: "95px 0",
					}}
				>
					<h3 className="works-section-title">EXPLORE OUR RECENT WORK</h3>
				</Box>
				<Stack spacing={12}>
					{works.map((work, i) => (
						<WorkComp
							key={i}
							work={work}
						></WorkComp>
					))}
					<Grid2
						container
						gap={5}
						wrap="nowrap"
						sx={{
							width: "100%",
							justifyContent: "space-between",
							margin: "0 auto",
						}}
					>
						<Grid2
							xs={2}
							sx={{
								textAlign: "left",
								display: "inline-block",
								width: "250px",
								marginRight: "60px",
							}}
						>
							<p>Technologies we Specialize In</p>
						</Grid2>
						<Grid2
							xs={2}
							sx={{
								textAlign: "left",
							}}
							className="every-p"
						>
							<p>Typescript</p>
							<p>Python</p>
							<p>Golang</p>
							<p>Node.js</p>
							<p>NestJs</p>
							<p>GraphQL</p>
						</Grid2>
						<Grid2
							xs={2}
							sx={{
								textAlign: "left",
							}}
							className="every-p"
						>
							<p>React</p>
							<p>NextJS</p>
							<p>Angular</p>
							<p>React Native</p>
							<p>Elastic Search</p>
							<p>Algolia</p>
						</Grid2>
						<Grid2
							xs={2}
							sx={{
								textAlign: "left",
							}}
							className="every-p"
						>
							<p>MySQL</p>
							<p>PostgreSQL</p>
							<p>MongoDB</p>
							<p>Docker</p>
							<p>Kubernetes</p>
							<p>Terraform</p>
						</Grid2>
					</Grid2>
				</Stack>
			</div>
		</div>
	);
}

export default Works;
