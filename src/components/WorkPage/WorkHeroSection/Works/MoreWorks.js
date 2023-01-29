import { Box, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import WorkComp from "../../../CustomSoftware/RecentWorks/WorkComp";

function MoreWorks() {
	const [moreWorks, setMoreWorks] = useState([
		{
			direction: "row-rev",
			image: "https://bilberrry.com/wp-content/uploads/2022/08/gofundme-1-752x491.png",
			desc: {
				app: "WEBSITE",
				title: "GOFUNDME .ORG",
				text: "Branding and a slick new website for the non-profit arm of the world’s most popular fundraising platform.",
				stack: "Branding / Content Strategy / Custom WordPress Development / Website Design",
			},
		},
		{
			direction: "row",
			image: "https://bilberrry.com/wp-content/uploads/2022/08/DB_01-Hero-IMG-V02.png",
			desc: {
				app: "ECOMM",
				title: "DAVID’S BRIDAL",
				text: "A new ecommerce solution for one of the largest wedding dress retailers in the world.",
				stack: "AEM Implementation / Back End Development / Dev Ops / Front End Development / Headless Magento2 implementation / Microservices / PIM / PWA / UX/UI Design",
			},
		},
		{
			direction: "row-rev",
			image: "https://bilberrry.com/wp-content/uploads/2020/05/Blueprint1-3-752x491.jpg",
			desc: {
				app: "WEB APP",
				title: "BLUEPRINT REGISTRY",
				text: "A long-term partnership that started with a wedding registry and has developed into a cornerstone of one of the world’s largest wedding dress retailers.",
				stack: "Back End Development / Dev Ops / Digital Product Strategy / Front End Development / Systems design / Web Application Development",
			},
		},
		{
			direction: "row",
			image: "https://bilberrry.com/wp-content/uploads/2021/11/see-app-1-752x491.png",
			desc: {
				app: "MOBILE APP",
				title: "SEE",
				text: "A duo of apps to help this non-profit coordinate better eye care for people in need around the world.",
				stack: "Back End Development / Dev Ops / Front End Development / Innovation Strategy / Mobile App Development / UX/UI Design / Web Application Development",
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
			image: "https://bilberrry.com/wp-content/uploads/2021/11/1-hp-landing.gif",
			desc: {
				app: "WEBSITE",
				title: "WASHINGTON APPLE COMMISSION",
				text: "A major brand refresh to bring the world of apples to life.",
				stack: "Branding / Content Strategy / Custom WordPress Development / Information Architecture / Website Design",
			},
		},
		{
			direction: "row-rev",
			image: "https://bilberrry.com/wp-content/uploads/2020/05/Impinj1_without-mockup@2x-752x491.png",
			desc: {
				app: "WEB APP",
				title: "IMPINJ",
				text: "A modeling Tool that helps Impinj Partners predict RFID Gateway Coverage within a given floor plan.",
				stack: "Back End Development / Dev Ops / Digital Product Strategy / Enterprise System Development / Front End Development / UX/UI Design / Web Application Development",
			},
		},
		{
			direction: "row",
			image: "https://bilberrry.com/wp-content/uploads/2022/08/DB_01-Hero-IMG.png",
			desc: {
				app: "WEB APP",
				title: "DAVID’S BRIDAL",
				text: "Executing a two-year roadmap of digital tools in 14 months.",
				stack: "Back End Development / Dev Ops / Digital Product Strategy / Front End Development / Innovation Strategy / UX/UI Design / Web Application Development",
			},
		},
		{
			direction: "row-rev",
			image: "https://bilberrry.com/wp-content/uploads/2022/03/bjones-1-752x491.png",
			desc: {
				app: "WEBSITE",
				title: "BRIGHTON JONES",
				text: "Designing a site to support this wealth management firm’s ambitious growth.",
				stack: "Custom WordPress Development / Website Design",
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
			image: "https://bilberrry.com/wp-content/uploads/2020/05/Blueprint1-3-752x491.jpg",
			desc: {
				app: "WEBSITE",
				title: "OFFER UP",
				text: "A mobile-driven local marketplace for 42 million users.",
				stack: "Branding / Custom WordPress Development",
			},
		},
		{
			direction: "row",
			image: "https://bilberrry.com/wp-content/uploads/2020/05/tlycs-noframe1-752x491.png",
			desc: {
				app: "WEBSITE",
				title: "THE LIFE YOU CAN SAVE",
				text: "A new digital experience increased donations by 70% the week of launch.",
				stack: "Branding / Content Strategy / Custom WordPress Development / Information Architecture / SEO Strategy / Website Design",
			},
		},
		{
			direction: "row-rev",
			image: "https://bilberrry.com/wp-content/uploads/2021/02/2-InnoList-752x491.png",
			desc: {
				app: "WEB APP",
				title: "ONE OF THE NATION’S LARGEST CELERY GROWERS",
				text: "A custom project management software tailored to a major agricultural brand’s precise needs.",
				stack: "Back End Development / Dev Ops / Digital Product Strategy / Front End Development / Innovation Strategy / Systems design / UX/UI Design / Web Application Development",
			},
		},
		{
			direction: "row",
			image: "https://bilberrry.com/wp-content/uploads/2021/10/SEE-site-5-752x491.jpg",
			desc: {
				app: "WEBSITE",
				title: "SEE",
				text: "A new brand and website to increase conversions across core audiences.",
				stack: "Branding / Custom WordPress Development / Information Architecture / Website Design",
			},
		},
		{
			direction: "row-rev",
			image: "https://bilberrry.com/wp-content/uploads/2021/05/CCHP-Home-752x491.png",
			desc: {
				app: "WEBSITE",
				title: "CENTER FOR CONNECTED HEALTH POLICY",
				text: "Transforming a massive content library into a highly usable, scalable database.",
				stack: "Content Strategy / Custom WordPress Development / Information Architecture / Website Design",
			},
		},
		{
			direction: "row",
			image: "https://bilberrry.com/wp-content/uploads/2021/11/snopud-1-1-752x491.png",
			desc: {
				app: "WEBSITE",
				title: "SNOHOMISH COUNTY PUBLIC UTILITY DISTRICT",
				text: "Transforming a sprawling, decade-old website to put the user first.",
				stack: "Branding / Content Strategy / Custom WordPress Development / Information Architecture / Website Design",
			},
		},
		{
			direction: "row-rev",
			image: "https://bilberrry.com/wp-content/uploads/2020/05/humio2-752x491.png",
			desc: {
				app: "WEBSITE",
				title: "HUMIO",
				text: "Branding and Website Redesign exploration for Humio — a rapidly growing enterprise log management solution.",
				stack: "Branding / Website Design",
			},
		},
		{
			direction: "row",
			image: "https://bilberrry.com/wp-content/uploads/2023/01/TRG-desktop-agent-state-select-752x491.png",
			desc: {
				app: "WEB APP",
				title: "TITLE INSURANCE RATE BUILDER",
				text: "A comprehensive, user friendly rate calculator builder for a highly regulated and complicated insurance industry",
				stack: "Back End Development / Dev Ops / Front End Development / UX/UI Design / Web Application Development",
			},
		},
		{
			direction: "row-rev",
			image: "https://bilberrry.com/wp-content/uploads/2021/01/DFG1-752x491.png",
			desc: {
				app: "WEBSITE",
				title: "DAYS FOR GIRLS",
				text: "A digital overhaul for a nonprofit that had outgrown its existing website.",
				stack: "Branding / Content Strategy / Custom WordPress Development / Information Architecture / Website Design",
			},
		},
		{
			direction: "row",
			image: "https://bilberrry.com/wp-content/uploads/2020/05/pepsico2-752x491.jpg",
			desc: {
				app: "WEBSITE",
				title: "PEPSICO",
				text: "A custom website for managing admissions to Pepsico’s Collaborative Accelerator program, Nutrition Greenhouse.",
				stack: "Branding / Custom WordPress Development / Website Design",
			},
		},
		{
			direction: "row-rev",
			image: "https://bilberrry.com/wp-content/uploads/2020/05/MyOGSM3_without-mockup@2x-752x491.png",
			desc: {
				app: "WEB APP",
				title: "MYOGSM",
				text: "A proprietary strategy execution software.",
				stack: "Back End Development / Dev Ops / Digital Product Strategy / Enterprise System Development / Front End Development / Innovation Strategy / UX/UI Design / Web Application Development / Website Design",
			},
		},
		{
			direction: "row",
			image: "https://bilberrry.com/wp-content/uploads/2020/05/grandimage7-752x491.jpg",
			desc: {
				app: "WEBSITE",
				title: "GRAND IMAGE",
				text: "A new digital experience for the world's leader in custom art solutions.",
				stack: "Branding / Custom WordPress Development / Website Design",
			},
		},
		{
			direction: "row-rev",
			image: "https://bilberrry.com/wp-content/uploads/2021/08/chatty-screen-1-e1630365773215-752x491.png",
			desc: {
				app: "WEB APP",
				title: "ENTERPRISE CUSTOMER SUPPORT PLATFORM",
				text: "A powerful legacy chat platform got the design overhaul it needed to stay competitive.",
				stack: "UX/UI Design",
			},
		},
		{
			direction: "row",
			image: "https://bilberrry.com/wp-content/uploads/2021/02/Frame-2-752x491.png",
			desc: {
				app: "WEB APP",
				title: "PROTECTALL",
				text: "A robust self-service customer claims portal that seamlessly tied into an existing API.",
				stack: "Digital Product Strategy / Front End Development / UX/UI Design",
			},
		},
	]);

	return (
		<div
			className="container"
			style={{
				color: "white",
			}}
		>
			<Stack
				sx={{
					margin: "70px auto",
					marginBottom: "0",
					paddingBottom: "70px",
					maxWidth: "1170px",
				}}
				spacing={12}
			>
				{moreWorks.map((work, i) => (
					<WorkComp
						key={i}
						work={work}
					></WorkComp>
				))}
			</Stack>
		</div>
	);
}

export default MoreWorks;
