import { Container, Col, Row } from "react-bootstrap";

import AboutVideo from "../components/About/AboutVideo";
import FreturesAbout from "../components/About/FreturesAbout";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import InNumber from "../components/InNumber";
import Navbar from "../components/navbar";
import OurTeam from "../components/OurTeam";
import Testimonials from "../components/Testimonials";
import TopFooterCard from "../components/TopFooterCard";
import datas from "../components/datafiles/datafiles";
import KeyFun from "../components/Fun/KeyFun";

import "../scss/about scss/about.scss";

export const heroHeading = (heading, desc) => {
	return (
		<>
			<div className="background-darkblue-color-about">
				<Container className="about-heading-container">
					<h1 className="about-heading-intro">{heading}</h1>
					<div className="about-small-intro">{desc}</div>
				</Container>
			</div>
		</>
	);
};

export const heroDesc = (hed1, dec1, dec2) => {
	return (
		<>
			<Row className="about-body-row">
				<Col className="about-body-col-1">{hed1}</Col>
				<Col className="about-body-col-2">
					{dec1}
					<br />
					<br />
					{dec2}
				</Col>
			</Row>
		</>
	);
};

const About = () => {
	return (
		<>
			<Navbar />
			{heroHeading(datas.about_heading, datas.about_dec)}
			<Container className="about-body">
				<h4 className="h4-about">ABOUT</h4>
				{heroDesc(datas.about_hed, datas.about_dec1, datas.about_dec2)}
				<AboutVideo />
				<FreturesAbout />
				<InNumber />
			</Container>
			<OurTeam />
			<Testimonials />
			<Faq />
			<KeyFun />
			<TopFooterCard />
		
		</>
	);
};

export default About;
