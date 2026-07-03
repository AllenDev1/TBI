import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Abouthome from "../components/abouthome";
import Email from "../components/Email";
import Landing from "../components/landing";
import TopFooterCard from "../components/TopFooterCard";

const Home = () => {
	const { scrollYProgress } = useViewportScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

	return (
		<>
			<motion.div style={{ scale }}></motion.div>
			<Landing />

			<Abouthome />

			<Email />

			<TopFooterCard />
		</>
	);
};

export default Home;
