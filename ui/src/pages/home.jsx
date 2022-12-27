import React from "react";
import Abouthome from "../components/abouthome";
import Email from "../components/Email";
import Landing from "../components/landing";
import TopFooterCard from "../components/TopFooterCard";

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
