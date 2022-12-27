import React from "react";
import Landing from "../components/landing";
import Abouthome from "../components/abouthome";
import Email from "../components/Email";
import TopFooterCard from "../components/TopFooterCard";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
			<Landing />

			<Abouthome />
			<Email />

			<TopFooterCard />
			
		</>
	);
};

export default Home;
