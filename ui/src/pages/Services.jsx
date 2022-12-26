import React from "react";
import Navbars from "../components/navbar";
import { heroDesc, heroHeading } from "./About";
import datas from "../components/datafiles/datafiles.json";
import { Container, Accordion, Col, Row } from "react-bootstrap";
import "../components/Services/services.scss";
import design from "../assets/design.svg";
import camera from "../assets/camera.svg";
import dev from "../assets/_company website 3/Group 186.svg";
import digMAr from "../assets/_company website 3/Group 182.svg";
import TopFooterCard from "../components/TopFooterCard";
import Footer from "../components/Footer";

const Services = () => {
	return (
		<>
			<Navbars />
			{heroHeading(datas.services_heading, datas.services_sec)}
			<Container className="services-container about-body">
				<h5 className="service-n"> Services</h5>
				{heroDesc(datas.services_hed, datas.serv_dec1, datas.serv_dec2)}
				<div className="services-accordion">
					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								<img src={dev} alt="" /> Development
							</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								<img src={design} alt="" /> Design
							</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								<img src={camera} alt="" /> Photography
							</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="3">
							<Accordion.Header>
								<img src={digMAr} alt="" /> Digital Marketing
							</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
				<div className="make-project-awsm">
					<h5 className="how-work-h5">How we work</h5>
					<Row className="project-how-we-work">
						<Col className="how-work-col">
							<h1>Making Your Projects Awesome</h1>
							<p>
								Technical skills, design, business
								understanding, ability to put themselves in the
								merchant's shoes.
							</p>
						</Col>
						<Col className="numbering-col">
							<div className="num-list">
								<h1>1</h1> <h4>Full service range including</h4>
							</div>
							<div className="num-list">
								<h1>2</h1>{" "}
								<h4>Technical skills, design, business</h4>
							</div>
							<div className="num-list">
								<h1>3</h1> <h4>Themselves in the merchant's</h4>
							</div>
						</Col>
					</Row>
				</div>
				<TopFooterCard />
				<Footer />
			</Container>
		</>
	);
};

export default Services;
