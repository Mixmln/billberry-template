import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import Note from "./Note";
import "../Notes/noteSection.css";

function NoteSection() {
	const [loadedNotes, setLoadedNotes] = useState(12);

	const [notes, setNotes] = useState([
		{
			img: "https://bilberrry.com/wp-content/uploads/2022/09/photoholgic-GYgozuJY4D8-unsplash-720x412.jpg",
			title: "BUILDING TRUST ON A PROJECT RESCUE",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2022/07/joshua-sukoff-Yz8s8yG7NlM-unsplash-720x412.jpg",
			title: "BILBERRRY WINS BEST SOFTWARE DEVELOPER IN WASHINGTON",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2022/03/Bilberrry-GFM-360x206.png",
			title: "HOW TO SUPPORT THE PEOPLE OF UKRAINE",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/08/ben-vaughn-pxSfDEnXI2s-unsplash-scaled-720x412.jpg",
			title: "WHY DIGITAL TRANSFORMATIONS FAIL",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/08/cody-hiscox-Hp5Acad1H0k-unsplash-scaled-720x412.jpg",
			title: "THE COST OF QUALITY",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/07/sean-benesh-IWaohFXvD7s-unsplash-scaled-720x412.jpg",
			title: "IS IT TECHNICAL DEBT OR JUST A MESS?",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/07/product-leadership-scaled-720x412.jpg",
			title: "3 KEYS TO LEADING AN EFFECTIVE PRODUCT DEVELOPMENT TEAM",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/06/refactoring-image-1-scaled-720x412.jpg",
			title: "WHY REFACTOR?",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/05/fishermen-Brooks-law-720x412.jpg",
			title: "BROOKS’ LAW, OR HOW TO MAKE A LATE PROJECT EVEN LATER",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/04/pierre-pavlovic-vvTt4MKWto8-unsplash-scaled-720x412.jpg",
			title: "WHY ESTIMATING TIME IS HARD",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/03/matej-rieciciar-3bj8X2NiE64-unsplash-720x412.jpg",
			title: "WHY WE USE TASK-BASED NAVIGATION",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/04/sean-benesh-vfJPtNFGfVs-unsplash-copy-scaled-720x412.jpg",
			title: "WHEN TO TAKE ON TECHNICAL DEBT",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/04/michel-stockman-wfYYEM5_KSw-unsplash-1-scaled-360x206.jpg",
			title: "THE END OF ENTERPRISE SOFTWARE",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/04/mitchell-luo-a-b612KQH8Q-unsplash-scaled-360x206.jpg",
			title: "QUICK OVERVIEW OF ADVANCED CUSTOM FIELDS",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/04/sean-benesh-2304VtjKWf0-unsplash-scaled-360x206.jpg",
			title: "THE COST OF TECHNICAL DEBT",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/04/jade-scarlato-qbXP18rappM-unsplash-scaled-360x206.jpg",
			title: "BUILD OR BUY? THE CUSTOM SOFTWARE QUESTION",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/04/lance-asper-54r0sLxybhw-unsplash-scaled-360x206.jpg",
			title: "FLEXIBILITY HAS A HIDDEN COST: COMPLEXITY",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/04/freestocks-ZArDeAtxj0Q-unsplash-scaled-360x206.jpg",
			title: "INTRO TO WEB APPS",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/04/caleb-woods-Yw6HbhK1HrE-unsplash-scaled-360x206.jpg",
			title: "WHY WE HAVE ONE PROJECT LEAD",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/04/lily-banse-WvN244uN8bs-unsplash-scaled-360x206.jpg",
			title: "STOP SAYING “OBVIOUSLY”",
		},
		{
			img: "https://bilberrry.com/wp-content/uploads/2021/04/tabea-damm-9-xfYKAI6ZI-unsplash-scaled-360x206.jpg",
			title: "HOW WE APPROACH NEW DESIGN + DEVELOPMENT INITIATIVES",
		},
	]);

	return (
		<Box
			sx={{
				borderBottom: "1px solid white",
				paddingBottom: "100px",
			}}
		>
			<div className="notes-container">
				<Grid2
					container
					spacing={5}
				>
					{notes.map((note, i) => {
						if (i + 1 <= loadedNotes) {
							return (
								<Grid2>
									<Note
										note={note}
										key={i}
									></Note>
								</Grid2>
							);
						}
					})}
				</Grid2>
			</div>
			{loadedNotes === 12 ? (
				<p
					style={{
						marginTop: "70px",
						color: "white",
						textDecoration: "underline",
						cursor: "pointer",
						fontSize: "1.2rem",
					}}
					onClick={() => setLoadedNotes(24)}
				>
					Load more notes
				</p>
			) : (
				""
			)}
		</Box>
	);
}

export default NoteSection;
