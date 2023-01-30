import React from "react";
import "./Hero.css";

function Hero({ mainImage, title }) {
	return (
		<div
			className="hero-container fade-in"
			style={{
				backgroundImage: `url(${mainImage})`,
			}}
		>
			<h1 className="hero-title">{title}</h1>
		</div>
	);
}

export default Hero;
