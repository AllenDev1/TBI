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
								The Brilliant Ideas is a leading provider of web
								and app development services for businesses and
								organizations. Our team of experienced
								developers specializes in creating innovative
								solutions that meet the unique needs of our
								clients. We offer a range of development
								services, including website design and
								development, app development, and custom web and
								app solutions. Our development services are
								designed to be SEO-friendly, ensuring that your
								website or app is optimized for search engines
								and easily discoverable by your target audience.
								We use the latest technologies and best
								practices to build websites and apps that are
								fast, responsive, and user-friendly. If you're
								looking to improve your online presence and
								drive results through web and app development,
								contact The Brilliant Ideas today to learn more
								about how we can help your business succeed
								online.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								<img src={design} alt="" /> Design
							</Accordion.Header>
							<Accordion.Body>
								The Brilliant Ideas is a full-service design
								agency, providing a range of services to help
								businesses and organizations succeed online. Our
								team of experienced designers has a passion for
								creating visually stunning and user-friendly
								designs that engage and convert your target
								audience. Our design services include website
								design, graphic design, and branding and
								identity design. We work closely with our
								clients to understand their needs and develop
								custom solutions that align with their brand and
								messaging. Our design services are SEO-friendly,
								ensuring that your website or marketing
								materials are optimized for search engines and
								easily discoverable by your target audience. We
								use the latest design trends and techniques to
								create visually appealing designs that drive
								results. If you're looking to improve your
								online presence and drive results through
								professional design services, contact The
								Brilliant Ideas today to learn more about how we
								can help your business succeed online
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								<img src={camera} alt="" /> Photography
							</Accordion.Header>
							<Accordion.Body>
								The Brilliant Ideas is a professional
								photography company, specializing in capturing
								and editing high-quality images for a range of
								purposes. Our team of experienced photographers
								has a passion for creating stunning visual
								content that tells a story and engages your
								audience. We offer a range of photography
								services, including corporate and event
								photography, product photography, and portrait
								and lifestyle photography. We work closely with
								our clients to understand their needs and
								develop custom solutions that align with their
								branding and messaging. Our photography services
								are designed to elevate your brand and help you
								stand out in the digital world. We use the
								latest equipment and techniques to create
								beautiful, high-quality images that capture the
								attention of your target audience. If you're
								looking to elevate your brand with professional
								photography services, contact The Brilliant
								Ideas today to learn more about how we can help
								your business succeed online.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="3">
							<Accordion.Header>
								<img src={digMAr} alt="" /> Digital Marketing
							</Accordion.Header>
							<Accordion.Body>
								The Brilliant Ideas is a full-service digital
								marketing agency, providing a range of services
								to help businesses and organizations succeed
								online. Our team of experienced marketers has a
								passion for creating innovative campaigns that
								drive results and engage your target audience.
								Our digital marketing services include search
								engine optimization (SEO), pay-per-click (PPC)
								advertising, social media marketing, email
								marketing, and content marketing. We work
								closely with our clients to understand their
								needs and develop custom solutions that align
								with their branding and messaging. Our digital
								marketing services are designed to drive
								traffic, increase leads, and boost conversions
								for your business. We use the latest
								technologies and best practices to create
								campaigns that are targeted, effective, and
								measurable. If you're looking to improve your
								online presence and drive results through
								digital marketing, contact The Brilliant Ideas
								today to learn more about how we can help your
								business succeed online.
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
								<h1>1</h1> <h4>Bringing your brilliant ideas to life online</h4>
							</div>
							<div className="num-list">
								<h1>2</h1>{" "}
								<h4>Transforming your digital vision into reality</h4>
							</div>
							<div className="num-list">
								<h1>3</h1> <h4>Innovative web, app, and marketing solutions</h4>
							</div>
						</Col>
					</Row>
				</div>
				<TopFooterCard />
			</Container>
		</>
	);
};

export default Services;
