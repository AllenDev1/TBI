import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../scss/about scss/features.scss";
import features1 from "../../assets/features1.svg";
const FreturesAbout = () => {
	return (
		<>
			<Container className="freatures-container">
				<Row className="fleatures-row">
					<Col className="features-col-text">
						<h4 className="Features-h4">Features</h4>
						<h4 className="Features-desc">
							Long run, and work as an extension of the merchant's
							team.
						</h4>

						<p className="readmore">
							Our technology is very scalable. Our software can
							accommodate enormous numbers of clients. It's a
							marvelous opportunity. We'll keep developing
							products.
						</p>
					</Col>
					<Col className="features-col-design">
						<Row className="features-col-design-row">
							<Col className="Professional-box">
								<img src={features1} alt="" />
								<h4>Professional</h4>
								<p>
									Full service range including technical
									skills, design.
								</p>
							</Col>
							<Col className="Accessibility-box">
								<h4>Accessibility</h4>
								<p>
									Business understanding, ability to put
									themselves.
								</p>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default FreturesAbout;
