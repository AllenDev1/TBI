import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../scss/footer.scss";
import logo from "../assets/My project-1 2.svg";
import soc1 from "../assets/Group 148.svg";
import soc2 from "../assets/Group 170.svg";
import soc3 from "../assets/Group 171.svg";
import soc4 from "../assets/Group 172.svg";

const Footer = () => {
	return (
		<>
			<Container className="footer-container">
				<Row className="footer-row">
					<Col className="footer-icon-col" xs={4}>
						<img src={logo} alt="" />
					</Col>
					<Col className="footer-links-col" xs={2}>
						<p>Menu</p>
						<a href="/about">About</a>
						<a href="/services">Services</a>

						<a href="/works">Works</a>
						<a href="/contact">Contact</a>
					</Col>
					<Col className="footer-links-col" xs={2}>
						<p>Service</p>

						<a href="/work">Design</a>
						<a href="/work">Development</a>

						<a href="/work">Branding</a>
						<a href="/work">See More</a>
					</Col>
					<Col className="social-icon-col">
						<a href="/">
							<img src={soc1} alt=".." />
						</a>
						<a href="/">
							<img src={soc2} alt=".." />
						</a>
						<a href="/">
							<img src={soc3} alt=".." />
						</a>
						<a href="/">
							<img src={soc4} alt=".." />
						</a>
					</Col>
				</Row>
				<Row className="copy-right-row">
					<Col className="copy-right">
						<p>Copyright © 2022 The Brilliant Ideas. All Rights Reserved.</p>
					</Col>
					<Col className="terms-policy">
						<a href="/">Terms of Use</a>
						<a href="/">Privacy Policy</a>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Footer;
