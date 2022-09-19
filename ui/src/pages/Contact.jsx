import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbars from "../components/navbar";
import { heroHeading } from "./About";
import da from "../components/datafiles/datafiles.json";
import "../scss/contact.scss";
import ContactForm from "../components/ContactForm";
import email from "../assets/Group 183.svg";
import phone from "../assets/Group 184.svg";
import address from "../assets/Group 185.svg";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Contact = () => {
	return (
		<>
			<Navbars />
			{heroHeading(da.cont_heading, da.cont_dec)}

			<div className="contact-us-from-bg">
				<Container className="contact-container">
					<ContactForm />
				</Container>
			</div>
			<Container className="innumber-container">
				<Row className="inNumber-row">
					<Col className="innumber-col">
						<h5 className="upper-head">
							<img src={phone} alt="..." />
							Phone
						</h5>
						<h2 className="lower-part-head">+977 9814767895</h2>
					</Col>
					<Col className="innumber-col">
						<h5 className="upper-head">
							<img src={email} alt="..." />
							Email
						</h5>
						<h2 className="lower-part-head">
							info@thebrilliantideas.com
						</h2>
					</Col>
					<Col className="innumber-col">
						<h5 className="upper-head">
							<img src={address} alt="..." />
							address
						</h5>
						<h2 className="lower-part-head">
							Milan chowk, Biratnagar, Nepal
						</h2>
					</Col>
				</Row>
			</Container>
            <Faq />
            <Footer />
		</>
	);
};

export default Contact;
