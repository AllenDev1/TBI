import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "../scss/faq.scss";
import axios from "axios";

const FAQS = (props) => {
	const { Title, Answers, index } = props;
	
	return (
		<>
			<Accordion.Item eventKey={index}>
				<Accordion.Header>{Title}</Accordion.Header>
				<Accordion.Body>{Answers}</Accordion.Body>
			</Accordion.Item>
		</>
	);
};
const Faq = () => {
	
	const [faqss, setFaqss] = useState();

	useEffect(() => {
		fetchFaqs();
	}, []);

	const fetchFaqs = () => {
		const options = {method: 'GET', url: '/faqlist'};

		axios.request(options).then(function (response) {
		  setFaqss(response.data)
		  
		}).catch(function (error) {
		  console.error(error);
		});
	};
	return (
		<>
			<div className="faq-bg">
				<Container className="faq-container">
					<h5 className="faq-text">FAQ</h5>
					<Row className="faq-row">
						<Col className="faq-text-col" xs={8} md={5}>
							<h3>Frequently Asked Questions</h3>
							<p>
								A digital agency is a business you hire to
								outsource your digital marketing efforts,
								instead of handling in-house.
							</p>
							<a href="/contact">Contact Us</a>
						</Col>
						<Col className="faq-col" xs={10} md={7}>
							<Accordion defaultActiveKey="1" flush={false}>
								{faqss?.map(( item, index ) => {
									return (
										<>
											<FAQS
												Title={item.Title}
												Answers={item.Answers}
												index={index}
												key={index}
											/>
										</>
									);
								})}
							</Accordion>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Faq;
